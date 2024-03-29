import { OrderItem } from '../types';

type OrderContentsProps = {
    order: OrderItem[];
};


export const OrderContents = ({order} : OrderContentsProps ) => {
  return (
    <div>
        <h2 className='font-black text-4xl'>Expenses</h2>
        <div className=' space-y-3 mt-5'>
            {
                order.length === 0 ? <p className='text-gray-500 text-center'>No expenses yet</p> 
                : (
                    order.map(item => (
                        <div key={item.id} className='flex justify-between'>
                            <p>{item.name} x {item.quantity}</p>
                            <p>€{item.price * item.quantity}</p>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
