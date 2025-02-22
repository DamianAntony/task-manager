document.addEventListener("DOMContentLoaded",()=>{
const inputForm=document.querySelector(".InputForm");
const taskContainer=document.querySelector(".taskContainer");
inputForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log(e)
  addTask(e.target.elements[0]);
})

function addTask(input){
  const task=input.value;
  if(input.value === "")
  {
    alert("Enter some task");
  }else{
    let list=document.createElement("li");
    list.classList.add("task");
    list.innerHTML=`${task}`;
    taskContainer.appendChild(list);
     const crossmark=document.createElement("span");
    crossmark.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    list.appendChild(crossmark);
  
    // list.addEventListener("click",()=>{
    //   list.classList.toggle("checked");
    //   storedata()
    // })

    // crossmark.addEventListener("click",(e)=>{
    //   e.stopPropagation(); // Prevent the click from bubbling up to the list item
    //  list.style.display="none";
    //  storedata();
    // })
    input.value="";
  storedata();
  
  }

}
taskContainer.addEventListener("click",(e)=>{
  console.log(e)
  if (e.target.closest("span  ")) {
    const list = e.target.closest("li");
    list.style.display = "none";
    storedata();
  } else if (e.target.tagName === "LI") {
  
    e.target.classList.toggle("checked");
    storedata();
  }

})

function storedata(){
  
  localStorage.setItem("data",taskContainer.innerHTML)
}
function getData(){
  taskContainer.innerHTML=localStorage.getItem("data");
}
getData();

})
