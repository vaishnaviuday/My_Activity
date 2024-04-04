class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    constructor(id,name,amount){
this.acc_Id=id;
this.acc_Name=name;
this.acc_Bal=amount;
    }
    open_Account(){
        console.log("Account opened successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal
    }
    close_Account(){

    }
}

let a1=new Account(102,'vaishu',26000)

console.log(a1)

a1.deposit_Amount(12000)
console.log(a1)
a1.withdrawl(457)
console.log(a1)

console.log(a1.get_Bal)
