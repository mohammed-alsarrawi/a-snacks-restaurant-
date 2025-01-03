// let name = prompt("Enter Your Name:");
    // let Gender = prompt("Enter Your Gender:");
    // let title="";
    
    // while (Gender !=="m" && Gender !== "f") {
    //   Gender = prompt("Enter Your Gender:");
    //   alert("Welcome");
    // }

    // let i=0;
    // while (i<6) {
    //     alert(i);
    //     i++;
    // }

    // let num = prompt("Enter a number from 0-100:");
    // while ( num > 100 ||  num < 0) {
    //     alert("error message");
    //     num = prompt("Enter a number from 0-100:");
    // }

//     let Data = parseInt(prompt("Please enter an integer:"));

// let total = 0;

// for (let i = 0; i <= Data; i++) {
//   total += i;
// }
// alert(total)


// let userName = "";
// let userGender = "";
// let userOrder = "";
// let userAnswers = [];

// function askGender() {
//   let gender = prompt("Enter your gender (male/female):").toLowerCase();
//   while (gender !== "male" && gender !== "female") {
//     gender = prompt(
//       "Invalid input. Please enter your gender (male/female):"
//     ).toLowerCase();
//   }
//   return gender;
// }
// userName = prompt("Enter your name:") || "Guest";
// userGender = askGender();
// let title = userGender === "male" ? "Mr." : "Ms.";
// userAnswers.push(userName, userGender);
// alert(`Welcome ${title} ${userName}`);
// userOrder = prompt("What would you like to order? (shawarma, zenger, burger)") || "nothing";
// alert(`Your ${userOrder} is being prepared!`);
// console.log(`${userName} ordered ${userOrder}`);
// userAnswers.push(userOrder);
// console.log("User details:");
// for (let i = 0; i < userAnswers.length; i++) {
//   console.log(userAnswers[i]);
// }

// const div = document.createElement('div');


// const paragraph = document.createElement('p');
// paragraph.textContent = userName;
// div.appendChild(paragraph); 


// const ol = document.createElement('ul');


// const li1 = document.createElement('li');
// li1.textContent = userGender;

// const li2 = document.createElement('li');
// li2.textContent = 'Age: 21';

// const li3 = document.createElement('li');
// li3.textContent = userOrder;


// ol.appendChild(li1);
// ol.appendChild(li2);
// ol.appendChild(li3);


// div.appendChild(ol);

// document.body.appendChild(div);


const form1 = document.getElementById("form1");
const details = document.getElementById("details");


form1.addEventListener("submit",function(events){
    events.preventDefault(); 
    const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  const orderChoice = document.querySelector('input[name="orderChoice"]:checked');
  if (!orderChoice) {
    details.textContent = "Please select an order choice.";
    return;
  }

  
  const selectedOrder = orderChoice.value;
  details.innerHTML=`<b>Username:</b> ${username} <br>
  <b>Age:</b> ${age} <br>
  <b>Gender:</b> ${gender} <br>
  <b>Order Choice:</b> ${selectedOrder}`;});