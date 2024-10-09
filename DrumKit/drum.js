
let numberOfButtons = document.querySelectorAll(".button").length;
console.log(numberOfButtons);

for (let j = 0; j < numberOfButtons; j++) {

  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });



heading = document.getElementById('head')

  
  function sound(key) {
    switch (key) {
      case "p":
        let sound1 = new Audio("drum1.mp3");
        sound1.play();
        break;
  
      case "a":
        let sound2 = new Audio("drum2.mp3");
        sound2.play();
        break;
  
      case "e":
        let sound3 = new Audio('drum3.mp3');
        sound3.play();
        break;
  
      case "k":
        let sound4 = new Audio('drum4.mp3');
        sound4.play();
        break;
  
      case "o":
        let  sound5 = new Audio('drum5.mp3');
        sound5.play();
        break;
  
      case "k":
        let sound6 = new Audio('drum6.mp3');
        sound6.play();
        break;
  
      case "c":
        let  sound7 = new Audio('drum7.mp3');
        sound7.play();
        break;
  
      default:
      let all=document.querySelector(".all")
      all.style ="display:none;"
      let errors =document.getElementById("error")
      errors.style = "display:block";
      heading.innerHTML = 'Something is Wrong!'
    
      errors.innerHTML = 'Character Is Not Found 😔'
      errors.style.alignContent = 'center';
      

    }
  }

  function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("animation");
  
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }
