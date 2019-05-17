/* 
Use jQuery $(document).ready() to begin with 
The nice thing about $(document).ready() is that it fires before window.onload. 
The load function waits until everything is loaded, including external assets and images.
*/ 
$(document).ready(() => {
  console.log("App.js connected!");

  // Everything here and after is written in vanilla JavaScript except for the parts noted as using jQuery

  // Initially hide backgroundImageWithOpacity and backgroundImage 
  document.getElementsByClassName("backgroundImageWithOpacity")[0].style.display = "none";   
  document.getElementsByClassName("backgroundImage")[0].style.display = "none";     
  document.getElementsByClassName("splashTitleBanner")[0].style.display = "none";
  document.getElementsByClassName("mainContentContainer")[0].style.display = "none";
  // document.getElementsByClassName("instructionsContainer")[0].style.display = "none";

  // When the user clicks startPrototypeButton
  document.getElementsByClassName("startPrototypeButton")[0].addEventListener("click", () => {
    splash();
  });

  const splash = () => {
    console.log("This is the splash function");
    document.getElementsByClassName("instructionsContainer")[0].style.display = "none";
    document.getElementsByClassName("backgroundImage")[0].style.display = "block";
    document.getElementsByClassName("splashTitleBanner")[0].style.display = "block";

    // After 2 seconds, splashFadeOut is called
    setTimeout(splashFadeOut, 2000);
  }
  
  const splashFadeOut = () => {
    // This part is written in jQuery because .fadeOut() is a lot shorter to write than using vanilla JS
    $(".backgroundImage").fadeOut();
    $(".splashTitleBanner").fadeOut();
    app01();
  }

  const app01 = () => {
    // document.getElementsByClassName("backgroundImage")[0].style.display = "none";     
    document.getElementsByClassName("backgroundImageWithOpacity")[0].style.display = "block";
    document.getElementsByClassName("mainContentContainer")[0].style.display = "block";
    console.log("This is the app01 function") 
  }

  // When the user clicks the submit button
  document.getElementsByClassName("submit")[0].addEventListener("click", () => {
    // This part is written in jQuery because this is a Bootstrap modal and Bootstrap components use jQuery to call them
    $("#requestPaymentModal").modal("toggle");
  });

});