// ==============Form Validation ===================

const formSubmit = document.getElementById('formSubmit');
const showdiv = document.getElementsByClassName('show_result_card');
const hidediv = document.getElementsByClassName('empty_result_card');

    const form_group_1 = document.getElementById('form_group_1');
    const form_group_2 = document.getElementById('form_group_2');
    const form_group_3 = document.getElementById('form_group_3');
    const form_group_4 = document.getElementById('form_group_4');

formSubmit.addEventListener('click', function(){
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("Interest_rate").value;
    const term = document.getElementById("term").value;
    const type = document.querySelector("input[name=type]").checked;

    if(amount == false){
        form_group_1.classList.add('error');
    }
    if(interest == false){
        form_group_2.classList.add('error');
    }
    if(term == false){
        form_group_3.classList.add('error');
    }
    if(type == false){
        form_group_4.classList.add('error');
    }

    if(amount != false && interest != false && term != false && type != false){
        showdiv[0].style.display = "block";
        hidediv[0].style.display = "none";
    }
});

form_group_1.addEventListener("click", function(e){
    e.preventDefault();
    form_group_1.classList.remove('error');

})
form_group_2.addEventListener("click", function(e){
    e.preventDefault();
    form_group_2.classList.remove('error');

})
form_group_3.addEventListener("click", function(e){
    e.preventDefault();
    form_group_3.classList.remove('error');

})
form_group_4.addEventListener("click", function(){
    form_group_4.classList.remove('error');

})


//  ===================== value Reset ===================

const clearAll = document.getElementById('clearAll');

clearAll.addEventListener("click", function(e){
    e.preventDefault();

    document.getElementById("amount").value = "";
    document.getElementById("Interest_rate").value = "";
    document.getElementById("term").value = "";
    document.querySelector("input[name = type][value='Repayment']").checked = false;
    document.querySelector("input[name = type][value='Interest']").checked = false;
});


// =================== Calculator =========================
function mortgage() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("Interest_rate").value;
    const term = document.getElementById("term").value;
    const type = document.querySelector("input[name=type]:checked").value;


    const total_interest = Number(amount * (rate / 100) * term );
    const total = Number(amount) + Number(total_interest);
    const monthly = Number(total) / Number(term) / 12;

    document.getElementById('total').innerHTML=  "&#163; "+total.toFixed(2)

    if(type == "Repayment"){
        document.getElementById('monthly').innerHTML= `<p>Your monthly repayments</p>
        <h3>&#163; ${monthly.toFixed(2)}</h3>`;
    }else{
        document.getElementById('monthly').innerHTML=  `<p>Your total interest payments</p>
        <h3> &#163; ${total_interest.toFixed(2)}</h3>`;
    }

}










