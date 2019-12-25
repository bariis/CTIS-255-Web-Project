
function showGameCanvas(){
    $("#gameCanvas .box").each(function(e){
        $(this).css("visibility","hidden");
    })
    $("#gameCanvas").delay(2000).fadeIn(2000);
    
}

    function setRandomBoxes(randomNumbers){

  //      console.log(`difficulty is ${difficulty}`);
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

    function boxesClicked(randomNumbers){

        $(".box").click(function(){
            console.log("box clicked");  
        })

        // for(var k = 0; k < randomNumbers.length; k++){
        //     console.log($(`#${randomNumbers[k]}`).find("span").html());
        //     console.log(`${randomNumbers[k]}`);
      
        // }

        var value = 1;
        for(var i  = 0 ; i < randomNumbers.length; i++){
            $(`#${randomNumbers[i]}`).click(function(){
                if($(this).find("span").html() == value){
                    console.log("true")
                    value += 1;
                } else {
                    console.log("false");
                }

            })
        }

            // (`#${randomNumbers[i]}`).click(function()
            //     if($(this).html() == value){
            //         console.log("true");
            //         value += 1;
            //     } 



        // $("").click(function() {
        //     $("#btnGroup").append(`<button>New Button ${id}</button>`); 
        //     id++;
        // });
        // $("#btnGroup").on("click", "button", function() {
        //     $("#panel").html( $(this).html() + " clicked.");
        // }); 
    }



$(function(){
    
     $("#container").animate({left : '498px'}, 2000);
     
     var difficulty = 4;

     $("#difficulty").change(function(e){
        difficulty = $(this).val();    
    })

     $("#start").click(function(){

        $("#container").css("display","inline-block").fadeOut(1500);
        showGameCanvas();

        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        var randomNumbers = [];

        // random boxes and prevention of duplication
        for(var i = 0; i<difficulty; i++){
           var number = Math.floor(Math.random() * nums.length);
           randomNumbers.push(nums[number]);
            nums.splice(number, 1);
        }

         setRandomBoxes(randomNumbers);
         boxesClicked(randomNumbers);

         });
  

});


