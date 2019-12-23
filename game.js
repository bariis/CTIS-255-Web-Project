
function showGameCanvas(){
    $("#gameCanvas .box").each(function(e){
        $(this).css("visibility","hidden");
    })
    $("#gameCanvas").delay(2000).fadeIn(2000);
    
}

function setRandomBoxes(difficulty){
    var randomNumbers = [];
    for(var i = 1; i<=difficulty; i++){
        randomNumbers[i] = Math.floor(Math.random() * 16 + 1 );
        console.log(randomNumbers[i]);
        // $(`.${randomNumbers[i]}`).delay(5000).fadeIn(2000);
    }   
       // $(".box").css("visibility","hidden");
      // $(".box").css("visibility","visible");
      $(`#${randomNumbers[2]}`).delay(2000).fadeIn(2000).css("visibility","visible");
        // $("#1").delay(2000).fadeIn(2000).css("visibility","visible");
        // $("#5").delay(2000).fadeIn(2000).css("visibility","visible");
        // $("#8").delay(2000).fadeIn(2000).css("visibility","visible");
        // $("#3").delay(2000).fadeIn(2000).css("visibility","visible");
    //$("#gameContainer #1").css("display","inline-block").delay(1000).fadeIn(2000);
}

function placeRandomBoxes(){
   var i = 0;
    // var randomX = Math.random() * 100 + 150;
    // var randomY = Math.random() * 100 + 150;
    $(".boxes").each(function(e){
        var randomX = Math.random() * ($("#gameCanvas").width() - $(this).width());
        var randomY = Math.random() * ($("#gameCanvas").height() - $(this).height());
        $(this).css({
            left: randomX,
            top: randomY
        });

        // $(this).css("left", Math.random() * ($("gameCanvas").width() - $(this).width()).css("top", Math.random() *
        //    ($("#gameCanvas").height() - $(this).height)   )
        //                 )
    });
}
// $(".img-1, .img-2, .img-3").each(function(index) {
//     $(this).css({
//       left: Math.random() * ($(".main").width() - $(this).width()),
//       top: Math.random() * ($(".main").height() - $(this).height())
//     });
//   });

$(function(){
    
     $("#container").animate({left : '498px'}, 2000);
     
     var difficulty = 4;
     $("#start").click(function(){
        $("#container").css("display","inline-block").fadeOut(1500);
        showGameCanvas();
       setRandomBoxes(difficulty);
        // setRandomBoxes(difficulty);
         placeRandomBoxes();
     });
     $("#difficulty").change(function(e){
         difficulty = $(this).val();    
     })
});


// $("#panel").fadeIn(2000, function(){console.log('fadeIn finished')})
// .delay(2000)
// .fadeOut(1000, function() {console.log('animation is over')}) ;