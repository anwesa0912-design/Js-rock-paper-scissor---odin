let humanScore=0
let botScore=0
function computerChoice(){
    const options=["rock","paper","scissor"]
    const gen=Math.floor(Math.random()*options.length)
    const response=options[gen]
    return response
}
const rbutton = document.createElement('button');
rbutton.textContent ='ROCK';
rbutton.addEventListener('click', ()=> { const cs=computerChoice(); playround('rock',cs);});
document.body.appendChild(rbutton);

const pbutton = document.createElement('button');
pbutton.textContent ='PAPER';
pbutton.addEventListener('click', ()=> { const cs=computerChoice(); playround('paper',cs);});
document.body.appendChild(pbutton);

const sbutton = document.createElement('button');
sbutton.textContent ='SCISSOR';
sbutton.addEventListener('click', ()=> { const cs=computerChoice(); playround('scissor',cs);});
document.body.appendChild(sbutton);
const sd=document.createElement('div');
document.body.appendChild(sd);
const ag=document.createElement("button");
ag.textContent='Play Again';
ag.addEventListener("click",()=>{humanScore=0;botScore=0;
    rbutton.disabled=false;
    pbutton.disabled=false;
    sbutton.disabled=false;
    sd.textContent='Game Reset.Start....';
    ag.remove();
})

function playround(hc,cc){
    let msg='';
    let m=hc.toLowerCase();
    switch (m){
        case 'rock':
            if(cc==='paper'){
                msg="You loose the round.Paper wins over rock."
                botScore +=1
                
            }
            else if (cc==='scissor'){
                msg="Cool you won the round.Rock wins over scissor."
                humanScore +=1
               
            }
            else{
                msg="Drawww---Rock-Rock"
            }
            break
        case 'paper':
             if(cc==='scissor'){
                msg="You loose the round.Scissor wins over paper."
                botScore +=1
                
            }
            else if (cc==='rock'){
                msg="Cool you won the round.Paper wins over rock."
                humanScore +=1
               
            }
            else{
                msg="Drawww---Pappperrr"
            }
            break
        case 'scissor':
             if(cc==='rock'){
                msg="You lose the round.Rock wins over scissor."
                botScore +=1
                
            }
            else if (cc==='paper'){
                msg="Cool you won the round.Scissor wins over paper."
                humanScore +=1
               
            }
            else{
                msg="Drawww---Sc-i-s--s---o-----r"
            }
            break


    }
    sd.textContent=`${msg}|Current Score: Human:${humanScore} Bot:${botScore}`;
    if(humanScore=== 5){
        sd.textContent="Congratulation you won !"
        document.body.appendChild(ag);
         rbutton.disabled=true;
         pbutton.disabled=true;
         sbutton.disabled=true;
         sd.textContent+="Game Over!"
    }
    else if(botScore=== 5){
        sd.textContent="Woooooo better luck next time.Bot won."
        document.body.appendChild(ag);
         rbutton.disabled=true;
         pbutton.disabled=true;
         sbutton.disabled=true;
         sd.textContent+="Game Over!"
    }
    
}
