export const OrderTotals = () => {
  return (
    <>
      <div className="p-3 space-y-3">
        <h2 className=" font-bold uppercase">
          Order Total: 
        </h2>
        <p>
          Subtotal: {''}
          <span className="font-semibold"> $0.00</span>
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
