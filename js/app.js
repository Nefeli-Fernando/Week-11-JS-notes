
////////////LOCAL STORAGEE///


console.log("HEYY wassup");
//localStorage.clear(); //clears your storage

//ADDING ITEMS TO LOCAL STORAGE
localStorage.setItem("name" , "Nefeli");
localStorage.setItem("age" , "30");
localStorage.setItem("city" , "Rathmalana"); 
localStorage.setItem("anime", "One piece")

//REMOVING ITEMS FROM LOCAL STORAGE
localStorage.removeItem("age");

//READ DATA FROM LOCAL STORAGE
let name = localStorage.getItem("name");
console.log(name);
