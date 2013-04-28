// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    getLocation();
    navigator.splashscreen.hide();
}

/*Function that Changes backgrounds per Category picked */
function category(category){
    var movies = 0;
    var sports = 1;
    var history = 2;
    var philosophy = 3;
    var general = 4;
    var music = 5;
    
    
   
    //To change Background color
    switch(category){
        case 0:
            $("#singleGameContent").css({'background-image':'url(images/movies.jpg)','background-size':'100%'});
            askQuestionMovies();
            break;
            
              case 1:
                $("#singleGameContent").css('background-image', 'url(images/sports.jpg)');
              askQuestionSports();
            break;
            
              case 2:
            $("#singleGameContent").css('background-image', 'url(images/history.jpg)');
         askQuestionHistory();
            break;
            
              case 3:
                 $("#singleGameContent").css('background-image', 'url(images/philo.jpg)');
       askQuestionPhilo();
            break;
            
              case 4:
         $("#singleGameContent").css("backgroundColor","white");
               askQuestionGeneral();
            break;
            
              case 5:
            $("#singleGameContent").css('background-image', 'url(images/music.jpg)');
             askQuestionMusic();
            break;
            
            
    
    
    
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
        
        //TODO: Make answers random on buttons
        var answers =[one,two,three,four]; 
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
           answers.splice( $.inArray(randomAnswer, answers), 1 );
        //Finish making random
        
        
         $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
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
            $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
    }
      /*Asking a Sports Question */
    function askQuestionSports(){
    var quote = "\"Baseball is 90% mental. The other half is physical\"";
        //Answers
     var one="Arnold Shwarznegger";
    var two="Yogi Berra";
     var three="Bruce Willis";
     var four="Tom Hanks";
        $("#question").val(quote); 
            $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
    }
      /*Asking a Music Question */
    function askQuestionMusic(){
    var quote = "\"Hit my baby one more time\"";
        //Answers
     var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
     var three="Bruce Willis";
     var four="Tom Hanks";
        $("#question").val(quote); 
            $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
    }
      /*Asking a History Question */
    function askQuestionHistory(){
    var quote = "\"I have a dream...\"";
        //Answers
    var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
     var three="Bruce Willis";
     var four="Tom Hanks";
        $("#question").val(quote); 
            $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
    }
      /*Asking a Philo Question */
    function askQuestionPhilo(){
    var quote = "\"I think, therefor I am\"";
        //Answers
    var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
     var three="Bruce Willis";
     var four="Tom Hanks";
        $("#question").val(quote); 
            $("#answerOne").html(one); 
         $("#answerTwo").html(two); 
         $("#answerThree").html(three); 
         $("#answerFour").html(four); 
    }
    
 
    

}