import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import components
import Header from "../components/Header";

const Product = ({
  cart,
  setCart,
  removeFromCart,
  addToCart,
  search,
  setSearch,
  userToken,
  infosUser,
  data,
}) => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [displayImg, setDisplayImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/read-one-post/${params.id}`
      );
      setPostData(response.data);
      setIsLoading(false);
      setDisplayImg(response.data.images[0].secure_url);
    };
    fetchData();
  }, [params.id]);

  console.log(postData);

  return isLoading ? (
    <p>Loading....</p>
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
      <div className="h-screen">
        <div className="flex justify-between space-x-8 px-8 py-8">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={displayImg}
              alt=""
              className="w-[500px] aspect-square object-cover rounded"
            />
            <div className="flex space-x-4">
              {postData.images.map((img) => {
                return (
                  <div className="w-24">
                    <img
                      src={img.secure_url}
                      alt=""
                      className="w-full h-full aspect-square object-cover rounded cursor-pointer"
                      onClick={() => {
                        setDisplayImg(img.secure_url);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-amber-400 font-semibold">
                {postData.category}
              </span>
              <h1 className="text-3xl font-bold">{postData.title}</h1>
            </div>
            <p className="text-gray-700">{postData.description}</p>
            <h6 className="text-2xl font-semibold">{postData.price} €</h6>
            <div className="flex flex-row items-center gap-12">
              <button className=" bg-amber-400 hover:bg-yellow-600 text-white font-semibold py-3 px-16 rounded-md h-full"
              onClick={()=>{addToCart(postData)}}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className=" h-[1px] bg-gray-200 mx-5"></div>
        <h2 className="font-medium text-4xl text-stone-800 mt-10 mr-10 ml-5">
          You may also like
        </h2>
        <div className="global-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((post) => {
            if (
              post.category === postData.category &&
              post.title != postData.title
            ) {
              return (
                <div>
                  <div
                    className="border-[1px] rounded-lg m-5 p-5 "
                    key={post._id}
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg mb-5"
                      src={post.images[0].secure_url}
                      alt="img"
                    />
                    <div className="flex justify-between items-end sm:flex-col sm:items-start">
                      <h2 className="text-md truncate">{post.title}</h2>
                      <h2 className="text-3xl font-bold">{post.price} €</h2>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-center grow rounded-lg mr-2 mt-5 py-4  bg-orange-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out">
                        <Link to={`/product/${post._id}`}>Product details</Link>
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
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
