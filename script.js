function firstItem() {
  document.getElementById("menu1").addEventListener("click", function (event) {
    console.log(event.target);

    event.target.classList.toggle("item1");
    event.target.addEventListener();
  });
}

document.querySelector(".plusIcon").addEventListener("click", (event) => {
  console.log(event);
  document.querySelector(".plusIcon").firstChild.classList.toggle("isSpining");
  document.getElementById("menu1").classList.toggle("item1");
  if (document.getElementById("menu1").classList.contains("item1")) {
    setTimeout(() => {
      document.getElementById("menu1").classList.add("fele");
      document.getElementById("menu2").classList.add("fele");
      document.getElementById("menu3").classList.add("fele");
      document.getElementById("menu4").classList.add("fele");
      document.getElementById("menu5").classList.add("fele");
      document.getElementById("menu6").classList.add("fele");
      document.getElementById("menu7").classList.add("fele");
      document.getElementById("menu8").classList.add("fele");
      let x = document.querySelectorAll(".svgIcon");
      for (let i of x) {
        i.classList.add("visibleIcon");
      }
    }, 1500);
  } else {
    document.querySelector("#menu1").classList.remove("fele");
    document.getElementById("menu2").classList.remove("fele");
    document.getElementById("menu3").classList.remove("fele");
    document.getElementById("menu4").classList.remove("fele");
    document.getElementById("menu5").classList.remove("fele");
    document.getElementById("menu6").classList.remove("fele");
    document.getElementById("menu7").classList.remove("fele");
    document.getElementById("menu8").classList.remove("fele");
    document.querySelector(".svgIcon").classList.remove("visibleIcon");
    let x = document.querySelectorAll(".svgIcon");
    for (let i of x) {
      i.classList.remove("visibleIcon");
    }
  }
  document.getElementById("menu2").classList.toggle("item2");
  document.getElementById("menu3").classList.toggle("item3");
  document.getElementById("menu4").classList.toggle("item4");
  document.getElementById("menu5").classList.toggle("item5");
  document.getElementById("menu6").classList.toggle("item6");
  document.getElementById("menu7").classList.toggle("item7");
  document.getElementById("menu8").classList.toggle("item8");
});
function some() {
  let x = true;
}
