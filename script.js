const addBtn = document.querySelector("button");
const userInput = document.querySelector("#input_box");
const ul = document.querySelector("#list_data");

function addData(data) {
  if (userInput.value == "") {
    alert("Please enter a task name");
  } else {
    let li = document.createElement("li");
    li.innerHTML = data;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
  }
}
// function nowTime(){
//   let time = document.createElement("h4");
//   ul.appendChild(time)
//   let date = new Date()
//   time.innerHTML = date.toLocaleTimeString();
// }

addBtn.addEventListener("click", () => {
  addData(userInput.value);
  saveData();
  userInput.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("list_item");//- jodi aga taka ad take to remove kora diba na hola class name add kora diba
    saveData();
  }
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove()
    saveData();
  }
});

function saveData(){
  localStorage.setItem("data" , ul.innerHTML)
}

function showData(){
  ul.innerHTML = localStorage.getItem("data")
}
showData()

