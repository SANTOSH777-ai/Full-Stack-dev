//Addition Function..
function add(a,b){
    return a + b;
}
//Subtraction Function...
function sub(a,b){
    return a - b;
}
//Multiplication Function....
function mul(a,b){
    return a * b;
}
//Division Function....
function div(a,b){
    if (b === 0) return "Error: Division by zero";
    return a / b;
}

let res = prompt("Enter sign (+, -, *, /) or 'stop': ");
while(res !== "stop"){
    let aStr = prompt("Enter a: ");
    let bStr = prompt("Enter b: ");
    let a = parseFloat(aStr);
    let b = parseFloat(bStr);
    

    
    if(isNaN(a) || isNaN(b)){
        alert("Invalid—enter numbers only.");
        console.error("NaN detected");
    }
    else if(res == "+"){
        let result = add(a, b);
        console.log(`Result: ${a} + ${b} = ${result}`);
        alert(`${a} + ${b} = ${result}`);
    }
    else if(res == "*"){
        let result = mul(a,b);
        alert(`The result is ${result}`);
    }
    else if(res == "/"){
        let result = div(a,b);
        alert(`The result is : ${result}`);
    }
    else if(res == "-"){
        let result = sub(a,b);
        alert(`The result is ${result}`);
    }
    else{
        alert("Invalid operator.");
    }
    res = prompt("Next or 'stop': ");
}
alert("Ended.");
