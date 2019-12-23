
function showGameCanvas(){
    $("#gameCanvas .box").each(function(e){
        $(this).css("visibility","hidden");
    })
    $("#gameCanvas").delay(2000).fadeIn(2000);
    
}

function setRandomBoxes(difficulty){

    console.log(`difficulty is ${difficulty}`);
    var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var randomNumbers = [];
    var number;
    var i = 0;

while (i != (difficulty-1)) {
    number = Math.floor(Math.random() * 16);
    console.log(number);
    randomNumbers[i] = nums[number-1];
    nums.splice(number,1);
    i++;
}

    // var randomNumbers = [];
    // for ( var i=0; i<difficulty; i++) {
    //     var number = Math.floor(Math.random() * 16 + 1) ;
    //     randomNumbers.push(number) ;
    //     img.splice(number,1) ; // remove from the array.
    // }

    // var randomNumbers = new Array(difficulty).fill(0);
    // var flag = false; // to prevent duplicate numbers 
    // var i = 0;
    // console.log(123);
    // while((i != (difficulty-1)) && flag){
    //     var number =  Math.floor(Math.random() * 16 + 1);
    //     for(var k = 0; k < randomNumbers.length; k++){
    //         if(randomNumbers[k] == number)
    //             flag = true;
    //         else {
    //             randomNumbers[i] = number;
    //             i++;
    //             flag = false;
    //         }
    //         console.log(randomNumbers[k]);
    //     }
    //         console.log(number);
    // }




    // for(var i = 0; i<difficulty; i++){
    //    console.log(randomNumbers[i]);
    //     //console.log(randomNumbers[i]);
    //   //  console.log(randomNumbers[i]);
    // }   


    for(var i = 0; i< randomNumbers.length; i++){
    $(`#${randomNumbers[i]}`).css("visibility","visible");
        
    }
       // $(".box").css("visibility","hidden");
      // $(".box").css("visibility","visible");
   //   $(`#${randomNumbers[2]}`).delay(2000).fadeIn(2000).css("visibility","visible");
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