//Bug using booleans so created an integer for button presses
let buttonPressed = 0;

//ARRAY OF CONTENT
let hiddenContent = [
                     "#akronWeather",
                     "#minneapolisInfoDiv",
                     "#minneapolisWeather",
                     "#louisvilleInfoDiv",
                     "#louisvilleWeather",
                    ];
//ARRAY OF BUTTONS
let buttons = [
                     "#akronButton",
                     "#minneapolisButton",
                     "#minneapolisWeather",
                     "#louisvilleButton",
                     "#louisvilleWeatherButton",
                    ];


buttonClickEvent();



function buttonClickEvent(){

$(document).ready(function(){

for(let x = 0; x < hiddenContent.length;x++){
  $(hiddenContent[x]).hide();
  console.log(hiddenContent[x]);


  $(buttons[x]).on("click",function(){
    if(buttonPressed === 0){
      $(hiddenContent[x]).show();
      buttonPressed++;
      console.log(buttonPressed);

    } else if (buttonPressed === 1){
      $(hiddenContent[x]).hide();
      buttonPressed--;
      console.log(buttonPressed);
    }
    });
  } // end of for loop
}); //end of ready function
}
