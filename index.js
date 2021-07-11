for(var i = 0; i < document.querySelectorAll(".bttn").length; i++)
{
  document.querySelectorAll(".bttn")[i].addEventListener("click", function() {
    noise(this.innerHTML);
  });
}

document.addEventListener("keypress", function() {
  noise(event.key);
});

function noise(key)
{
  switch (key)
  {
    case "z": var drum1 = new Audio("sounds/drum-1.mp3");
            drum1.play();
            break;

    case "x": var drum2 = new Audio("sounds/drum-2.mp3");
            drum2.play();
            break;

    case "c": var drum3 = new Audio("sounds/drum-3.mp3");
            drum3.play();
            break;

    case "v": var drum4 = new Audio("sounds/drum-4.mp3");
            drum4.play();
            break;

    case "b": var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

    case "n": var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

    case "m": var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

    default: return null;
            break;

  }
}
