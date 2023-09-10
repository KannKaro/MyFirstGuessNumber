const number = Math.floor(Math.random() * 100 + 1);
console.log(number);

document.getElementById("Button").onclick = function Zadanie(liczba){
    liczba = document.getElementById("Input").value;

    if(liczba > number){
        document.getElementById("Win").innerHTML = "Your number is too high";
    }
    else if (liczba < number){
        document.getElementById("Win").innerHTML = "Your number is too low";
    }
    else if(liczba == number){
        document.getElementById("Win").innerHTML = "Thats the number!";
    }
    
    
}
