/*
$(document).ready(function() {
    $('div').slidDown('slow');
});
*/

$(document).ready(function() {

                           
//  $("div").css("border", "3px solid red");
    

    $('.aboutText').hide();
    $('.contactText').hide();
    $('.photosText').hide();
    $('.workText').hide();
    
//    $('.red').fadeOut();
    $('.home').click( function() {
        $('.aboutText').hide();
        $('.contactText').hide();
        $('.photosText').hide();
        $('.workText').hide();
        $('.homeText').show();
    });

    $('.about').click( function() {

        $('.homeText').hide();
        $('.contactText').hide();
        $('.photosText').hide();
        $('.workText').hide();
        $('.aboutText').show();
    });

    $('.contact').click( function() {

        $('.homeText').hide();
        $('.aboutText').hide();
        $('.photosText').hide();
        $('.workText').hide();
        $('.contactText').show();
    }); 

    $('.photos').click( function() {

        $('.homeText').hide();
        $('.aboutText').hide();
        $('.contactText').hide();
        $('.workText').hide();
        $('.photosText').show();
    }); 

    $('.work').click( function() {

        $('.homeText').hide();
        $('.aboutText').hide();
        $('.contactText').hide();
        $('.photosText').hide();
        $('.workText').show();
    });

/*    $('.feedbackTab').click( function() {
        $('.feedbackPanel').slideToggle('slow');
    //});*/
});

