



//This code is Kilometer to Meter Converted code

function kilometerToMeter(kilometer){
    
    var meter = kilometer*1000;
    if(kilometer<0){
        return ("invalid number, kilometer can not be a nagative number")
    }
    return meter;
}


//This code is Budge Calcolating code

function budgetCalculator(watch, phone, leptop){

    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var leptopPrice = 500 * leptop;
    var totalPrice = watchPrice + phonePrice + leptopPrice;
    if(watch<0 || phone<0 || leptop<0){
        return "Invalid number, Nagative number is not Count"
    }
      return totalPrice
}
