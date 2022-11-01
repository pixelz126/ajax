// let user = {
//     firstName: "Adel",
//     age: 14*2,

//     getFullName: function(){
//        return `User name is: ${this.firstName} and age is: ${this.age}`;
//     } ,

//     addreses: {
//         egy: 'Cairo',
//         sa: 'Ryiad'
//     }
// }

// console.log(user.addreses)

// // let keys = Object.keys(user)
// let addrese = user.addreses;
// console.log (typeof addrese)

// let keys  = Object.keys(addrese);


// for(key in keys){
//     console.log(key, keys[key] )
// }


// let mainObj = {
//     hasDiscount: false,
//     showMsg: function(){
//         return `You ${this.hasDiscount ? "" : "Don't"} have discount`;
//     }

// }
// console.log(mainObj.hasDiscount);
// console.log(mainObj.showMsg());

// let newObj = Object.create(mainObj);
// newObj.hasDiscount = true;

// console.log(newObj.hasDiscount);
// console.log(newObj.showMsg());

// let = src1 = {
//     key1: "Value1",
//     key2: "Value2",
// } 
// let = src2 = {
//     key3: "Value3",
//     key4: function(){
//         console.log("Hello");
//     }
// } 

// const target = {
//     key5: "Value5",
// }

// Object.assign(target, src2)

// console.log(target.key4())

//Constructor
function Phone(color, price){ // Captalize (Phone)
    this.color = color;
    this.price = price;
}

let phone1 = new Phone("red", 20);
// console.log(phone1.color)
// console.log(phone1.price)

for(let key in phone1){
     console.log(key, phone1[key])
}