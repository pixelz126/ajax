let btn = document.getElementById("btn");
let posts = document.getElementById("posts");

btn.addEventListener("click", loadData)

function loadData(){
    // debugger
    let xhttp = new XMLHttpRequest;
    //console.log(xhttp)
    xhttp.onreadystatechange = function(){
        if (this.readyState == 3) {
            btn.innerHTML = 'Loading...';
        }
        else if(this.readyState == 4 && this.status == 200) {
            let json_data = JSON.parse(this.responseText);
            //console.log(json_data);
            btn.innerHTML = 'Data recieved :)';
            btn.style.background = '#bb5766';
            btn.classList.add("disabled");
            
            for (let i = 0; i < json_data.length; i++) {
                let post = document.createElement("h4");
                let id = document.createElement("p");
                let text = '';
                text = 'Post Title: ' + '' + json_data[i]["title"];
                id = 'Post id: ' + '' + json_data[i]["id"];
                const space = document.createElement("p");
                space.textContent = "__________________";
                post.innerHTML = text;
                posts.append(id, post, space);
            }
            console.log (json_data); 
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
    
}

// const ints = ['Adel', 'AdelAdel', 'Mohamed'];

// // const evens = ints.filter(function(item){
// //     return item != 1;
// // })

// //const evens = ints.filter( name => name.length < 5 )
// //console.log(evens)

// // Object
// // let person = {
// //     name: 'mohamed',
// //     sayHello: function(){
// //         console.log(`Hello ${this.name}`)
// //     }
// // }


// function Person(name) {
//     this.name = name;
//     this.details = function(){
//         console.log(`Person name is ${this.name}`);
//     }
// } 


// function Student(name){
//     Person.call(this, name)
// }

// let s1 = new Student('Adel')

// console.log(s1.details())

// let newObj = Object.keys(person)

// for(key in newObj){
//     console.log(key, newObj[key])
// }

// // person2.sayBye()
// console.log(person2)