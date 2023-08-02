var btnPlus = document.getElementsByClassName("fa-plus")
console.log(btnPlus);

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",function () {
        btnPlus[i].nextElementSibling.innerHTML++
        sum ()
    }
    )
}

let btnMinus = document.querySelectorAll(".fa-minus")
console.log(btnMinus);

for (let minus of btnMinus) {
   minus.addEventListener("click",function () {
       if (parseInt(minus.previousElementSibling.innerHTML) > 0) {
        minus.previousElementSibling.innerHTML--
       }
        sum()
    }
    )
}

function sum () {
    let qty = document.querySelectorAll (".qty")
    let price = document.querySelectorAll (".price")

    let sum = 0

    for ( let i = 0; i < qty.length ; i++) {
        sum += qty[i].innerHTML * price[i].innerHTML
    }
console.log (sum);
document.getElementById("para_total").innerHTML = "Total: " + sum + "DT"
}

let btnDelete = document.querySelectorAll(".fa-trash")

for (let trash of btnDelete) {
    trash.addEventListener("click" , function (){
    trash.parentElement.remove()
    sum()}
    ) 
}
    
    

let hearts = document.querySelectorAll(".fa-heart")
console.log(hearts)

for (let heart of hearts) {
    heart.addEventListener("click" , function (){
        heart.classList.toggle("red")
    })
    

}

 