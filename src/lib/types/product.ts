import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";

// doyim taxlil qilishni organ 
export interface Product { // databasimiz xosil qilib bergan 
    _id: string; // ObjectIdni mongoosedan qabul qilamiz 
    productStatus: ProductStatus; // ProductStatusni kirgizmasekham uni default valusi bor u doyim mavjud boladi 
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;   //
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry {
    order: string;
    page:number;
    limit:number;
    productCollection?: ProductCollection;
    search?: string;
}
