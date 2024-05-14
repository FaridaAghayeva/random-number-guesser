let btn = document.querySelector("#my_btn");
let btn2 = document.querySelector("#again_btn");
let texmin = document.querySelector("#maxtexmin");
let senintexmin = document.querySelector("#texminsayin");
let gizli = document.querySelector("#gizlireqem");
let mesaj = document.querySelector("#message3");
let maxTexmin = 3;
let texminSayi = 0;

function alertMessage(message) {
  mesaj.innerHTML = message;
}

function randomNumber() {
  return Math.trunc(Math.random() * 100) + 1;
}

let gizlireqem = randomNumber();
console.log(gizlireqem);
btn.addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value);
  let ferq = gizlireqem - guess;
  if (!guess) {
    alertMessage("Zəhmət olmasa rəqəm daxil et🙄");
    mesaj.style.backgroundColor = "Red";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
  } else if ((guess < 1 || guess > 100) && maxTexmin > 0) {
    alertMessage("Daxil edilən rəqəm 1-100 aralığında olmalıdır🤐");
    mesaj.style.backgroundColor = "yellow";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
  } else if (gizlireqem === guess) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Təbriklər qazandın🎉🎊");
    mesaj.style.backgroundColor = "green";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
    gizli.innerHTML = gizlireqem;
  } else if (
    Number(ferq) === 1 ||
    Number(ferq) === -1 ||
    Number(ferq) === 2 ||
    Number(ferq) === -2
  ) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Çox yaxınsan🥶");
    mesaj.style.backgroundColor = "blue";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
  } else if (guess > gizlireqem && maxTexmin > 0) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Azalt⬇");
    mesaj.style.backgroundColor = "red";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
  } else if (guess < gizlireqem && maxTexmin > 0) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Artır⬆");
    mesaj.style.backgroundColor = "red";
    mesaj.style.display = "block";
    mesaj.style.color = "white";
  }
  if (maxTexmin <= 0) {
    texmin.innerHTML = 0;
    btn2.style.display = "block";
    alertMessage("Uduzdun☹");
    mesaj.style.backgroundColor = "red";
    mesaj.style.color = "white";
    btn2.addEventListener("click", function () {
      maxTexmin = 3;
      btn2.style.display = "none";
      mesaj.style.display = "none";
      texmin.innerHTML = 3;
      senintexmin.innerHTML = 0;
      texminSayi = 0;
      gizlireqem = randomNumber();
      guess = " ";
      alertMessage("");
      console.log(gizlireqem);
    });
  }
});

// ifoo no name functions
