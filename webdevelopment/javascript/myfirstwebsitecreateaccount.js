const input = document.querySelector("input");
const form = document.querySelector("form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkBlankWhitespace();
});

function openInfo(clickedItem) {
  x = clickedItem.id;

  database = {
    infobox1: { id: "infotext1" },
    infobox2: { id: "infotext2" },
  };

  y = document.getElementById(database[x]["id"]);

  y.style.visibility = "visible";
}

function closeInfo(clickedItem) {
  x = clickedItem.id;

  database = {
    usernameinfo: { id: "infotext1" },
    passwordinfo: { id: "infotext2" },
  };

  y = document.getElementById(database[x]["id"]);

  y.style.visibility = "hidden";
}

function checkBlankWhitespace() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    errorHandler(username, "Username cannot be blank or contain whitespace");
  }

  if (emailValue === "") {
    errorHandler(email, "Email cannot be blank or contain whitespace");
  }

  if (passwordValue === "") {
    errorHandler(password, "Password cannot be blank or contain whitespace");
  }

  if (password2Value === "") {
    errorHandler(password2, "Password cannot be blank or contain whitespace");
  }
}

function checkUsernameInput(selectedItem) {
  const usernameValue = selectedItem.value.trim();

  if (usernameValue.length < 8) {
    errorHandler(
      selectedItem,
      "Username cannot contain less than 8 characters"
    );
  } else {
    successHandler(selectedItem);
  }
}

function checkEmail(selectedItem) {
  x = selectedItem.value.trim();
  if (!isEmail(x)) {
    errorHandler(selectedItem, "Not A Valid Email");
  } else {
    successHandler(selectedItem);
  }
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkPasswordLength(selectedItem) {
  password1value = selectedItem.value.trim();

  if (password1value.length < 6) {
    errorHandler(selectedItem, "Password needs to be longer than 6 characters");
  } else {
    checkMatch(selectedItem);
  }
}

function checkMatch(selectedItem) {
  x = selectedItem.value.trim();
  password2value = password2.value.trim();
  passwordvalue = password.value.trim();

  if (x.length < 6) {
    errorHandler(selectedItem, "Password needs to be longer than 6 characters");
  } else if (passwordvalue !== password2value) {
    errorHandler(selectedItem, "Password Does Not Match The Other Password");
  } else {
    successHandler2();
  }
}

function successHandler2() {
  a = document.querySelector(".password2");
  b = document.querySelector(".password");
  x = a.parentElement;
  y = b.parentElement;

  x.className = "inputContainer success";
  y.className = "inputContainer success";
}

function errorHandler(input, message) {
  const div = input.parentElement;
  const p = div.querySelector(".inputContainer p");
  p.innerText = message;
  div.className = "inputContainer error";
}

function successHandler(input) {
  const div = input.parentElement;
  div.className = "inputContainer success";
}
