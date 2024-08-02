import productCache from "../models/productCache";
import { ProductMessage } from "../types";

export const handleProductUpdate = async (value: string) => {
  // todo: wrap this parsing in try catch
  const product: ProductMessage = JSON.parse(value);

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
