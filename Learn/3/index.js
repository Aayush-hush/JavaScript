/* DOM = Document Object Model (API)
         An interface for changing the content of a web page 


        .getElementsByClassName   - -  - - 
        .querySelector("Can use anything over here like id class or any other ")
         */


//DOM Traversal ~> Family TRee
//.firstElementChild
//.lastElementChild
//,parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)

//add and change HTML Tags **use .textContent instead of innerHTML

const nameTag = document.createElement("h1");
nameTag.textContent = "Aayush"; 
document.body.prepend(nameTag);

//add or change css properties ------- - - - - - - - - -  --------
let element = document.querySelector("body");
const title = element.parentElement;
title.style.backgroundColor = "RGB(50,200,250)";
title.style.fontFamily = "consolas";
title.tyle.textAlign = "center";