//Make alert so I know this page is connected
alert("this page is connected")

//Creat a function that takes in a <td> (from table) and turns that <td>'s inner html (*) into an emoji 

var randomRainbow = Math.floor(Math.random() * 9)
var randomBomb = Math.floor(Math.random() * 9)
if (randomRainbow===randomBomb) {
    randomBomb = Math.floor(Math.random() * 9)
}

const treasure = (id)=> {
    if(id === randomRainbow) {
         document.getElementById(id).innerHTML = "&#x1f308"
         document.getElementById("Outcome").innerHTML = "You won!"
    }   else if (id===randomBomb){
        document.getElementById(id).innerHTML ="&#x2620"
        document.getElementById("Outcome").innerHTML = "You lost!"
    }    else {
        document.getElementById(id).innerHTML = "&#x1f332"
    }
    }