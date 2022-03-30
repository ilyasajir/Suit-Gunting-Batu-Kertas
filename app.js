const btn = document.querySelector('#submit');
const gunting = document.querySelector('#gunting')
const kertas = document.querySelector('#kertas')
const batu = document.querySelector('#batu')
const hasil = document.querySelector('#hasil')

//pilihan
const kamu= document.querySelector('#kamu')
const bot= document.querySelector('#bot')

//bot random
function makeid(length) {
    var result           = '';
    var characters       = '123';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


btn.addEventListener('click', () =>{
    let pKamu= "";
    let id = 0;
    let pBot = "";
    let botId = 0;

    let random ="123";
    botId = parseInt(makeid(1));
    if(gunting.checked){
        pKamu= gunting.getAttribute('value')
        id += parseInt(gunting.getAttribute('ilyas'))
        kamu.innerHTML = pKamu
    }else if(kertas.checked){
        pKamu= kertas.getAttribute('value')
        id += parseInt(kertas.getAttribute('ilyas'))
        kamu.innerHTML = pKamu
    }else if(batu.checked){
        pKamu= batu.getAttribute('value')
        id += parseInt(batu.getAttribute('ilyas'))
        kamu.innerHTML = pKamu
    }

    //bot milih
    if(botId == 1){
        pBot = "gunting";
        bot.innerHTML = pBot      
    } else if (botId == 2){
        pBot = "batu";    
        bot.innerHTML = pBot  
    } else if (botId == 3){
        pBot = "kertas";
        bot.innerHTML = pBot
    }

    // Pertempuran
    if (botId==1){
        if(id==1){
            hasil.innerHTML="seri"
        }else if(id==2){
            hasil.innerHTML="You Won"
        }else if(id==3){
            hasil.innerHTML="You Lose"
        }
    }else if (botId==2){
        if(id==1){
            hasil.innerHTML="You Lose"
        }else if(id==2){
            hasil.innerHTML="Seri"
        }else if(id==3){
            hasil.innerHTML="You Won"
        }
    }else if (botId==3){
        if(id==1){
            hasil.innerHTML="You Won"
        }else if(id==2){
            hasil.innerHTML="You Lose"
        }else if(id==3){
            hasil.innerHTML="Seri"
        }
    }
    

});