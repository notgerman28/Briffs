$(document).ready(function () {
    $("#menu1").click(function () {

        $("#menu").toggle();
    })
});


document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.querySelector(".wrapper"),
          buttons = document.querySelectorAll(".button");
    const cookieModal = document.querySelector("#cookieModal");
    const acceptCookiesBtn = document.querySelector("#acceptCookiesBtn");
  
    const executeCodes = () => {
     
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      if (cookiesAccepted !== 'true') {
        cookieBox.classList.add("show");
      }
      
  
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("show");
  
          if (button.id == "acceptBtn") {
            localStorage.setItem('cookiesAccepted', 'true');
           
          }
        });
      });
    };
    window.addEventListener("load", executeCodes);
  
    acceptCookiesBtn.addEventListener('click', function hideCookieModal() {
      cookieBox.style.display = 'none';
    });
});

$(document).ready(function () {
  $("#nba").click(function () {
    $("#greenfn1").hide();
    $("#greenfn2").show();
    $("#greenfn3").hide();
    $(".mlb2").hide();
    $(".mlb3").show();
    $(".nfl3").hide();
    $(".nfl2").show();
    $(".nba2").hide();
    $(".nba3").show();
  });
});

$(document).ready(function () {
  $("#mlb").click(function () {
    $("#greenfn1").show();
    $("#greenfn2").hide();
    $("#greenfn3").hide();
    $(".mlb2").show();
    $(".mlb3").hide();
    $(".nfl3").hide();
    $(".nfl2").show();
    $(".nba2").show();
    $(".nba3").hide();
  });
});

$(document).ready(function () {
  $("#mlb1").click(function () {
    $("#greenfn1").show();
    $("#greenfn2").hide();
    $("#greenfn3").hide();
    $(".mlb2").show();
    $(".mlb3").hide();
    $(".nfl3").hide();
    $(".nfl2").show();
    $(".nba2").show();
    $(".nba3").hide();
  });
});

$(document).ready(function () {
  $("#mlb").click(function () {
    $("#greenfn1").show();
    $("#greenfn2").hide();
    $("#greenfn3").hide();
  });
});

$(document).ready(function () {
  $("#nfl").click(function () {
    $("#greenfn1").hide();
    $("#greenfn2").hide();
    $("#greenfn3").show();
    $(".mlb2").hide();
    $(".mlb3").show();
    $(".nfl2").hide();
    $(".nfl3").show();
    $(".nba3").hide();
    $(".nba2").show();
  });
});

$(document).ready(function () {
  $("#nba1").click(function () {
    $("#greenfn1").hide();
    $("#greenfn2").show();
    $("#greenfn3").hide();
    $(".mlb2").hide();
    $(".mlb3").show();
    $(".nfl3").hide();
    $(".nfl2").show();
    $(".nba2").hide();
    $(".nba3").show();
  });
});


