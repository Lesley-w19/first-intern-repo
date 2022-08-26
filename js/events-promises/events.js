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

let matchPassword = new Promise((resolve, reject) => {
  if (pswd === confirmPwd) {
    setTimeout(() => {
      resolve("passwords");
    }, 2000);
  } else {
    reject();
  }
});

const message = async () => {
  const resp = await matchPassword;
  console.log(resp);
};

let isLogin = true;

const login = new Promise((resolve, reject) => {
  if (isLogin) {
    setTimeout(() => {
      console.log("Logging in");
      resolve(isLogin);
    }, 1000);
  } else {
    reject();
  }
});

const seeLogin = async () => {
  const response = await login;
  console.log(response);
};

const [messge, slogin] = await promise.all(message, seeLogin);
const btnconfirm = document.querySelector(".btn-confirm");
btnconfirm.addEventListener("click", () => {
  messge;
  slogin;
});

const seeLogin1 = async () => {
  try {
    const resp = await login;
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};
