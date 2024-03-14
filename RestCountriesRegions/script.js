let vsm = new XMLHttpRequest();
console.log(vsm);
vsm.open("GET","https://restcountries.com/v3.1/all");
vsm.send();
vsm.onload = function(){
    var data = JSON.parse(vsm.response);
    for(let i = 0;i<data.length;i++){
        console.log(data[i].region);
    }
    }

    let sm = new XMLHttpRequest();
console.log(sm);
sm.open("GET","https://restcountries.com/v3.1/all");
sm.send();
sm.onload = function(){
    var data = JSON.parse(sm.response);
    for(let i = 0;i<data.length;i++){
        console.log(data[i].subregion);
    }
    }

    let smv = new XMLHttpRequest();
    console.log(smv);
    smv.open("GET","https://restcountries.com/v3.1/all");
    smv.send();
    smv.onload = function(){
        var data = JSON.parse(smv.response);
        for(let i = 0;i<data.length;i++){
            console.log(data[i].population);
        }
        }