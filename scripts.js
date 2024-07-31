$(document).ready(function(){
    $("#signvalidate").validate( {
        rules: {
        firstname:{
            required: true,
            minlength: 6,
        },
        surname:{
            required: true,
            minlength: 6,
        },
      phoneno:{
            required: true,
        },
        password:{
            required: true,
            minlength: 8,
        },
        dob: {
            required: true,

        },
        gender:{
            required: true,
        }



    }
 } )



});