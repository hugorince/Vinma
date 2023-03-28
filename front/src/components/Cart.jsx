// import packages
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

const Cart = ({ toggleCart, cart, removeFromCart, data }) => {
  let total = 0;

  return (
    <>
      <div className="bg-white">
        <div className="cart bg-white px-5 border-t-[1px]">
          <h1 className="text-slate-900 text-3xl font-bold">My cart </h1>
          <div className="flex items-center mt-3 mb-5">
            <ChevronLeftIcon className="h-5 w-5" />
            <p className="cursor-pointer" onClick={toggleCart}>
              continue shopping
            </p>
          </div>
        </div>
        {cart.map((product) => {
          total += product.price;
          return (
            <div className="flex flex-col bg-white p-5  border-b-[1px] ">
              <div className="flex justify-end">
                <TrashIcon className="h-6 w-6" onClick={removeFromCart} />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div className="flex items-start">
                  <img
                    src={product.images[0].secure_url}
                    alt=""
                    className="w-24 h-24 object-cover"
                  />
                  <div className="text-product ml-5">
                    <p className="font-bold">{product.title}</p>
                    <p className="text-sm w-[230px] mt-2 truncate">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="price text-xl font-bold">{product.price} €</div>
              </div>
            </div>
          );
        })}

        <div className="flex flex-col cart bg-white  mt-[1px] p-5">
          <div className="flex items-end justify-between sm:justify-end">
            <p className="font-bold sm:mr-20">Total</p>
            <div className="price text-3xl font-bold">{total.toFixed(2)} €</div>
          </div>
          <div className="sm:flex sm:justify-end">
            <button className="bg-orange-400 text-white p-2 mt-7 w-full rounded sm:w-44">
              Checkout
            </button>
          </div>

          <div className="flex items-center mt-10">
            <ChevronLeftIcon className="h-5 w-5" />
            <p className="cursor-pointer" onClick={toggleCart}>
              continue shopping
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
