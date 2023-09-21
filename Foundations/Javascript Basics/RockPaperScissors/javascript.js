let escolhas=[
    "pedra",
    "papel",
    "tesoura"
];

function getComputerChoice(){
    return(escolhas[Math.floor(Math.random() * escolhas.length)]);
}

var computerSelection = getComputerChoice();


function playRound(computerSelection,playerSelection){

    

    if(playerSelection==computerSelection){
        return("Empate!");
    }

    else if(playerSelection=="pedra" && computerSelection=="tesoura"){
        return("Player Venceu!!!");
    }
    else if(playerSelection=="pedra" & computerSelection=="papel"){
        return("Computador Venceu!!!");
    }

    else if(playerSelection=="papel" && computerSelection=="pedra"){
        return("Player Venceu!!!");
    }
    else if(playerSelection=="papel" && computerSelection=="tesoura"){
        return("Computador Venceu!!!");
    }

    else if(playerSelection=="tesoura" && computerSelection=="papel"){
        return("Player Venceu!!!");
    }
    else if(playerSelection=="tesoura" && computerSelection=="pedra"){
        return("Computador Venceu!!!");
    }

    else{
        return("Erro!") 
    }
}


function rodadas(rod){
    for(rod=0;rod<5;rod++){
        var playerSelection =prompt("Qual sua jogada?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        getComputerChoice();
    }

}

// console.log(playRound(playerSelection, computerSelection));
console.log(rodadas());





