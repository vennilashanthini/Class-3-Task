let vsm = new XMLHttpRequest();
console.log(vsm);
vsm.open("GET","https://restcountries.com/v3.1/all");
vsm.send();
vsm.onload = function(){
    var data = JSON.parse(vsm.response);
    for(let i = 0;i<data.length;i++){
        console.log(data[i].name.common);
    }
    }
