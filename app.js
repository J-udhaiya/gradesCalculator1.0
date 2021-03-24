let sci=document.querySelector("#Science")
let maths=document.querySelector("#Maths")
let comp=document.querySelector("#Computer")
let eng=document.querySelector("#English")
let social=document.querySelector("#Social1")
let per=document.querySelector(".percentage");
let percNumbers=document.querySelector(".percNumbers");
let greetMessage=document.querySelector(".greetMessage");
let giphy=document.querySelector(".giphy");
per.addEventListener("click",showper)
function showper(percMarks){
    //add the marks present in all the subjects
    let total= parseFloat(sci.value)+parseFloat(maths.value)+parseFloat(comp.value)
               + parseFloat(eng.value)+ parseFloat(social.value)
    
    //show them in percentage
    const perMarks=(total*100)/500;
     console.log(perMarks);
    //categorise grade using conditionals
    if(perMarks >=90 && perMarks <= 100){
       percNumbers.innerText=`${perMarks} %`;
       greetMessage.innerText="Congrats, You have secured O grade"
       giphy.setAttribute("src","https://media.giphy.com/media/DKnMqdm9i980E/giphy.gif")
    }
    else if(perMarks >=80 && perMarks <90){
        percNumbers.innerText=`${perMarks } %`;
       greetMessage.innerText="Congrats, You have secured A grade"
       giphy.setAttribute("src","https://media.giphy.com/media/VIFJG0y6GirrjXYO4S/giphy.gif")
    }
    else if(perMarks >=70 && perMarks <80){
        percNumbers.innerText=`${perMarks}%`;
       greetMessage.innerText="Congrats, You have secured B grade"
       giphy.setAttribute("src","https://media.giphy.com/media/3oz9ZE2Oo9zRC/giphy.gif")
       
    }
    else if(perMarks >=60 && perMarks <70){
        percNumbers.innerText=`${perMarks}%`;
       greetMessage.innerText="Congrats, You have secured C grade"
       giphy.setAttribute("src","https://media.giphy.com/media/j3FzUsajPDD3OJKJyb/giphy.gif")
    }
    else{
        percNumbers.innerText=`${perMarks}%`;
       greetMessage.innerText="Congrats, You have secured D grade.Good Luck Next time"
       giphy.setAttribute("src","https://media.giphy.com/media/VDTDzC2LPSNEoJxC2U/giphy.gif")
    }

}



    





