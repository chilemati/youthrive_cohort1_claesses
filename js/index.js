let h1 = document.getElementById("main-heading");
console.log(h1);
let ul = document.querySelector(".lists");
console.log(ul);
let p1 = document.querySelector("p");
console.log(p1);
let allLi = document.querySelectorAll(".lists li");
console.log(allLi);
allLi.forEach((li) => {
  console.log(li);
});

// higher array method
/* 
  forEach
  map
  filter
  sort
  reduce


  **synthax

  arrayVariable.higherArrayMethodName(varibleName=> {
   console.log(variableNem)
  })
  allLi.forEach(each=> {
   console.log(each)
  })
*/

// dom navigation or tranversal
let body = document.querySelector("body");
console.log(ul.firstElementChild, "fistchild");
console.log(ul.lastElementChild.previousElementSibling, "lastchild");
let h3 = document.querySelector(".blog h3");
// get text
console.log(h3.textContent);
// set or change text
h3.textContent += " | How to Change Text using Js.";
{
  /* <p title='You Hovered'></p> */
}
h3.setAttribute("title", "You Hovered!");
h3.setAttribute("title", "Attribute value Changed!");
// adding css
// inline css
// h1.style.color = "purple";
// h1.style.marginLeft = "2rem";

// internal css
h1.style.cssText = `
  color: purple;
  margin-left: 2rem;
  text-align: center;
  border: 2px dashed blue;
`;
// external css using id
let body1 = document.querySelector("body");
// body1.setAttribute("id", "body");
// // external css using class with setAttribute
// body1.setAttribute("class", "body");
// external css using class with classList
// body1.classList.add("body");

// creating an element

let newLi = document.createElement("li");
// add required attributes
newLi.setAttribute("class", "last");
// add text
newLi.textContent = "getElementByClassName";
// add to the dom
// ul.append(newLi); // adds to the bottom of the list
ul.prepend(newLi); // adds to the top of the list

// replacing a child in the dom
let newP = document.createElement("p");
newP.textContent = "getElemetByTagName";
// ul.replaceChild(newP, ul.childNodes[3]);
// remove element
// ul.remove();

// html event functions
function handleClick() {
  alert("Clicked from a external function");
}

// dom events
// toggle between dark mode and light mode
/* 
 steps:
 > select the toggle button
 > select the body tag
 > add a click event to the toggle button
   > on click change to dark mode(of the body tag) and change text of button tag
   > on click again reverse

*/
let mode = document.querySelector(".mode");
mode.addEventListener("click", (e) => {
  body1.classList.toggle("body");
  if (body.className === "body") {
    // console.log("dark mode");
    mode.textContent = "Light Mode";
  } else {
    // console.log("light mode");
    mode.textContent = "Dark Mode";
  }
});
// body1.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// submit event
let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let terms = document.querySelector("#terms");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let toDd = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    gender: male.checked ? male.value : female.value,
    terms: terms.checked,
  };
  console.log(toDd);
});
