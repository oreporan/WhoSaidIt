// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
var correctAnswer;
var categoryChosen;
var points =0;

// PhoneGap is ready
function onDeviceReady() {
    getLocation();
    navigator.splashscreen.hide();
}

    /*For each question - Which button did he answer? */
    function isCorrect(userAnswer){
       var correct =  correctAnswer; 
       var user = document.getElementById(userAnswer).value;
        
        if(user==correct){
                 $('#'+userAnswer).css("background-Color","green");
         
            
            //Update points
            points++;
            
            //Show scoreboard
             score(); 
    
            //Ask next Question
              category(categoryChosen);

            
        }
        else{
                $('#'+userAnswer).css("background-Color","red");
              category(categoryChosen);
        }
        
        
        }


/*Function to Show the current score */
function score(){
    $("#score").html("Score: "+points); 
}


/* Main Function that splits by categories */
function category(category){
    var movies = 0;
    var sports = 1;
    var history = 2;
    var philosophy = 3;
    var random = 4;
    var music = 5;
    
    //Category chosen
    categoryChosen = category;
  
    //Display Score
    score();
    
      //TODO: Reset Button Background Colors 
 
    //To change Background color
    switch(category){
          
        case 0:
            $("#singleGameContent").css({'background-image':'url(images/movies.jpg)','background-size':'100%'});           
          correctAnswer = askQuestionMovies();
           
            break;
            
              case 1:
                $("#singleGameContent").css('background-image', 'url(images/sports.jpg)');
               correctAnswer =askQuestionSports();
            break;
            
              case 2:
            $("#singleGameContent").css('background-image', 'url(images/history.jpg)');
           correctAnswer =  askQuestionHistory();
            break;
            
              case 3:
                 $("#singleGameContent").css('background-image', 'url(images/philo.jpg)');
        correctAnswer =   askQuestionPhilo();
            break;
            
              case 4:
         $("#singleGameContent").css("background-Color","white");
           correctAnswer =  askQuestionRandom();
            break;
            
              case 5:
            $("#singleGameContent").css('background-image', 'url(images/music.jpg)');
           correctAnswer = askQuestionMusic();
            break;
            
            
    
    
    
    }
}
     
      /*Asking a Movie Question */
    function askQuestionMovies(){
    var quote = "\"Asta Lavista Baby\"";
           $("#question").val(quote); 
      
        //Answers        
    var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
     var three="Bruce Willis";
     var four="Tom Hanks";
        
        
         $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
        
        return one;
    }
      /*Asking a General Question */
    function askQuestionGeneral(){
    var quote = "\"Asta Lavista Baby\"";
        //Answers
     var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
     var three="Bruce Willis";
     var four="Tom Hanks";
        $("#question").val(quote); 
        $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
        
          return one;
    }
      /*Asking a Sports Question */
    function askQuestionSports(){
    var quote = "\"Baseball is 90% mental. The other half is physical\"";
        //Answers
     var one="Babe Ruth";
    var two="Yogi Berra";
     var three="Michael Jordan";
     var four="Derek Jeter";
        $("#question").val(quote); 
         $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
        
          return two;
    }
      /*Asking a Music Question */
    function askQuestionMusic(){
    var quote = "\"Hit my baby one more time\"";
        //Answers
     var one="Lady Gaga";
    var two="Nsync";
     var three="Britney Spears";
     var four="Hanson";
        $("#question").val(quote); 
         $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
        
          return three;
    }
      /*Asking a History Question */
    function askQuestionHistory(){
    var quote = "\"I have a dream...\"";
        //Answers
    var one="Martin Luther King Jr.";
    var two="Margaret Tatcher";
     var three="Dali Lama";
     var four="Itzhak Rabin";
        $("#question").val(quote); 
         $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
        
        return one
    }
      /*Asking a Philo Question */
    function askQuestionPhilo(){
    var quote = "\"I think, therefor I am\"";
        //Answers
    var one="Socrates";
    var two="Aplaton";
     var three="Decartes";
     var four="Tom Hanks";
        $("#question").val(quote); 
         $("#answerOne").val(one); 
         $("#answerTwo").val(two); 
         $("#answerThree").val(three); 
         $("#answerFour").val(four); 
    
    return three;
    }
    
 
    

