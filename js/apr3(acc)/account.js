class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(Id,Name,Amount){
        this.acc_Id=Id;
        this.acc_Name=Name;
        this.acc_Bal=Amount
    }
}
let a1=new Account(101,'vaishu',26000)
let a2=new Account(102,'vaishu',26000)
let a3=new Account(103,'divya',26000)
console.log(a1)
console.log(a2)
console.log(a3)

