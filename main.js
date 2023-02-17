const reset_btn = document.querySelector("#reset")
var bill = document.querySelector("#bill")
var tip_amount = document.querySelector("#tip-amount");
var person = document.querySelector("#num-ppl")
var total = document.querySelector("#total");
var custom_tip = document.querySelector("#custom-tip")
var bill_required = document.querySelector("#bill-required");
var ppl_required = document.querySelector("#pll-required");
var buttons_tip = document.querySelectorAll(".tip-btn")
var tip_calc = 0;
var total_calc = 0;
var bill_value = 0;
var person_value = 0;
var tip_percentage = 0;

buttons_tip[0].addEventListener("click", ()=>{
    buttons_tip[0].classList.add ="active-btn"
})
bill.addEventListener("input", () =>{
    a = bill.value
    b = "bill"
    bruh(a,b)
})
person.addEventListener("input", () =>{
    a = person.value
    b = "person"
    bruh(a,b)
})
custom_tip.addEventListener("input", ()=>{
    a = custom_tip.value
    b = "custom"
    bruh(a,b)
})

function bruh(a,b){
    for( i =0; i < buttons_tip.length; i++)
        buttons_tip[i].classList.toggle = "active-btn"
    if(b  == "bill") {
        bill_value = a
    } else if (b == 'person'){
        person_value = a
    } else if ( b == "button" ){
        
        tip_percentage = a;
    }else if ( b == "custom"){
        tip_percentage = a
    }
    if( person.value == "" ){
        tip_amount.textContent ="$0.00"
        total.textContent = "$0.00"
        return;
    }else 
        tip_calc = Math.round((bill_value * tip_percentage/100)/person_value) 
        total_calc = (bill_value/person_value)+ tip_calc
        tip_amount.textContent = "$" + tip_calc
        total.textContent = "$" + total_calc
        reset_btn.style.opacity = "1"
}

function reset(){
    tip_amount.textContent ="$0.00"
    total.textContent = "$0.00"
    person.value = ""
    bill.value = ""
    reset_btn.style.opacity = ".2"
    custom_tip.value =""
}