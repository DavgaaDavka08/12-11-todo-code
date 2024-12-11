const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "todo",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];

function addTaskList(title, color, count, id) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");

  //todoList = <div class="todoList">
  //   <div class="title"></div>
  // </div>
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);

  // title = <div class="title"></div>
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");

  todoList.appendChild(titleDiv);
  // <h2>To do</h2>
  const h2 = document.createElement("h2");
  h2.innerText = title;

  // <div style={backgroundColor:"white" } class="circle"></div>
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;

  // <p class="count"></p>
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer2.appendChild(todoList);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});
const todoData = [
  {
    title: "Гэрээ цэвэрлэх",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Шинэ жилдээ явах",
    date: "2024-12-09",
    state: "in-progress",
  },
  {
    title: "Хувцас бэлдэх",
    date: "2024-12-09",
    state: "done",
  },
  {
    title: "Ажлын төлөвлөгөө гаргах",
    date: "2024-12-10",
    state: "blocked",
  },
];

function addobj(title, date, state) {
  let targetContainer = document.querySelector(`#${state}`);

  // parent div
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "parent-title");

  // Title heseg
  let divtitle = document.createElement("div");
  divtitle.setAttribute("class", "first-title");
  divtitle.innerText = title;
  mainDiv.appendChild(divtitle);

  // Date heseg
  let divdate = document.createElement("div");
  divdate.setAttribute("class", "date");
  divdate.innerText = date;
  mainDiv.appendChild(divdate);

  // State heseg
  let divstate = document.createElement("div");
  divstate.setAttribute("class", "state");
  divstate.innerText = state;
  mainDiv.appendChild(divstate);

  // Target container-t nemeh
  targetContainer.appendChild(mainDiv);
}

// todoData dotorh contoineriig hargalzah contoinart nemeh
todoData.map((element) => {
  addobj(element.title, element.date, element.state);
});
let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  if (!input.value) {
    errorHanding();
    return;
  } else {
    errorRemove();
    todos.push(input.value);
    renderTodos();
    input.value = null;
  }
});
///
///
///
///
//
// buttun
let todoss = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const buttons = document.getElementById("button");
const inputs = document.getElementById("input");

button.addEventListener("click", () => {
  if (!input.value) {
    errorHanding();
    return;
  } else {
    errorRemove();
    todos.push(input.value);
    renderTodos();
    input.value = null;
  }
});
function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = ""; // huuchiniig tseverleh

  todos.map((todo, index) => {
    //new
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "todoContainer");

    // udtgah bottumnii zurag
    const img = document.createElement("img");
    img.setAttribute("src", "./3405244.png");

    // ustgah towch
    const iconButton = document.createElement("button");
    iconButton.setAttribute("id", "removeIcon");
    iconButton.appendChild(img);

    // ustgah bottumdeer darsan tohioldold hih uildel
    iconButton.addEventListener("click", () => {
      todos.splice(index, 1); // ni elementeer array dah elementiig ustgana
      renderTodos(); // todo jagsaaltiig dahin hiine
    });

    todoContainer.appendChild(iconButton);

    // Todo text
    const p = document.createElement("p");
    p.innerText = todo;
    todoContainer.appendChild(p);

    tasklist.appendChild(todoContainer);
  });
}

function errorHanding() {
  const p = document.getElementById("error");
  p.innerText = "Aldaa garlaa";
}

function errorRemove() {
  const p = document.getElementById("error");
  p.innerText = null;
}
//buttun;
