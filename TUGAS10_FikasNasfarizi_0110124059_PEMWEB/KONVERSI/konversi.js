const exchangeRates = {
    "USD": 9915,   
    "SGD": 13472,  
    "MYR": 874,    
    "JPY": 120,    
    "EUR": 15888,  
    "SAR": 3592    
};

function convertCurrency() {
    
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    
    if (amount && !isNaN(amount) && amount > 0) {
        const rupiahValue = amount * exchangeRates[currency];
        document.getElementById("resultText").innerHTML = `Nilai dalam Rupiah: ${rupiahValue.toLocaleString()}`;
    } else {
        document.getElementById("resultText").innerHTML = "Nilai dalam Rupiah: 0";
    }
}
