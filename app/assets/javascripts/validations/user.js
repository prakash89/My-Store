
function ValidateUserForm(){
  
  $('#signupform').validate({
    debug: true,
    rules: {
      "user[email]": {
        required: true,
        email: true
      },
      "user[password]": {
        required: true,
        minlength: 8,
        maxlength: 128
      },
      "user[password_confirmation]":{
        required: true,
        minlength: 8,
        maxlength: 128
      }
    },
    errorElement: "span",
    errorClass: "help-block",
    messages: {
      "user[email]": {
        required : "Please specify Email ID"
      },
      "user[password]": {
        required : "Please specify Password",
        minlength: "Minimum length should be 8 characters",
        maxlength: "Maximum length should be 128 characters"
      },
      "user[password_confirmation]":{
        required : "Please specify Password",
        minlength: "Minimum length should be 8 characters",
        maxlength: "Maximum length should be 128 characters"
      }
    },

    highlight: function(element) {
      $(element).parent().addClass("has-error");
    },
    unhighlight: function(element) {
      $(element).parent().removeClass("has-error");
    }
  });
  
}
  