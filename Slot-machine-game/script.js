$(".imgbtn").on("click", choosePic1);
$(".restartbtn").on("click", restart);
$(".changebtn").on("click", change);

var images = new Array("img/lemon.png", "img/cherry.png", "img/bar.png", "img/dollar.png", "img/grapes.png", "img/orange.png", "img/seven.png");

var amt;
var reset = document.querySelector(".restartbtn").disabled =true;

function choosePic1() {
  amt = $("input").val();

  if(amt!=200)
  {
    $(".message").append("Amount should be less than $200 and not more than $200! Restart the game... ");
    document.querySelector(".imgbtn").disabled = true;
    document.querySelector("input").disabled = true;
    document.querySelector(".restartbtn").disabled =false;
  }
  
  if(amt==200){
    document.querySelector("input").disabled = true;
    var randomNum = Math.floor(Math.random() * images.length);

    document.querySelector(".default_img").src = images[randomNum];
    choosePic2();
  
    $(".message").append("You lose! Restart the game.");
    document.querySelector(".imgbtn").disabled = true;
    document.querySelector(".restartbtn").disabled =false;
  }
}

function choosePic2(){
  $(".message").html("");
  var randomNum = Math.floor(Math.random() * images.length);
  document.querySelector(".default_img2").src = images[randomNum];
  choosePic3();
}

function choosePic3(){
  var randomNum = Math.floor(Math.random() * images.length);
  document.querySelector(".default_img3").src = images[randomNum];
  var audio = new Audio("audio/You-lose.mp3"); audio.play();
}

function change(){
  if(confirm("Thank you for playing!! Now Let's Watch A Movie...")){
  location.replace("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjdhaf8zJzzAhVeILcAHR_UBjoQFnoECAgQAw&url=https%3A%2F%2Fwww.netflix.com%2F&usg=AOvVaw0qCEQCi5zeSVyTXooUjQV6")
  }
  else{
      console.log("'Cancel' button was pressed.");
  }
}

function showmessage(){
  $(".message").append("Congratulations ");
}

function restart() {
  document.querySelector(".imgbtn").disabled = false;
  document.querySelector("input").disabled = false;
  document.querySelector(".restartbtn").disabled =true;
  $(".message").html("");
  $("input").val("");
  location.reload();
}


