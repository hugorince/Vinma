import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//import components
import Header from "../components/Header";

const Publication = ({
  cart,
  setCart,
  removeFromCart,
  addToCart,
  search,
  setSearch,
  userToken,
  infosUser,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState([]);
  const [dimensions, setDimensions] = useState("");
  const [brand, setBrand] = useState("");

  const navigate = useNavigate();

  //upload images
  const handleImage = (event) => {
    let fileList = picture;
    fileList.push(event.target.files[0]);
    setPicture(fileList);
    console.log(picture);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    for (let i in picture) {
      console.log(picture[i]);
      formData.append("images", picture[i]);
    }
    formData.append("brand", brand);
    formData.append("dimensions", dimensions);

    try {
      const response = await axios.post(
        "http://localhost:8080/publication",
        formData,
        {
          headers: {
            Authorization: userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return userToken ? (
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
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md-w-full mx-auto">
          <div className="text-center font-medium text-xl">
            {" "}
            Sell your items here
          </div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Title
              </label>
              <input
                type="text"
                placeholder="Ex: Black chair"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Category{" "}
              </label>
              <select
                name=""
                id=""
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option value="">Select an option</option>
                <option value="Bed">Bed</option>
                <option value="Sofa">Sofa</option>
                <option value="Cabinet">Cabinet</option>
                <option value="Chair">Chir</option>
                <option value="Table">Table</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Description{" "}
              </label>
              <input
                type="text"
                placeholder="Ex: In a very good condition."
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Dimensions
              </label>
              <input
                type="text"
                placeholder="Ex: 160x160x50 cm."
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={dimensions}
                onChange={(event) => {
                  setDimensions(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Brand
              </label>
              <input
                type="text"
                placeholder="Ex: Ikea."
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Price{" "}
              </label>
              <input
                type="text"
                placeholder="Ex: 25, in €."
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                {" "}
                Picture{" "}
              </label>
              <input
                type="file"
                placeholder="Add pictures"
                // className= "w-full p-2 border border-gray-300 rounded mt-1"
                className=" w-full p-2 bg-gray-300 border-dashed border-4 h-full"
                multiple
                onChange={handleImage}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    navigate("/login")
  );
};

export default Publication;
