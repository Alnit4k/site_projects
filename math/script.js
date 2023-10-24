// Basics functions

function sum(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let r = (Number(n1)+Number(n2))
    document.getElementById("result").innerHTML = r ;
}

function sub(){
    let n3 = document.getElementById("n3").value
    let n4 = document.getElementById("n4").value
    let r1 = (Number(n3)-Number(n4))
    document.getElementById("result1").innerHTML = r1
}

function mult(){
    let n5 = document.getElementById("n5").value
    let n6 = document.getElementById("n6").value
    let r2 = (Number(n5)*Number(n6))
    document.getElementById("result2").innerHTML = r2

}

function div(){
    let n7 = document.getElementById("n7").value
    let n8 = document.getElementById("n8").value
    let r3 = (Number(n7)/Number(n8))
    document.getElementById("result3").innerHTML = r3

}

// Percentage functions

// Average Percentage

function avg(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let avgp = ((Number(n1)+ Number(n2))/2)
    document.getElementById("result").innerHTML = avgp 
}