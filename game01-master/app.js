var randomNumber = document.getElementsByClassName("random-num")[0];
var myTotal = document.getElementsByClassName("total")[0];
var bricks = document.getElementsByClassName("bricks");
var bricksContainer = document.getElementsByClassName("bricks_container");
var newNumber;
var need = document.getElementsByClassName("need")[0];
var remain = 5;


// Random Number For Target

newNumber = (Math.floor(Math.random() * 15)) + 15;
randomNumber.innerHTML = newNumber;
need.innerHTML = newNumber;



function clicked(id){
    
    // Random  Num for images inside the bricks

    number = Math.floor(Math.random() * 12);
    var li = document.getElementById(id);

    // onclick: visibility of Image
    var img = li.childNodes[0];
    img.src = number + ".jpg"; 
    img.style.visibility = "visible"; 

    // Your Score
    myTotal.innerHTML = +(myTotal.innerHTML) + +number;

    // You Need
    need.innerHTML = randomNumber.innerHTML - myTotal.innerHTML

    var bricks = document.getElementsByClassName("bricks");

    // remaining bricks
    remain = remain - 1;
    document.getElementById('remain').innerHTML = remain;

    // Conditions for win & loss
   if( remain == 0 && need.innerHTML > 0 || need.innerHTML < 0 ) {
   return document.getElementById("loss").showModal();       
}

    else if(need.innerHTML == 0){
        return document.getElementById("win").showModal();
    }

}


