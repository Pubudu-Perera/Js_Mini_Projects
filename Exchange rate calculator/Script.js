let currency_one = document.getElementById("currency_one");
let currency_two = document.getElementById("currency_two");
let amount_one = document.getElementById("amount_one");
let amount_two = document.getElementById("amount_two");
let swapButton = document.getElementById("swap");



calculate = () =>{

    let currency_one_f = currency_one.value;
    let currency_two_f = currency_two.value;

    fetch('https://v6.exchangerate-api.com/v6/333374afb0aceef6258f3245/latest/' + currency_one_f)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let rate = data.conversion_rates[currency_two_f];

        document.getElementById('currency_rate').innerText = `1 ${currency_one_f} =  ${rate} ${currency_two_f}`;

        amount_two.value = (amount_one.value * rate).toFixed(2);
    })
}

swapButton.addEventListener('click',function(){
    const currency_one_prev = currency_one.value;

        currency_one.value = currency_two.value;
        currency_two.value = currency_one_prev;

    calculate();
});


currency_one.addEventListener('change',calculate);
currency_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);

calculate();