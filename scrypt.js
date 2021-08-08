let jogadorOrdem =[];
let maquinaOrdem =[];
let level = 0;
let colorArray =["blue", "yellow", "red","green"]; 
let vezJogador = false;
let pontos=0;
let checagem;
let i=[0];

function startGame(){
    console.log("jogo começou");
    let newColor = Math.floor(Math.random()*4);
    maquinaOrdem.push(newColor);
    console.log("level: "+ level + "\narray de cores: " + maquinaOrdem);
    displayColor(); 
         
}

//mostrar as cores na tela
function displayColor(){    
    for(let i=0;i<maquinaOrdem.length;i++){        
        document.getElementById(colorArray[maquinaOrdem[i]]).style.opacity = "0.4";
        console.log(colorArray[maquinaOrdem[i]]);         
        
        setTimeout(()=>{
            document.getElementById(colorArray[maquinaOrdem[i]]).style.opacity = "1";                        
        },1000);
        
       
    }
    setTimeout(()=>{
        vezJogador = true;
        console.log("vez do jogador:" + vezJogador);
    },1000);
}
//clique nas cores
function pressBlue(){
    if (vezJogador == true && jogadorOrdem.length<maquinaOrdem.length){
        jogadorOrdem.push(0);
        console.log("clicou azul");
        console.log(jogadorOrdem);
        if(jogadorOrdem.length==maquinaOrdem.length){
            colorCheck()
        } 
    }
}
function pressYellow(){
    if (vezJogador == true && jogadorOrdem.length<maquinaOrdem.length){
        jogadorOrdem.push(1);
        console.log("clicou amarelo");
        console.log(jogadorOrdem);
        if(jogadorOrdem.length==maquinaOrdem.length){
            colorCheck()
        } 
    }
}
function pressRed(){
    if (vezJogador == true && jogadorOrdem.length<maquinaOrdem.length){
        jogadorOrdem.push(2);
        console.log("clicou vermelho");
        console.log(jogadorOrdem);
        if(jogadorOrdem.length==maquinaOrdem.length){
            colorCheck()
        } 
    }
}
function pressGreen(){
    if (vezJogador == true && jogadorOrdem.length<maquinaOrdem.length){
        jogadorOrdem.push(3);
        console.log("clicou verde");
        console.log(jogadorOrdem);
        if(jogadorOrdem.length==maquinaOrdem.length){
            colorCheck()
        } 
    }
}
// função checa cores
function colorCheck(colors){
    vezJogador = false;
    console.log("checou o comprimento");
    for(let i =0;i<jogadorOrdem.length;i++){
        if(jogadorOrdem[i]==maquinaOrdem[i]){
            console.log(jogadorOrdem[i] + "  correto.");
        }else{
            console.clear();
            gameOver();
            break;
        }
        pontos++;
        level++;
        alert("Acertou! Clique no Ok para continuar" +"\n Pontuação atual: " + pontos);
        jogadorOrdem =[];
        startGame()
        console.clear();
    }
    
   
}

function gameOver(){
    console.log("Errou");                   
    alert("Você errou a sequência!" + "\nSua pontuação foi:  " + pontos);
    pontos=0;
    level=0;
    maquinaOrdem =[];
    jogadorOrdem =[];    

}
/*function showColor(item){   
    setTimeout(()=>{document.getElementById(colorArray[item]).style.opacity = "0.4";},1000);   
    setTimeout(()=>{document.getElementById(colorArray[item]).style.opacity = "1";},1000);   
    
    
}    */ 
  
    