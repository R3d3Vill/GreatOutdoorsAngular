class Product {
    productId: String;
    productName: String;
    price: Number;
    manufacturer: String;
    category: String;
    description: String;

    constructor(productId: String, productName: String, price: Number, manufacturer: String, 
                category: String, description: String) {
                    this.price=price;
                    this.productName=productName;
                    this.category=category;
                    this.productId=productId;
                    this.description=description;
                    this.manufacturer=manufacturer;


    }
}