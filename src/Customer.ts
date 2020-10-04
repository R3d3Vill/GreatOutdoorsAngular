export class Customer {
    userId:string;
    userName:string;
    address:string;
    zipcode:string;
    email:string;
    mobile:string;
    public constructor(userId:string,userName:string,address:string,zipcode:string,email:string,mobile:string)
    {
        this.userId=userId;
        this.userName=userName;
        this.address=address;
        this.zipcode=zipcode;
        this.email=email;
        this.mobile=mobile;
    }
}