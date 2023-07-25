function convertCrypto() {
    var crypval = document.getElementById("crypval").value;
    var selectedCrypto = document.getElementById("selectedCrypto").value;
    var selectedCurr = document.getElementById("selectedCurr").value;
    
    // Crypto Exchange rate in US $
    const crypto = {'btc':26000, 'eth':1700, 'usdt':1, 'bnb': 300, 'xrp':0.45}
    
    // Currency exchange rates
    const currency = {'usd': 1, 'aus':1.50, 'ir':80, 'brl':4.96, 'qar': 3.64}

    // Calculate Cryto currency 
    var result = (crypval*(crypto[selectedCrypto])*(currency[selectedCurr])).toFixed(2);

    document.getElementById('currval').value=result;
    document.getElementById('currval').style.backgroundColor = '#9BA4B5';
    document.getElementById('currval').style.color = 'white';
    document.getElementById('currval').style.fontWeight = '600';

    var cryptoArr = crypto[selectedCrypto];
    var currencies = currency[selectedCurr];

    update(selectedCurr,selectedCrypto,cryptoArr,currencies);
}

function update(selectedCurr,selectedCrypto,cryptoArr,currencies){

    // To show, 1 crypto = "price" of that country.
    document.getElementById('dynamicVal').innerHTML="1 "+selectedCrypto.toUpperCase()+" equals "+(cryptoArr)*(currencies)+" "+selectedCurr.toUpperCase();

    document.getElementById('dynamicVal').style.color = '#9BA4B5';
    
   

}
