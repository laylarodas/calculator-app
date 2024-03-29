import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number
};

export const OrderTotals = ({ order, tip }: OrderTotalsProps) => {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip]);

  const totalToPay = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="p-3 space-y-3">
        <h2 className=" font-bold uppercase">
          Order Total:
        </h2>
        <p>
          Subtotal: {''}
          <span className="font-semibold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Tip: {''}
          <span className="font-semibold">{formatCurrency(tipAmount)}</span>
        </p>

        <p className="font-bold uppercase border-t border-gray-200 py-3 px-2 text-right text-lg">
          Total: {''}
          <span>{formatCurrency(totalToPay)}</span>
        </p>

      </div>
      <button></button>
    </>
  )
}
