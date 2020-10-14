export class Login{
    userId:string;
    userName:string;
    password:string;
    role:string;

    public constructor(userId,userName,password,role){
        this.userId=userId;
        this.userName=userName;
        this.password=password;
        this.role=role;
    }
}