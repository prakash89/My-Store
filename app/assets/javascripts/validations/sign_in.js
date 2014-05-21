function ValidateSigninForm(){
  $('#user_sign_in').validate({
    debug: true,
    rules: {
      "user[email]": {
        required: true
      },
      "user[password]": {
        required: true
      }
    },
    errorElement: "span",
    errorClass: "help-block",
    messages: {
      "user[email]": {
        required : "Please specify Email"
      },
      "user[password]":  {
        required : "Please specify Password"
      }
    },

    highlight: function(element) {
      $(element).parent().addClass("has-error");
    },
    unhighlight: function(element) {
      $(element).parent().removeClass("has-error");
    },
    invalidHandler: function(event, validator) {
      // 'this' refers to the form
      var errors = validator.numberOfInvalids();
      if (errors) {
        $('#div_flash_message').html('').removeClass('alert alert-danger');
        // Populating error message
        var errorMessage = errors == 1
        ? 'You missed 1 field. It has been highlighted'
        : 'You missed ' + errors + ' fields. They have been highlighted';

        // Removing the form error if it already exists
        $("#div_sign_in_js_validation_error").remove();

        errorHtml = "<div id='div_sign_in_js_validation_error' class=\"alert alert-danger\" data-alert=\"alert\" style=\"margin-bottom:5px;\">"+ errorMessage +"</div>"
        
        // Show error labels
        $("div.error").show();

      } else {
        // Hide error labels
        $("div.error").hide();
        // Removing the error message
        $("#div_sign_in_js_validation_error").remove();
      }
    },
    submitHandler: function(form) {
      // do other things for a valid form
      var csrfToken = $('meta[name="csrf-token"]').attr('content');
      jQuery.ajax({
        url: "/users/sign_in",
        data: $(form).serialize(),
        type: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken
        },
        dataType: 'script',
        error: function(response){
          $('#div_flash_message').addClass('alert alert-danger');
          $('#div_flash_message').show().html(response.responseText);
        }
      });

    }

  });
  
}