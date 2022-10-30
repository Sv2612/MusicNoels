//Create title Element
  var divCorp = document.createElement("div");
  var Titre = document.createElement("h1");
  var iframe1 = document.createElement("iframe");

  divCorp.id = "divCorp";
  Titre.id = "Titre"
  iframe1.id = "iframe1"

  Titre.innerHTML = "Noel";
  iframe1.src = "https://www.youtube.com/embed/3fC_HuFF2ww?autoplay=1"
  iframe1.allowFullscreen = "allowfullscreen"


  divCorp.appendChild(Titre)
  divCorp.appendChild(iframe1)
  document.getElementById("content").appendChild(divCorp)


  var inputSubmit = document.createElement("input")
  var inputSubmit2 = document.createElement("input")
  var inputSubmit3 = document.createElement("input")
  var inputSubmit4 = document.createElement("input")
  var divInput = document.createElement("div")

  inputSubmit.type = "submit"
  inputSubmit.value = "Musique 1"
  inputSubmit.id = "Musique1"
  inputSubmit2.type = "submit"
  inputSubmit2.value = "Musique 2"
  inputSubmit2.id = "Musique2"
  inputSubmit3.type = "submit"
  inputSubmit3.value = "Musique 3"
  inputSubmit3.id = "Musique3"
  inputSubmit4.type = "submit"
  inputSubmit4.value = "Musique 4"
  inputSubmit4.id = "Musique4"
  divInput.id = "divInput"


  inputSubmit.addEventListener("click", inputSubmits)
  inputSubmit2.addEventListener("click", inputSubmit2s)
  inputSubmit3.addEventListener("click", inputSubmit3s)
  inputSubmit4.addEventListener("click", inputSubmit4s)
  divInput.appendChild(inputSubmit)
  divInput.appendChild(inputSubmit2)
  divInput.appendChild(inputSubmit3)
  divInput.appendChild(inputSubmit4)

  document.getElementById("divCorp").appendChild(divInput)

  inputSubmit.align = "center"
  inputSubmit2.style.alignSelf = "center"

  function inputSubmits() {
    iframe1.src = "https://www.youtube.com/embed/3fC_HuFF2ww?autoplay=1"
  }

  function inputSubmit2s() {
    iframe1.src = "https://www.youtube.com/embed/bB-9ZBFVRLw?autoplay=1"
  }

  function inputSubmit3s() {
    iframe1.src = "https://www.youtube.com/embed/videoseries?list=PLUMT_zP7khIZppRSk3edNGN9-lgQGipct&autoplay=1"
  }

  function inputSubmit4s() {
    iframe1.src = "https://www.youtube.com/embed/videoseries?list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&autoplay=1"
  }
