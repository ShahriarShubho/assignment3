



//This code is kilometerToMeter Converted code

function kilometerToMeter(kilometer){
    
    var meter = kilometer*1000;
    if(kilometer<0){
        return ("invalid number, kilometer can not be a nagative number")
    }
    return meter;
}


//This code is budgeCalcolator code

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



//This code is hotelCost Calculating code

function hotelCost(days){
    
    var hotelFee = 0;
    if(days<0){
        return "Invalid, Days can not be nagative";
    }else if(days<=10){
        hotelFee = days * 100;
    }else if(days<=20){
        var first10DaysFee = 10 * 100;
        var dayRemaining = days - 10;
        var after10DaysFee =  dayRemaining * 80;
        hotelFee = first10DaysFee + after10DaysFee;
    }else{
        var first10DaysFee = 10 * 100;
        var secound10DaysFee = 10 * 80;
        var dayRemaining = days - 20;
        var after20DaysFee =  dayRemaining * 50;
        hotelFee = first10DaysFee + secound10DaysFee + after20DaysFee;
    }   
    return hotelFee;
}


//This code is megaFriend code


function megaFriend(friendArry) {

    if(friendArry.length <= 0){
        return "Your Arry is Empty";
       }
    var largName = friendArry[0];
    for(var i = 0 ; i < friendArry.length; i++) {
        var namelength = friendArry[i];
        if(namelength.length > largName.length ){
            largName = namelength;   
        }
    }
    return largName;
 }

