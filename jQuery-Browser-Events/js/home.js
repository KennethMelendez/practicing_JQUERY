//Bug using booleans so created an integer for button presses
let buttonPressed = 1;

//ARRAY OF CONTENT
let hiddenContent = [
                     "#mainInfoDiv",
                     "#akronInfoDiv",
                     "#minneapolisInfoDiv",
                     "#minneapolisWeather",
                     "#louisvilleInfoDiv",
                     "#louisvilleWeather",
                    ];
//ARRAY OF BUTTONS
let buttons = [
                     "#mainButton",
                     "#akronButton",
                     "#minneapolisButton",
                     "#minneapolisWeather",
                     "#louisvilleButton",
                     "#louisvilleWeatherButton",
                    ];


hideContent();


$(document).ready(function(){
$("#mainInfoDiv").show();
});


function hideContent(){
for(let x = 0; x < hiddenContent.length;x++){
  $(hiddenContent[x]).hide();
  console.log(hiddenContent[x]);
  } // end of for loop
}

hideContent();
buttonClick();

function buttonClick(){


for(let showContent = 0; showContent < hiddenContent.length;showContent++){
  for(let hideContent = 0; hideContent < hiddenContent.length; hideContent++){
  $(buttons[showContent]).on("click",function(){


        $(hiddenContent[hideContent]).hide();
        $(hiddenContent[showContent]).show();


  });
}
}




}
