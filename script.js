function giveFocus(box) {
  box.setAttribute("class", "hasFocus");
  box.select();
}

function loseFocus(box, i) {
  if (!isEmpty(box) && i == 0) {
    if (checkNumDigits(box, i)) {
      isNumeric(box, i);
    }
  }
  else if (isEmpty(box)) {
    document.querySelector(`#inp${i}`).innerHTML = "*FIELD REQUIRED!";
    box.setAttribute("class", "error");
  }
  else {
    document.querySelector(`#inp${i}`).innerHTML = "";
    box.setAttribute("class", "lostFocus");
  }
}

function isEmpty(box) {
  if (box.value == null && box.value == undefined || box.value.trim() == "") {
    return true;
  }
  
  return false;
}

function checkNumDigits(box, i) {
  if (box.value.trim().length == 6) {
    document.querySelector(`#inp${i}`).innerHTML = "";
    return true;
  }
  document.querySelector(`#inp${i}`).innerHTML = "Please input 6 digits!";
  box.setAttribute("class", "error");

  return false;
}

function isNumeric(box, i) {
  if (isNaN(box.value.trim())) {
    document.querySelector(`#inp${i}`).innerHTML = "Must be a Number!";
    box.setAttribute("class", "error");

    return false;
  }
  document.querySelector(`#inp${i}`).innerHTML = "";
  document.querySelector(`#inp${1}`).innerHTML = "";

  box.setAttribute("class", "lostFocus");

  document.querySelector("#email").setAttribute("class", "lostFocus");
  document.querySelector("#email").value = `${box.value}@mcpsmd.net`;

  return true;

}

let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type != "reset") {
    inputs[i].addEventListener("focus", function () { giveFocus(this); });
    inputs[i].addEventListener("blur", function () { loseFocus(this, i); });
  }
}