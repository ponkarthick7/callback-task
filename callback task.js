let firstTask = function (callback) {
    console.log('10');
    setTimeout(() => {
        callback();
    }, 2000);   
}

let secondTask = function (callback) {
    console.log('9');
    setTimeout(() => {
        callback();
    }, 2000);
}

let thirdTask = function (callback) {
    console.log('8');
    setTimeout(() => {
        callback();
    }, 2000);
}
let fourthTask = function (callback) {
    console.log('7');
    setTimeout(() => {
        callback();
    }, 2000);
}
let fifthTask = function (callback) {
    console.log('6');
    setTimeout(() => {
        callback();
    }, 2000);
}
let sixthTask = function (callback) {
    console.log('5');
    setTimeout(() => {
        callback();
    }, 2000);
}

let seventhTask = function (callback) {
    console.log('4');
    setTimeout(() => {
        callback();
    }, 2000);
}

let eighthTask = function (callback) {
    console.log('3');
    setTimeout(() => {
        callback();
    }, 2000);
}

let ninethTask = function (callback) {
    console.log('2');
    setTimeout(() => {
        callback();
    }, 2000);
}

let tenthTask = function (callback) {
    console.log('1');
    setTimeout(() => {
        callback();
    }, 2000);
}
let completeTask = function (callback) {
    console.log('Happy Independance Day');
    setTimeout(() => {
        callback();
    }, 2000);
}


firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            fourthTask(function (){
                fifthTask(function(){
                    sixthTask(function(){
                        seventhTask(function(){
                            eighthTask(function(){
                                ninethTask(function(){
                                    tenthTask(function(){
                                    console.log('Happy Independance Day');
                                    });
                                });
                            });
                        });
                    });
                    
                });
            });
           
        });
    });
});