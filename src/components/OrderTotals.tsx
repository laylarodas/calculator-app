import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
};

export const OrderTotals = ({order}: OrderTotalsProps) => {
  
  const SubtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
  
  
  return (
    <>
      <div className="p-3 space-y-3">
        <h2 className=" font-bold uppercase">
          Order Total: 
        </h2>
        <p>
          Subtotal: {''}
          <span className="font-semibold">{formatCurrency(SubtotalAmount)}</span>
        </p>
        <p>
          Tip: {''}
          <span className="font-semibold"> $0.00</span>
        </p>
        <p>
          Total: {''}
          <span className="font-bold"> $0.00</span>
        </p>
      </div>
      <button></button>
    </>
  )
}
