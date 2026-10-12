
////////////LOCAL STORAGEE///

/*
console.log("HEYY wassup");
//localStorage.clear(); //clears your storage

//ADDING ITEMS TO LOCAL STORAGE
localStorage.setItem("name" , "Nefeli");
localStorage.setItem("age" , "19");
localStorage.setItem("city" , "Rathmalana"); 
localStorage.setItem("anime", "One piece")

//REMOVING ITEMS FROM LOCAL STORAGE
//localStorage.removeItem("age");

//READ DATA FROM LOCAL STORAGE
let name = localStorage.getItem("name");
console.log(name);

let age = localStorage.getItem("age");
let anime = localStorage.getItem("anime");
console.log(age,anime);

//OBJECTS IN LOCAL STORAGE
let customer = [
    {
    name : "Amal",
    age: 25,
    isMarried : true,
    },
    {
    name : "Siyath",
    age: 19,
    isMarried : true,    
    },
    {
    name : "Amal",
    age: 25,
    isMarried : true,    
    }
]
    */
// //---set customer in localStorage
// //1st step: convert object to string
// let stringCustomer = JSON.stringify(customer);
// //2nd step: store string in localStorage
// localStorage.setItem("customer", stringCustomer);


// //---get customer from localStorage--
// //1st step: retrieve string from localStorage
// let getcustomer =  localStorage.getItem("customer");
// //2nd step: convert string back to object
// let parsedCustomer = JSON.parse(getcustomer);
// console.log(parsedCustomer);


// --------------- CRUD operations in localStorage--------------------
let customerArray = JSON.parse(localStorage.getItem('detailsList')) || [];
function btnaddCustomrOnAction() {
    const addButton = document.getElementById('text');
    const addValues =  addButton.value();

    if(!addValues){  //if values arent added
            alert("Customer has been Added!");
            return;
    }

    const newObject = {
        id : document.GetElementById(txtId).value,
        name : document.GetElementById(txtName).value,
        age : document.GetElementById(txtAge).value,
        address : document.GetElementById(txtAddress).value
    };

    customerArray.push(newObject);
    localStorage.setItem('detailsList', JSON.stringify(customerArray));

    addButton.value = ' ';
    
}








function btnSearchCustomrOnAction() {
    alert("search customer");
}

function btnDeleteCustomrOnAction() {
    alert("delete customer");
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear(); //clears the local Storage in the browser
    customerList = []; //clears the array
}

function btnLoadTableOnAction() {
    alert("load table");

    let tblbdy = "";

    customerArray.forEach(customer => {
        tblbdy += `
        <tr>
        <td>${customerArray.id}</td>
        <td>${customerArray.name}</td>
        <td>${customerArray.age}</td>
        <td>${customerA}
        </tr>
        `

    }
}

