const buttonsWrapper = document.querySelector('.content-wrapper');

let humanPick;

let computerResult = document.getElementById("computerResult");

let humanResult = document.getElementById("humanResult");

let log = document.getElementById("log");
buttonsWrapper.addEventListener("click", (event) => {
    const target = event.target;
    humanPick = target.getAttribute('alt');
    let randomComputerPick = Math.floor(Math.random()*3 +1);
    randomComputerPick = randomComputerPick.toString();
    let computerScore = computerResult.innerText.substring(11,computerResult.innerText.length);
    let humanScore = humanResult.innerText.substring(7,humanResult.innerText.length);
    if(humanPick==="1" && randomComputerPick ==="2" || humanPick==="2" && randomComputerPick==="3" || humanPick==="3" && randomComputerPick==="1"){
        computerResult.innerText = computerResult.innerText.substring(0,computerResult.innerText.length-computerScore.length);
        computerScore = parseInt(computerScore);
        computerResult.innerText += computerScore+1;
        log.innerText = `Computador ganhou`;
    }else if(humanPick === randomComputerPick){
        log.innerText = `Empate`;
    }else{
        humanResult.innerText = humanResult.innerText.substring(0,humanResult.innerText.length-humanScore.length);
        humanScore = parseInt(humanScore);
        humanResult.innerText += humanScore+1;
        log.innerText = `Pessoa ganhou`;
    }
});
