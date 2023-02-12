let origDogs = ["Bulldog", "Beagal", "Labradog"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcons", "Duck", "Flamingoes");

//Arrays copy Elements
let sliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Function (LIFO) Push and Pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove From The First
let addFirst = dogs.unshift("Golden Reteriver");
let shiftDog = dogs.shift();

//Atomic add and Remove element (where, how many remove element,element list)
dogs.splice(2, 1, "Pug", "Boxer");
console.log(origDogs);



