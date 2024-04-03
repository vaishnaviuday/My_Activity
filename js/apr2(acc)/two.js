class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("enter your Account number")
        console.log("Account opend succesfully")
    }
    deposit_Amount(){
        console.log("deposit the sufficient amount")
    }
whithdraw_Amount(){
    console.log("enter the amount,how much you wanted to draw")
    }
get_Bal(){
    console.log("Please wait sometime until get result")
    

}
close_amount(){
    console.log("Thankyou......Add more amount")
    
}
}

let a1=new Account();
a1.open_Account()
   a1.deposit_Amount()
a1.whithdraw_Amount()
a1.get_Bal()
a1.close_amount()
