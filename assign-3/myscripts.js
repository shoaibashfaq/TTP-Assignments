//1
const container=document.getElementById("container");
console.log(container);

//2
const containerqs=document.querySelector("#container");
console.log(containerqs);

//3
const secondList=document.getElementsByClassName("second");
console.log(secondList);

//4
const classOfThird= document.querySelector("ol .third");
console.log(classOfThird)

//5. to test this, just uncomment it. 
// container.innerHTML="Hello";

//6.

// i
//7.(This one is doing funcky stuff. )
// footer.classList.remove("main")
// console.log(footer);

//8.
var newEle=document.createElement('li');
console.log(newEle);

//9.
newEle.innerText="four";

//10.
const targetElement= document.getElementsByTagName("ul")[0];
targetElement.appendChild(newEle);

//11. Loop over all of the lis inside the ol tag and give them a background color of "green".
const listOfols= document.getElementsByTagName("ol");
for (let li of listOfols) li.style.backgroundColor="green";

//12.
const nodeToRemove= document.getElementsByClassName('footer')[0];
nodeToRemove.remove();