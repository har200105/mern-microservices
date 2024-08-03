import productCache from "../models/productCache";
import { ProductMessage } from "../types";

export const handleProductUpdate = async (value: string) => {

  let product: ProductMessage;
  try{
    product = JSON.parse(value);
  }catch(error){
    console.log(`Error occurred while parsing product data : ${value}`);
    return;
  }

  return await productCache.updateOne(
    {
      productId: product.data.id,
    },
    {
      $set: {
        priceConfiguration: product.data.priceConfiguration,
      },
    },
    { upsert: true },
  );
};
