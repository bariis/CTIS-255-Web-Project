
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

    for(var i = 0; i<difficulty; i++){
        var number = Math.floor(Math.random() * nums.length);
        randomNumbers.push(nums[number]);
        nums.splice(number, 1);
    }

    for(var i = 0; i< randomNumbers.length; i++){
        $(`#${randomNumbers[i]}`).css("visibility","visible").find("span").hide();
        console.log(randomNumbers[i]);
    }

       var delay = 5000;
    for(var i = 1; i<=randomNumbers.length; i++){
        $(`#${randomNumbers[i-1]} > span`).html(`${i}`).css("visibility","visible").delay(`${delay}`).fadeIn(1).delay(1000).fadeOut(1000);
       delay += 2000;
    }
}

$(function(){
    
     $("#container").animate({left : '498px'}, 2000);
     
     var difficulty = 4;
     $("#start").click(function(){
        $("#container").css("display","inline-block").fadeOut(1500);
        showGameCanvas();
         setRandomBoxes(difficulty);
         });
     $("#difficulty").change(function(e){
         difficulty = $(this).val();    
     })
});


