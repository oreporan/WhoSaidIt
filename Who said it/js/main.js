/* JavaScript Document*/

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

var correctAnswer;
var categoryChosen;
var points = 0;

// PhoneGap is ready
function onDeviceReady() {
    getLocation();
    navigator.splashscreen.hide();
}

    /*For each question - Which button did he answer? */
function isCorrect(userAnswer,userAnswerText){
    var correct =  correctAnswer; 
   var user =  $('#'+userAnswerText).text();
    if(user == correct){
        $('#'+userAnswer).css("background","#33CC00");
           
        //Update points
        points++;
            
    } else {
        $('#'+userAnswer).css("background","red");
    }
    
    //Display Score
    score();
    
    //Reset button colors
   nextQuestion(userAnswer);
    
  
            
}

//Resets background for buttons, enables buttons and advances to next question
function nextQuestion(user){
    
	//Disable all answers
       $('a.answerButton').addClass('ui-disabled');
 setTimeout(function (){
              $('#'+user).css('background','');
              
              //Enable buttons
     		$('a.answerButton').removeClass('ui-disabled');
			clicked = false; 
              
                //Ask next Question
				category(categoryChosen+1);
				

         }, 1000);
	
	
	}

function timer() {
    var seconds_left = 10;
    var interval = setInterval(function() {
        
        document.getElementById('timer').innerHTML = --seconds_left;
        
        if(seconds_left <= 5) {
            $('#timer').css('color', 'red');
        }
        
        if(seconds_left <= 0) {
            window.location.href = "#singleGameEnd";
            clearInterval(interval);
        }
    }, 1000);
}

/*Function to Show the current score */
function score(){
    
    //Change score color to yellow
    $('#score').css('color','yellow');
    $("#score").html("Score: " + points); 
}

//To change Background color
function background(num){
 
    switch(num){
          
        case 0:
            $("#singleGameContent").css({'background-image':'url(http://th05.deviantart.net/fs71/PRE/i/2011/177/1/0/tileable_wood_texture_02_by_ftourini-d3k1vk9.jpg)','background-size':'100%'});           
              
            break;
            
        case 1:
            $("#singleGameContent").css('background-image', 'url(images/sports.png)');
    
            break;
            
        case 2:
            $("#singleGameContent").css('background-image', 'url(images/history.png)');
       
            break;
            
        case 3:
            $("#singleGameContent").css('background-image', 'url(images/philo.png)');

            break;
            
        case 4:
            $("#singleGameContent").css("background-Color","white");
        
            break;
            
        case 5:
            $("#singleGameContent").css('background-image', 'url(http://idesigniphone.net/wallpapers/54468.png)');
         
            break;
    }
    
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
  
    
    
    switch(categoryChosen){
          
        case movies:
            correctAnswer = askQuestionMovies();
            
            break;
            
        case sports:
            correctAnswer =askQuestionSports();
            
            break;
            
        case history:
            correctAnswer =  askQuestionHistory();
            
            break;
            
        case philosophy:    
            correctAnswer =   askQuestionPhilo();
            
            break;
            
        case random:
            correctAnswer =  askQuestionRandom();
            
            break;
            
        case music:
            correctAnswer = askQuestionMusic();
            
            break;
    }
}
     
/*Asking a Movie Question */
function askQuestionMovies(){
    //Question
    var quote = "\"Asta Lavista Baby\"";
     
    $("#question").html(quote); 

    //Answers        
    var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
    var three="Bruce Willis";
    var four="Tom Hanks";
	
	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 
	
    

        
    return one;
}
    
/*Asking a General Question */
function askQuestionRandom(){
    
    //Question
    var quote = "\"Asta Lavista Baby\"";
        
    //Answers
    var one="Arnold Shwarznegger";
    var two="Sylvester Stalone";
    var three="Bruce Willis";
    var four="Tom Hanks";
    
    $("#question").html(quote); 
	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 
    return one;
}
    
    /*Asking a Sports Question */
    function askQuestionSports(){
        
        //Question
        var quote = "\"Baseball is 90% mental. The other half is physical\"";
        
        //Answers
        var one="Babe Ruth";
        var two="Yogi Berra";
        var three="Michael Jordan";
        var four="Derek Jeter";
        $("#question").html(quote); 
    	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 
        return two;
    }
    
    /*Asking a Music Question */
    function askQuestionMusic(){
        
        //Question
        var quote = "\"Hit me baby one more time\"";
        
        //Answers
        var one="Lady Gaga";
        var two="Nsync";
        var three="Britney Spears";
        var four="Hanson";
        $("#question").html(quote); 
        	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 
          
        return three;
    }
    
    /*Asking a History Question */
    function askQuestionHistory(){
    
        //Question
        var quote = "\"I have a dream...\"";
    
        //Answers
        var one="Martin Luther King Jr.";
        var two="Margaret Tatcher";
        var three="Dali Lama";
        var four="Itzhak Rabin";
        $("#question").html(quote); 
     	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 

        return one
    }
    
    /*Asking a Philo Question */
    function askQuestionPhilo(){
    
        //Question
        var quote = "\"I think, therefor I am\"";
        
        //Answers
        var one="Socrates";
        var two="Aplaton";
        var three="Decartes";
        var four="Tom Hanks";
        $("#question").html(quote); 
       	$("#one").html(one); 
	$("#two").html(two); 
	$("#three").html(three); 
	$("#four").html(four); 
        return three;
    }
    
    //Redirects from Logo to main page
    function redirect(){
   window.location = $('a').attr('href');
}

setTimeout(redirect, 3200);
    



    

