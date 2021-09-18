function mostrar(e) {
  if (e.classList.contains("fa-moon-o")) {
    e.classList.remove("fa-moon-o");
    e.classList.add("fa-sun-o");
    e.style.color = "rgb(225, 225, 0)";
    document.body.style.background = "rgb(10, 10, 10)";
    document.querySelector("#userName").style.color = "#fff";
    document.querySelector("#userName").innerHTML = "पवन एस";
    document.querySelector("#link1").innerHTML = "गिटोहब";
    document.querySelector("#link2").innerHTML = "जुड़ेहुएमें";
    document.querySelector("#link3").innerHTML = "लालयह";
    document.querySelector("#link4").innerHTML = "यूट्यूब";
    document.querySelector("#moon").classList.remove("fa-sun-o");
    document.querySelector("#moon").classList.add("fa-moon-o");
    document.querySelector(".fa-facebook-f").style.backgroundColor = "black";

    let links = document.querySelectorAll(".link");
    links[0].style.filter = "grayscale(100%)";
    for (let i = 0; i < links.length; i++) {
      links[i].style.filter = "grayscale(100%)";
    }

    let foots = document.querySelectorAll("#linkes");
    foots[0].style.backgroundColor = "rgb(243, 242, 242)";
    for (let i = 0; i < foots.length; i++) {
      foots[i].style.backgroundColor = "rgb(243, 242, 242)";
    }
  } else {
    e.classList.remove("fa-sun-o");
    e.classList.add("fa-moon-o");
    e.style.color = "#585858";
    document.body.style.background = "rgb(243, 242, 242)";
    document.querySelector("#userName").style.color = "rgb(99, 99, 99)";
    document.querySelector("#userName").innerHTML = "PAVAN S";
    document.querySelector("#link1").innerHTML = "GITHUB";
    document.querySelector("#link2").innerHTML = "LINKEDIN";
    document.querySelector("#link3").innerHTML = "REDDIT";
    document.querySelector("#link4").innerHTML = "YOUTUBE";
    document.querySelector("#moon").classList.remove("fa-moon-o");
    document.querySelector("#moon").classList.add("fa-sun-o");

    let links = document.querySelectorAll(".link");
    links[0].style.filter = "grayscale(0%)";
    for (let i = 0; i < links.length; i++) {
      links[i].style.filter = "grayscale(0%)";
    }
    let foots = document.querySelectorAll("#linkes");
    foots[0].style.backgroundColor = "rgb(31, 30, 30)";
    for (let i = 0; i < foots.length; i++) {
      foots[i].style.backgroundColor = "rgb(31, 30, 30)";
    }
  }
}
