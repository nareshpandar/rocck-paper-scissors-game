let userscore= 0;
let compscore = 0;
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompchoice = () =>{
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#081b31";  // Background color for the draw message
    msg.style.color = "#fff";  // Text color to ensure visibility against the dark background
};


const showwinner = (userwin,userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText= `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        console.log("You win");

    }
    else{
        compscore++;
        compscorepara.innerText =compscore;
        msg.innerText= `you lost.  ${compchoice} beats your ${userchoice}`;
        // msg.style.backgroundcolor = "red";
        msg.style.backgroundColor = "red";
        console.log("You lost");
        
    }
};

const playgame = (userchoice)=> {
    // generate computer choice //
    const compchoice =  genCompchoice();
    if (userchoice === compchoice){
        //draw game //
        drawgame ();

    }
    else{
        let userwin = true ;
        if(userchoice === "rock"){
            //scissors , paper //
            userwin= compchoice === "paper" ? false : true ;
        } else if ( userchoice === "paper"){
            //rock , scissors//
            userwin = compchoice === "scissors" ? false : true ;
        }else {
            //rock , paper
            userwin = compchoice === "rock" ? false : true ;

        }
        showwinner(userwin,userchoice,compchoice);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>
    {
        const userchoice =choice.getAttribute("id");
        playgame(userchoice);
     });
    });
    