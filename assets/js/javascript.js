
var wordlist = ["cat", "dragon", "ant", "monkey", "giraffe", "kangaroo", "dog", "snake", "seal", "tiger", "cheetah"];
var wordarr = splitter(wordlist[Math.floor(Math.random()*wordlist.length)]);
var tovictory = wordarr.length;  
var answerarr = create_dash_arr(wordarr, wordarr.length)
var wrong = 0;
var gameactive = false;
var guessarr =[" "];




// Function begins listening for a key when document initializes, then activates when a key is pressed
$(document).ready(function(){
  gameactive = true;
  printscreen(answerarr);
  document.getElementById("lives").innerHTML = "Good luck!";   
  gameplay();

})


//turns correct answer into array
function splitter(word){


  var arr = word.split("")
  return arr;

}

//create a new empty answer array
function create_dash_arr(array, number){
  var dasharr = [ ];

  for (var i = 0; i <= number; i++){
    if(array[i] === " "){
      tovictory = tovictory - 1;
      dasharr.push("&nbsp;");
    }
    else{
      dasharr.push("_");
    }
  }
  return dasharr;

}

//checks answer key and rebuilds answer array
function answercheck(key){
  var correct = 0;
  for(var i = 0; i < answerarr.length; i++){
    if (key === wordarr[i]){
      answerarr[i] = key;
      correct++;
    }
  }

  return correct;  

}

function printscreen(x){

  for (var i = 0; i < wordarr.length; i++){
    document.getElementById("animeanswer").innerHTML += ( " " + x[i]);
  }



}

function gameplay(){
      console.log(tovictory);
  $(document).keypress(function(event){
    console.log(tovictory);
    if (gameactive === true) {
    
      if (wrong < 7 && tovictory > 0) {
        var a = event.which;
        if (jQuery.inArray(String.fromCharCode(a), guessarr) === -1){

          newletter(a);
        } 

        if (wrong === 7 || tovictory === 0){

          gameactive = false;
          endgame();
        }
      }
    }
    else{

      //resets the game
      wordarr = splitter(wordlist[Math.floor(Math.random()*wordlist.length)]);
      tovictory = wordarr.length;  
      answerarr = create_dash_arr(wordarr, wordarr.length)
      wrong = 7;
      imgchange();
      wrong = 0;
      guessarr =[" "];
      document.getElementById("guesses").innerHTML = guessarr.toString();
      document.getElementById("lives").innerHTML = "Good luck!";      
      document.getElementById("animeanswer").innerHTML = ""; 
      printscreen(answerarr); 
      gameactive = true;


    }
  })
}


function newletter(a){

  var results = 0;
  var results = answercheck(String.fromCharCode(a));
  if (results >= 1){
    tovictory = (tovictory - results)
  }
  else{
    imgchange();
  }

  guessarr.push(String.fromCharCode(a));
  document.getElementById("guesses").innerHTML = guessarr.toString();
  document.getElementById("animeanswer").innerHTML = "";
  printscreen(answerarr);

}

function endgame(){

  if (wrong === 7){
    document.getElementById("lives").innerHTML = "YOU LOSE. PLAY AGAIN?";
    document.getElementById("animeanswer").innerHTML = "";
    printscreen(wordarr);
  }
  else {
    document.getElementById("lives").innerHTML = "YOU WIN! PLAY AGAIN?";
    document.getElementById("animeanswer").innerHTML = "";
    printscreen(wordarr);    
  }
}

function imgchange(){
  switch(wrong){
  case 0:
  $("#hangman0").hide();
  $("#hangman1").show();
  wrong++;
  break;
  case 1:
  $("#hangman1").hide();
  $("#hangman2").show();
  wrong++;
  break;
  case 2:
  $("#hangman2").hide();
  $("#hangman3").show();
  wrong++;
  break;
  case 3:
  $("#hangman3").hide();
  $("#hangman4").show();
  wrong++;
  break;    
  case 4:
  $("#hangman4").hide();
  $("#hangman5").show();
  wrong++;
  break;   
  case 5:
  $("#hangman5").hide();
  $("#hangman6").show();
  wrong++;
  break;    
  case 6:
  $("#hangman6").hide();
  $("#hangman7").show();
  wrong++;
  break;    
  case 7:
  $(".hangmanimg").hide();
  $("#hangman0").show();
  wrong++;
  break;    
  }    
}