import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


export default function Category({
  data,
  category,
  cart,
  setCart,
  removeFromCart,
  addToCart,
  search,
  setSearch,
  userToken,
  infosUser,
}) {
  console.log(category);

  return (
    <>
      <div className="h-screen">
        <Header
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          search={search}
          setSearch={setSearch}
          userToken={userToken}
          infosUser={infosUser}
        />
        <h1 className="text-4xl py-4 px-4 font-bold">{category}</h1>
        <div className="global-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((post) => {
            if (post.category === category) {
              return (
                <div className="border-[1px] rounded-lg m-5 p-5 ">
                  
                  <img
                    className="w-full h-[200px] object-cover rounded-lg mb-5"
                    src={post.images[0].secure_url}
                    alt="img"
                  />
                  <div className="flex justify-between items-end sm:flex-col sm:items-start">
                    <h2 className="text-lg">{post.title}</h2>
                    <h2 className="text-3xl font-bold">{post.price} €</h2>
                  </div>
                  <div className="flex justify-between">
                <div className="text-center grow rounded-lg mr-2 mt-5 py-4  bg-orange-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out">
                  <Link to={`/product/${post._id}`}> Product details</Link>
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    addToCart(post);
                  }}
                  className="rounded-lg mt-5 py-4  px-5 bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
                >
                  <ShoppingCartIcon className="h-5 w-5 text-white" />
                </button>
              </div>
            
                </div>
              );
            }
          })}
          
        
        </div>
      </div>
    </>
  );
}
