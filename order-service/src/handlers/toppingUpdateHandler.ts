import toppingsCache from "../models/toppingsCache";
import { ToppingMessage } from "../types";

export const handleToppingUpdate = async (value: string) => {
  // todo: wrap this parsing in try catch
  const topping: ToppingMessage = JSON.parse(value);

  return await toppingsCache.updateOne(
    {
      toppingId: topping.data.id,
    },
    {
      $set: {
        price: topping.data.price,
        tenantId: topping.data.tenantId,
      },
    },
    { upsert: true },
  );
};
