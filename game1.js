function AgeIndays()
{
    var birthYear = prompt("what year were you born.....good friend? ");
    var Ageindays = (2018 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var  textAnswer =  document.createTextNode("you are "+Ageindays+"  days old");
    h1.setAttribute("id" , "AgeIndays");
    h1.appendChild( textAnswer );
    document.getElementById("flex-box-result").appendChild(h1);
    
    
}

function reset()
{
    document.getElementById("AgeIndays").remove();
}


function generatorcat()
{
    var image =document.createElement("img");
    var div =document.getElementById("flex-cat-gen");
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}


//Challenge 3:rock paper scissor

function rpsGame(yourchoice)
{
    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
    
    botchoice= numberTochoice(randToRpsInt());
    console.log("computerchoice",botchoice);
    
    result = decideWinner(humanchoice,botchoice);
    console.log(result);
    
    message =finalmessage(result);
    console.log(message);
    
    rpsfrontEnd(yourchoice.id, botchoice,message)
    
    
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberTochoice(number)
{
    return["rock","paper","scissor"][number];
}

function decideWinner(yourchoice,computerchoice)
{
    var rpsDatabase={
        
        "rock":{"scissor":1,"rock":0.5,"paper":0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    
    
    var yourScore = rpsDatabase[yourchoice][computerchoice];
    var computerScore = rpsDatabase[computerchoice][yourchoice];
    
    return [yourScore,computerScore];
    
    
}

function finalmessage(yourscore,computerscore)
{
    if(yourscore == 0)
        {
            return{'message':'You lost!','color':'red'};
        }
    else if(yourscore == 0.5)
        {
            return{'message':'you tied!','color':'yellow'};
        }
    
    else
        {
            return{'message':'you won!','color':'green'}
        }
}


function  rpsfrontEnd(humanImageChoice   , botImageChoice ,finalmessage)
{
    var imagesDatabase={
        'rock ':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor ':document.getElementById('scissor').src        
    }
    
    
    
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    
    
    var humanDiv =document.createElement('div');
    var botDiv =document.createElement('div');
    var messageDiv =document.createElement('div');
    
    
    humanDiv.innerHTML="<img src =" +   imagesDatabase[humanImageChoice]  + "' height=150 width=150 style  ='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>" 
    
    finalmessage.innerHTML="<h1 style='color:" +finalmessage['color'] +";font-size: 60px; padding 30px;'>" +finalmessage['message'] + "</h1>"
    
    
    botDiv.innerHTML="<img src =" +   imagesDatabase[botImageChoice]  + "' height=150 width=150 style  ='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
        


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
    
        

    
    
}