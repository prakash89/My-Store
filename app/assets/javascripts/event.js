var ready;
$(document).ready(function(){
    });

$(document).ready(ready);
$(document).on('page:load', ready);

$(document).ready(function() {

var MaxInputs       = 8; //maximum input boxes allowed
var InputsWrapper   = $("#InputsWrapper"); //Input boxes wrapper ID
var InputsWrapper2   = $("#InputsWrapper2"); //Input boxes wrapper ID
var AddButton       = $("#AddMoreFileBox"); //Add button ID

var x = InputsWrapper.length; //initlal text box count
var FieldCount=1; //to keep track of text box added

$(AddButton).click(function (e)  //on add input button click
{
        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++; //text box added increment
            //add input box
            $(InputsWrapper).append('<div><input type="text" name="mytext[]" id="field_'+ FieldCount +'" value=" "/><a href="#" class="removeclass">&times;</a></div> ');
            $(InputsWrapper2).append('<div><input type="text" name="mytext[]" id="field_'+ FieldCount +'" value=" "/><a href="#" class="removeclass">&times;</a></div> ');
            x++; //text box increment
        }
return false;
});

$("body").on("click",".removeclass", function(e){ //user click on remove text
        if( x > 1 ) {
                $(this).parent('div').remove(); //remove text box
                x--; //decrement textbox
        }
return false;
}) 

});