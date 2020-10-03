export class Product{
    productId:string;
    productName:string;
    category:string;
    price:number;
    manufacturer:string;
    description:string;

    constructor(productId,productName,category,price,manufacturer,description)
    {
        this.productId=productId;
        this.productName=productName;
        this.category=category;
        this.price=price;
        this.manufacturer=manufacturer;
        this.description=description;
    }
}