var numberOfButtons = document.querySelectorAll(".button").length;


for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

  });
}

  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
  });

  function makeSound(key){

    switch (key) {
      case "1":
        var tom1 = new Audio('sounds/cookie.mp3');
        tom1.play();
        break;

      case "2":
        var tom2 = new Audio('sounds/oh-hello.mp3');
        tom2.play();
        break;

      case "3":
        var tom3 = new Audio('sounds/no-kitty.mp3');
        tom3.play();
        break;

      case "4":
        var tom4 = new Audio('sounds/skrrt-skrrt.mp3');
        tom4.play();
        break;

      // case "5":
      //   var snare = new Audio('sounds/snare.mp3');
      //   snare.play();
      //   break;
      //
      // case "6":
      //   var crash = new Audio('sounds/crash.mp3');
      //   crash.play();
      //   break;
      //
      // case "7":
      //   var kick = new Audio('sounds/kick-bass.mp3');
      //   kick.play();
      //   break;
      //
      //   case "8":
      //     var kick = new Audio('sounds/kick-bass.mp3');
      //     kick.play();
      //     break;
      //
      //     case "9":
      //       var kick = new Audio('sounds/kick-bass.mp3');
      //       kick.play();
      //       break;

      default: console.log(buttonInnerHTML);
  }
}
