class Account{
    acc_Bal=0;
    deposit_Amount(Amount){
        this.acc_Bal=this.acc_Bal+Amount
    }
    get_Bal(){
        return this.acc_Bal;
    }
    withdrawl_Amount(Amount){
        this.acc_Bal=this.acc_Bal - Amount
    }
}

let a1= new Account()
console.log(a1)
a1.deposit_Amount(15000)
console.log(a1)
a1.withdrawl_Amount(500)
console.log(a1)
console.log("bal is..")
console.log(a1.get_Bal())