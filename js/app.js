
////////////LOCAL STORAGEE///


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
let customer = {
    name : "Amal",
    age: 25,
    isMarried : true,
}
//1st step -> convert object to string
let stringCustomer = JSON.stringify(customer);
//2md tspe -> store string in local storage
localStorage.setItem("customer", stringCustomer)