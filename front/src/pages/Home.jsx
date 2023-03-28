// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

//import components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Home = ({
  data,
  setCategory,
  search,
  setSearch,
  isLoading,
  cart,
  setCart,
  removeFromCart,
  addToCart,
  userToken,
  infosUser,
}) => {
  const navigate = useNavigate();

  const productsFilters = [
    {
      title: "Bed",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/lit-vintage-140x190-avec-sommier-a-lattes-1000-11-21-160372_1.jpg",
      alt: "Bed filter",
    },
    {
      title: "Cabinet",
      image:
        "https://cdn.laredoute.com/products/0/0/9/0093e7dd5f1b25cd1fb79dde54a7ca4f.jpg?width=900&dpr=1",
      alt: "Cabinet filter",
    },
    {
      title: "Sofa",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/canape-clic-clac-3-places-en-velours-vert-1000-16-15-198168_1.jpg",
      alt: "Sofa filter",
    },
    {
      title: "Chair",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/chaise-vintage-en-velours-vieux-rose-et-metal-imitation-chene-1000-4-30-210073_1.jpg",
      alt: "Chair filter",
    },
    {
      title: "Table",
      image:
        "https://cdn.laredoute.com/products/1/8/5/185539d0b362ea30b16462b30d8f1e20.jpg?width=700&dpr=1",
      alt: "Table filter",
    },
    {
      title: "Others",
      image:
        "https://cdn.laredoute.com/products/c/4/0/c400ea36ee52792fc307da3f3eaee21c.jpg?width=800&dpr=1",
      alt: "Others filter",
    },
  ];

  return isLoading ? (
    "Loading..."
  ) : (
    <>
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

      <div className="scrollBar flex flex-nowrap mt-5 px-5 h-[145px] overflow-hidden overflow-x-scroll ">
        <div className="flex justify-between sm:w-screen">
          {productsFilters.map((filter) => {
            return (
              <div className="flex flex-col items-center mr-5 last:mr-0 w-28 h-28">
                <img
                  className="rounded-full border-[1px] p-2 object-cover cursor-pointer"
                  src={filter.image}
                  alt={filter.alt}
                  onClick={() => {
                    setCategory(filter.title);
                    navigate("/category");
                  }}
                />
                <span className="text-sm mt-2">{filter.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Banner />
      {/* <Filters /> */}
      <h1 className="mt-20 ml-5 text-3xl font-bold">Vous allez adorer</h1>
      <div className="global-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((post) => {
          return (
            <div className="border-[1px] rounded-lg m-5 p-5 " key={post._id}>
              <img
                className="w-full h-[200px] object-cover rounded-lg mb-5"
                src={post.images[0].secure_url}
                alt={`photo of ${post.title}`}
              />
              <div className="flex justify-between items-end sm:flex-col sm:items-start">
                <h2 className="text-md truncate">{post.title}</h2>
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
        })}
      </div>
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
