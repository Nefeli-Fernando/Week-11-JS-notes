
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


// ---------------------- CRUD operations in localStorage--------------------

let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {
    let customer = {
        id:document.getElementById("txtid").value,
        name:document.getElementById("txtname").value,
        age:document.getElementById("txtage").value,
        address:document.getElementById("txtaddress").value
    }

    if(customer = customerList.find(c => c.id === id)){
        alert("Customer has already been added to the system")
    // console.log(customer);
    customerList.push(customer);
    // console.log(customerList);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();
    }
}

function btnSearchCustomrOnAction() {
    let id = document.getElementById("txtid").value
    let customer = customerList.find(c => c.id === id);
    
    if(customer){
        document.getElementById("txtname").value = customer.name;
        document.getElementById("txtage").value = customer.age;
        document.getElementById("txtaddress").value = customer.address;


    }else{
        alert("Customer cannot be found in the system");
    }
}

function btnDeleteCustomrOnAction() {
    let id = document.getElementById("txtid").value

    let index = customerList.findIndex(c => c.id === id);

    if(index !== -1 ){
        customerList.splice(index,1);
        localStorage.setItem("customerlist",JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("Customer does not exist");
    }
    }

function btnUpdateCustomrOnAction() {
    let id = document.getElementById("txtid").value
    let customer = customerList.find(c => c.id === id);
    
    if(customer){
        document.getElementById("txtname").value = customer.name;
        document.getElementById("txtage").value = customer.age;
        document.getElementById("txtaddress").value = customer.address;


    }else{
        alert("Customer cannot be found in the system");
    }
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
}

function btnLoadTableOnAction() {
    // alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}
/*
btnLoadTableOnAction();
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
*/
