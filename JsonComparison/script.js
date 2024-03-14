let obj1 ={
    name:"Person 1",
    age : 5
};

let obj2 ={
    age : 5,
    name : "Person 1"
};

if(JSON.stringify(obj1.sort)==JSON.stringify(obj2.sort)){
    console.log("True");
}
else {
    console.log("False");
}