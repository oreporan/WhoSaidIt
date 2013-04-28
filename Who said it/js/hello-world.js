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
            $("#singleGameContent").css('background-image', 'url(images/movies.jpg)');
            break;
            
              case 1:
                $("#singleGameContent").css('background-image', 'url(images/sports.jpg)');
            break;
            
              case 2:
            $("#singleGameContent").css('background-image', 'url(images/history.jpg)');
            break;
            
              case 3:
                 $("#singleGameContent").css('background-image', 'url(images/philo.jpg)');
            break;
            
              case 4:
         $("#singleGameContent").css("backgroundColor","white");
            break;
            
              case 5:
            $("#singleGameContent").css('background-image', 'url(images/music.jpg)');
            break;
            
            
    
    
    
    }
    

}