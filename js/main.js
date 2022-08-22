const btnAdd = document.querySelector(".btn-add");

const taskList = [];

//function to create the task
btnAdd.addEventListener("click", () => {
  const task_name = document.querySelector(".task-name").value;
  const task_about = document.querySelector(".task-about").value;

  // add task
  const task = {
    task_name,
    task_about,
  };

  taskList.push(task);

  // console.log(taskList)

  // SAVING THE TASKS TO localstorage
  try {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    } else {
      let storage = JSON.parse(localStorage.getItem("tasks"));
      //then push the new tasks added
      storage.push(task);
      localStorage.setItem("tasks", JSON.stringify(storage));
      //console.log(storage)
    }
  } catch (error) {
    console.log(error);
  }
});

const showTasks = () => {
  const storage_list = JSON.parse(localStorage.getItem("tasks"));
  let table = document.querySelector(".tablels");
  table.innerHTML = "";
  if (storage_list && storage_list.length >= 1) {
    console.log(storage_list);
    const data = storage_list;

    data.map((d) => {
      return (table.innerHTML += `
            <div class="row">
            <div class="col-sm-10">
                    <span class="fw-bold">${d.task_name}</span>
                <p>${d.task_about}</p>
            </div>
            
        <div class="col-sm-2">
  <span class="options">
                <button type="button" class="btn btn-danger px-2 " onclick="deleteTask()">Delete</button>
                </span>
        </div>
              
              </div>
    `);
    });
  } else {
    return `  <div class="row mb-3">
        <div class="col-sm-12 mx-auto">
            <table class="table">
<tbody>
  <tr>
      <td class="text-danger">No tasks to show!!</td>
  </tr>
</tbody>
            </table>
        </div>
    </div>`;
  }
};

//const deleteTask = () =>{
//const storage = JSON.parse(localStorage.getItem("tasks"));
//

//}

const addName = () => {
  const name = prompt("Enter task name");
  document.querySelector(".name-list").innerHTML = name;
};
const changeBgcolor = () => {
  document.querySelector(".name-list").style.backgroundColor =
    "rgba(255,255,5,0.8)";
};
const btnName = document.querySelector(".btn-name");

// btnName.addEventListener("click", addName);
// btnName.addEventListener("click", changeBgcolor);

const btnClick = new Event("btnClick", {
  bubbles: true,
  composed: true,
  cancelable: true,
  detail: {},
});
btnName.addEventListener("click", (event) => {
  console.log(event.detail);
  event.preventDefault();
  addName();
});

btnName.dispatchEvent(btnClick);
