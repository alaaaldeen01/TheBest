let inputPassword = document.querySelector(".face1");
inputPassword.onclick = () => {
  inputPassword.style.cssText =
    "background-image:url(images/opend1.png);transition:.3s;";
  inputPassword.type = "text";
};

inputPassword.onblur = () => {
  inputPassword.style.cssText =
    "background-image:url(images/closed1.png);transition:.3s;";
  inputPassword.type = "password";
};

let inputPassword2 = document.querySelector(".face2");
inputPassword2.onclick = () => {
  inputPassword2.style.cssText =
    "background-image:url(images/opend1.png);transition:.3s;";
  inputPassword2.type = "text";
};

inputPassword2.onblur = () => {
  inputPassword2.style.cssText =
    "background-image:url(images/closed1.png);transition:.3s;";
  inputPassword2.type = "password";
};
