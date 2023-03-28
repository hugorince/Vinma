import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import assets
import Logo from "../img/logo-hema.svg";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// import components
import Cart from "./Cart";

const Header = ({
  cart,
  setCart,
  removeFromCart,
  search,
  setSearch,
  data,
  userToken,
  infosUser,
}) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      <div className="global-header border-b-[1px] sticky top-0 z-50">
        <div className="flex justify-between bg-white w-full h-20 flex items-center px-4">
          <div className="left">
          <p
              className=" text-2xl font-bold bg-red-600 text-white p-2 rounded-lg tracking-widest cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              VINMA
            </p>
          </div>
          <div className="center">
            <div class="relative">
              <input
                type="search"
                className=" outline-0 w-48 lg:w-96 block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search category"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
          <div className="right">
            <ul className="flex items-center">
              <li>
                <button
                  className="rounded-lg py-2 px-10  mr-4 bg-amber-400 hover:bg-black duration-300 text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={() => {
                    navigate("/publication");
                  }}
                >
                  Sell now
                </button>
              </li>
              <li>
                <MagnifyingGlassIcon className="h-6 w-6 text-slate-900 mr-3 sm:hidden" />
              </li>
              <li className="flex">
              <div className="" onClick={() => {
                    if (userToken) {
                      navigate(`/account/${infosUser.userId}`);
                    } else {
                      navigate("/login");
                    }
                  }}>
                    {infosUser ? (
                    <div className="flex mr-3 items-center space-x-2 cursor-pointer">
                      <img
                        className="w-8 h-8 rounded-full object-cover "
                        src={infosUser.profilePicture.secure_url}
                      />
                      <p>{infosUser.name}</p>
                    </div>
                  ) : (
                    <UserIcon className="h-6 w-6 text-slate-900 mr-3 hover:cursor-pointer" />
                  )}
              </div>
              </li>
              {cart.length ? (
                <li className="flex">
                  <ShoppingBagIcon
                    className="h-6 w-6 text-slate-900 cursor-pointer mr-6"
                    onClick={toggleCart}
                  />
                  <p className="absolute ml-3 -mt-1 rounded-full w-5 h-5 text-sm bg-yellow-400 text-center">
                    {cart.length}
                  </p>
                </li>
              ) : (
                <ShoppingBagIcon
                  className="h-6 w-6 text-slate-900 cursor-pointer mr-6"
                  onClick={toggleCart}
                />
              )}
              {/* <li>
                <Bars3Icon className="h-6 w-6 text-slate-900" />
              </li> */}
            </ul>
          </div>
        </div>
        {cartIsOpen && (
          <Cart
            toggleCart={toggleCart}
            cart={cart}
            setCart={setCart}
            removeFromCart={removeFromCart}
            data={data}
          />
        )}
      </div>
    </>
  );
};

export default Header;
