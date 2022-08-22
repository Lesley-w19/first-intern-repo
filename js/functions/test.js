// for object definition
const shoppping = {
   item_name : "Biscuits",
   item_price: 70,
   quantity: 3,
   item_description: "Family biscuits"
};

console.log(shopping)

// using the new keyword
const shoppingcrt = new Object();
shoppingcrt.item_name  =  "Biscuits";
shoppingcrt.item_price = 70;
shoppingcrt.quantity = 3;
shoppingcrt.item_description = "Family biscuits";
 //console.log(shoppingcrt)


     class Cart {
         constructor(){
             var item_name;
             var item_price;
         }

         getItemName(){
             return this.item_name
         }

         setItemName(item_name){
            this.item_name = item_name;
         }

         getItemPrice(){
            return this.item_name
        }

        setItemPrice(item_price){
           this.price = item_price;
        }

        
     }
     var shopping = new Cart();
     shopping.setItemName("Biscuits")
     shopping.setItemPrice(70);

     console.log(shopping)


     class Person {
         constructor(name){
             this.name = name;
         }
 
         greet(){
             console.log(`Hello ${this.name}`)
         }
         
     }
     class Child extends Person{
         constructor(name,age){
             super(name);
             this.child_age = age;
         }

     }

     const details = new Child("Mercy", 67)
     details.greet();


     function Persons(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Persons.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      };
      const myFather = new Persons("Joel", "Dore", 50, "blue");


      const child = {
        name: 'Morining start',
        greet() {
          console.log(`Greetings from ${this.name}`);
        }
      }
      // use the function as the constructor
      function personss(name){
        this.name = name;   
      }
      const mellissa = Object.assign(personss.prototype, child);
      mellissa.greet();
       // Greetings from Morining start



       // Whole-script strict mode syntax
    'use strict';
    let v = "strict mode script!";


    // closures
    function sayHello() {
        var say = function()
         {
            console.log(hello);
           }
        // Local variable that ends up within the closure 
        var hello = 'Hello, world!';
        return say;
      }
      var sayHelloClosure = sayHello(); 
      sayHelloClosure();
       // ‘Hello, world!’