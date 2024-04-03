class Account{
    acc_Bal=0;
    deposit_Amount(Amount){
        this.acc_Bal=this.acc_Bal+Amount
    }
}
let a1=new Account()
console.log(a1)
a1.deposit_Amount(50000)
a1.deposit_Amount(300)
a1.deposit_Amount(76)
console.log(a1)

