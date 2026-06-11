function computerChoice(){
    const options=["rock","paper","scissor"]
    const gen=Math.floor(Math.random()*options.length)
    const response=options[gen]
    return response
}
function humanchoice(){
    const choice=prompt("Enter your move:")
    return choice
} 
let humanScore=0
let botScore=0
function playround(hc,cc){
    let m=hc.toLowerCase()
    switch (m){
        case 'rock':
            if(cc==='paper'){
                console.log("You loose the round.Paper wins over rock.")
                botScore +=1
                
            }
            else if (cc==='scissor'){
                console.log("Cool you won the round.Rock wins over scissor.")
                humanScore +=1
               
            }
            else{
                console.log("Drawww---Rock-Rock")
            }
            break
        case 'paper':
             if(cc==='scissor'){
                console.log("You loose the round.Scissor wins over paper.")
                botScore +=1
                
            }
            else if (cc==='rock'){
                console.log("Cool you won the round.Paper wins over rock.")
                humanScore +=1
               
            }
            else{
                console.log("Drawww---Pappperrr")
            }
            break
        case 'scissor':
             if(cc==='rock'){
                console.log("You lose the round.Rock wins over scissor.")
                botScore +=1
                
            }
            else if (cc==='paper'){
                console.log("Cool you won the round.Scissor wins over paper.")
                humanScore +=1
               
            }
            else{
                console.log("Drawww---Sc-i-s--s---o-----r")
            }
            break


    }
    
}
function roundcount(){
    for (let i=1;i<6;i++){
        
        let cs= computerChoice()
        let hs= humanchoice()
        playround(hs,cs)
    }
    if(humanScore>botScore){
        console.log("Hurray you WON!")

    }
    else if(botScore>humanScore){
        console.log("Oo No you lose")
    }
    else{
        console.log("----DRAW---")
    }
}
roundcount()