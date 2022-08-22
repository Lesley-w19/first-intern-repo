// JS EVENTS
//built in events
const addName = () => {
  const name = prompt("Enter task name");
  document.querySelector(".name-list").innerHTML = name;
};
const btnName = document.querySelector(".btn-name");

btnName.addEventListener("click", addName);
btnName.removeEventListener("click", addName);

//CUSTOM EVENTs
//using the event constructor
const myEvvent = new Event("myEvent", {
  bubbles: true,
  cancelable: true,
  composed: true,
});

//using the custom event constructor
const myEvent = new CustomEvent("myEvent", {
  bubbles: true,
  cancelable: true,
  composed: true,
  detail: {},
});


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

  //