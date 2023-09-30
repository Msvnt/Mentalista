
// o cod parseInt(math.Random) sorteia um n entre 0 e 0.9999..... , multiplicando tal comando conseguimos nosso objetivo de sortear ate o n 1000 
var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto){

    var chute = prompt('Digite um número entre 0 e 1000');

    if(chute == numeroSecreto){
        alert('ACERTOU!')
    }
    else if(chute > numeroSecreto){
        alert('O número secreto é MENOR')
    }
    else if(chute < numeroSecreto){
        alert('O número secreto é MAIOR')
    }
}

function enviarNumero(){
    
}

//tive uma ideia de remover os prompts e fazer o jogar rodar entre o javascript e o html atraves do input enviar//