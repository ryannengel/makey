// PINK
$(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".pink").css({
        backgroundColor: '#' + randomColor
    });
    $("#colorcode").text("#" + randomColor);
});

// ORANGE
$(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".orange").css({
        backgroundColor: '#' + randomColor
    });
    $("#colorcode").text("#" + randomColor);
});


// BLUE
$(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".blue").css({
        backgroundColor: '#' + randomColor
    });
    $("#colorcode").text("#" + randomColor);
});


// RED
$(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".red").css({
        backgroundColor: '#' + randomColor
    });
    $("#colorcode").text("#" + randomColor);
});


// YELLOW
$(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".yellow").css({
        backgroundColor: '#' + randomColor
    });
    $("#colorcode").text("#" + randomColor);
});



// makey part
$('html').click( function(){
  
  location.reload();
  
});