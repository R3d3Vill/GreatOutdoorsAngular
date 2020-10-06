export class Cart{
cartId:CartId
quantity:number

constructor(cartId:CartId,quantity:number)
{
    this.cartId=cartId;
    this.quantity=quantity;
}

}

export class CartId{
    userId:string;
    productId:string;

    constructor(userId:string,productId:string)
    {
        this.userId=userId;
        this.productId=productId;
    }
}