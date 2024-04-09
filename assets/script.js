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
    alertMessage("Zəhmət olmasa rəqəm daxil edin!");
  } else if ((guess < 1 || guess > 100) && maxTexmin > 0) {
    alertMessage("Daxil edilən rəqəm 1-100 aralığında olmalıdır!");
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
  } else if (gizlireqem === guess) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Təbriklər qazandın!");
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
    alertMessage("Çox yaxınsan");
  } else if (guess > gizlireqem && maxTexmin > 0) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Azalt");
  } else if (guess < gizlireqem && maxTexmin > 0) {
    maxTexmin--;
    texminSayi++;
    texmin.innerHTML = maxTexmin;
    senintexmin.innerHTML = texminSayi;
    alertMessage("Artır");
  }
  if (maxTexmin <= 0) {
    texmin.innerHTML = 0;
    btn2.style.display = "block";
    alertMessage("Uduzdun:(");
    btn2.addEventListener("click", function () {
      maxTexmin = 3;
      btn2.style.display = "none";
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
