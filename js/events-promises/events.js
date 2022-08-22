// JS EVENTS
//built in events
const addN_ame = (e) => {
  console.log(e);
  const name = e.target.value;
  document.querySelector(".name-list").innerHTML = `My name is ${name}`;
};
//const btnName = document.querySelector(".btn-name");

//btnName.addEventListener("click", addName);
//btnName.removeEventListener("click", addName);

//implementation
const addFName = (name) => {
  console.log(name);
  document.querySelector(".name-wrapper").innerHTML = `My name is ${name}`;
};
const btnAddName = document.querySelector(".add-name");

btnAddName.addEventListener("click", (e) => {
  const name = document.querySelector(".name").value;
  addFName(name);
});

//CUSTOM EVENTs
//using the event constructor
const myEvvent = new Event("myEvent", {
  bubbles: true,
  cancelable: true,
  composed: true,
});

//implementation
const btnClick1 = new Event("btnClick", {
  bubbles: true,
  composed: true,
  cancelable: true,
});
// btnName.addEventListener("click", (event) => {
//   event.preventDefault();
//   addName();
// });

//btnName.dispatchEvent(btnClick);

//using the custom event constructor
const myEvent = new CustomEvent("myEvent", {
  bubbles: true,
  cancelable: true,
  composed: true,
  detail: {},
});

//implementation
const colorEvent = new CustomEvent("color", {
  bubbles: true,
  composed: true,
  cancelable: true,
});

document.querySelector(".btn-hover").addEventListener("mouseover", (e) => {
  e.preventDefault();
  const random = Math.floor(Math.random() * 255);
  document.querySelector(
    ".event-js"
  ).style.backgroundColor = `rgb(${random}, ${random}, ${random})`;
});
document.querySelector(".btn-hover").dispatchEvent(colorEvent);

//DYNAMIC TYPING
var num = 13;
var wrd = "Stirng";

// JS PROMISES
//promises syntax
let promise = new Promise((resolve, reject) => {
  const arr = ["bread", "milk"];
  const x = "bread";
  if (arr[0] === "bread") {
    resolve(x);
  } else {
    reject(x);
  }
});
promise
  .then((x) => {
    console.log(`The item is ${x} `);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Execution completed");
  });

//impelementation
let pswd = document.querySelector(".pwd").value;
let confirmPwd = document.querySelector(".confirm-pwd").value;
console.log(confirmPwd, pswd);

let matchPassword = new Promise((resolve, reject) => {
  if (pswd === confirmPwd) {
    resolve();
  } else {
    reject();
  }
});
promise
  .then(() => {
    document.querySelector(".error-mesge").innerHTML =
      "Passwords are a match!!";
  })
  .catch(() => {
    document.querySelector(".error-mesge").style.color = "red";
    document.querySelector(".error-mesge").innerHTML =
      "Passwords do not match!!";
  });
document.querySelector(".btn-confirm").addEventListener("click", () => {
  matchPassword;
});

const addName = () => {
  const name = prompt("Enter task name");
  document.querySelector(".name-list").innerHTML = name;
};
const changeBgcolor = () => {
  document.querySelector(".name-list").style.backgroundColor =
    "rgba(255,255,5,0.8)";
};
// const btnName = document.querySelector(".btn-name");

// btnName.addEventListener("click", addName);
// btnName.addEventListener("click", changeBgcolor);

const btnClick = new Event("btnClick", {
  bubbles: true,
  composed: true,
  cancelable: true,
  detail: {},
});
// btnName.addEventListener("click", (event) => {
//   console.log(event.detail);
//   event.preventDefault();
//   addName();
// });

// btnName.dispatchEvent(btnClick);
