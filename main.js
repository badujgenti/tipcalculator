
let tipPercent;


let peopleInput = document.getElementById("people-input");
let totalForPerson = document.getElementById("total-amount") ;
let tipForPerson = document.getElementById("tip-amount");

let billInput = document.getElementById("bill-input");
billInput.addEventListener ("input", calculate );
let billInputValue = 0.0;
function calculate(){
    if(billInput.value && peopleInput.value && tipPercent ){
    billInputValue = parseFloat(billInput.value);
     let tip= billInputValue * tipPercent;
     let totalPerPerson = (billInputValue + tip) / peopleInput.value ;
     let tipPerPerson = tip / peopleInput.value ;
        tipForPerson.innerHTML ="$"+ tipPerPerson.toFixed(1);  
        totalForPerson.innerHTML= "$"+ totalPerPerson.toFixed(1);
    }
}

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click" , (event) => {
    event.preventDefault();
    billInput.value=0;
    peopleInput.value=0;
    tipForPerson.innerHTML="$ 0.00" ;
    totalForPerson.innerHTML="$ 0.00"; 
    custom.value = "" ; 
    error.style.display="none";
    peopleInput.style.border = "none";
});

let tipButton = document.getElementById("percent-container");
tipButton.addEventListener ("click", (event) => {
    event.preventDefault();
    tipPercent = parseFloat(event.target.innerHTML)/100;
    calculate();
});

peopleInput.addEventListener ("input", ()=>{
    let error = document.getElementById("error");
    if (peopleInput.value < 1 ){
        error.style.display="block";
        peopleInput.style.border = "1px solid red";
    }else{
        error.style.display="none";
        peopleInput.style.border = "none";
    }
    calculate();

});



let custom = document.getElementById("custom-box");
custom.addEventListener("input", (event)=>{ 
    event.preventDefault();
    tipPercent = Number(event.target.value)/100;
    calculate();
});


    


peopleInput.addEventListener ("input", setPeopleValue);
function setPeopleValue (){
    peopleInputValue = parseFloat(peopleInput.value);
    console.log(Number(peopleInput.value));
    
}



