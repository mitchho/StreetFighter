$(document).ready(function() {

	$('.ryu').mouseenter(function() {
   // alert('mouse entered .ryu div');
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    })
    .mouseleave(function() {
   // alert('mouse left');
    $('.ryu-ready').hide();
    $('.ryu-still').show();  
    })
    .mousedown(function(){
        playHadoukenSound();
        console.log('mousedown');
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            600,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    })
    .mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    });


    $(document).keydown(function(event) {
    console.log('keydown');
    console.log(event.which);
    if (event.which == 88)
    { 
        // ryu assumes the cool pose
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    }

    }).keyup(function() {
    console.log('keyup');
    $('.ryu-cool').hide();
    $('.ryu-still').show();
    });
     

});

function playHadoukenSound() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}