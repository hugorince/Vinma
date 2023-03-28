import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ContactDetails from "../components/ContactDetails";
import MyPublications from "../components/MyPublications";
import ChangePassword from "../components/ChangePassword";
import Modifyinfos from "../components/ModifyInfos";
import ModifyAddress from "../components/ModifyAddress";

const Account = ({
  cart,
  setCart,
  removeFromCart,
  addToCart,
  userToken,
  handleToken,
  infosUser,
  handleInfosUser,
  search,
  setSearch,
  data
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [slideName, setSlideName] = useState("");
  const [activeSlide, setActiveSlide] = useState("");
  const [avatar, setAvatar] = useState("");

  const [userId, setUserId] = useState("");

  const getInfos = async () => {
    // const userId = localStorage.getItem("id");
    const userInfos = await axios.get(
      `http://localhost:8080/userinfos/${params.id}`,
      {
        headers: {
          Authorization: userToken,
        },
      }
    );
    setName(userInfos.data.name);
    setLastName(userInfos.data.lastName);
    setEmail(userInfos.data.email);
    setNickName(userInfos.data.nickName);
    setAdress(userInfos.data.address);
    setAvatar(userInfos.data.profilePicture.secure_url);
    setUserId(userInfos.data._id);
  };
  getInfos();

  const handleSingOut = () => {
    // localStorage.clear()
    handleToken();
    handleInfosUser();
    navigate("/");
  };

  const slides = [
    {
      title: "details",
      content: (
        <ContactDetails
          name={name}
          lastName={lastName}
          address={address}
          email={email}
          modifyInfos={() => {
            setSlideName("modifyInfos");
          }}
          modifyAddress={() => {
            setSlideName("modifyAddress");
          }}
        />
      ),
    },
    {
      title: "publications",
      content: <MyPublications infosUser={infosUser} data={data}/>,
    },
    {
      title: "password",
      content: <ChangePassword infosUser={infosUser} />,
    },
    {
      title: "modifyInfos",
      content: (
        <Modifyinfos
          infosModified={() => setSlideName("details")}
          infosUser={infosUser}
        />
      ),
    },
    {
      title: "modifyAddress",
      content: (
        <ModifyAddress
          infosModified={() => setSlideName("details")}
          infosUser={infosUser}
        />
      ),
    },
  ];

  useEffect(() => {
    if (slideName === "") {
      setSlideName("details");
    } else {
      slides.map((slide) => {
        if (slide.title === slideName) {
          setActiveSlide(slide.content);
        }
      });
    }
  }, [name, slideName, lastName, email, address]);

  return userToken ? (
    <>
      <div className="h-screen bg-beige">
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
        <div className="px-4 py-4">
          <div className="flex space-x-4 px-4">
            <div className="flex flex-col w-64 items-start space-y-2 bg-white py-4 px-4">
              <h1 className="font-bold text-2xl">VINMA and me</h1>
              <p>Welcome, {name}</p>
              <img
                className="rounded border-gray-100 shadow-sm"
                src={avatar}
                alt="[Avatar]"
              ></img>
              <button
                className="hover:text-cyan-400"
                onClick={() => {
                  setSlideName("details");
                }}
              >
                my contact details
              </button>
              <button
                className="hover:text-cyan-400"
                onClick={() => {
                  setSlideName("password");
                }}
              >
                change password
              </button>
              <button className="hover:text-cyan-400">my favorite items</button>
              <button
                className="hover:text-cyan-400"
                onClick={() => {
                  setSlideName("publications");
                }}
              >
                my publications
              </button>
              <button className="hover:text-cyan-400" onClick={handleSingOut}>
                sign out
              </button>
            </div>

            <div className="space-y-4 w-full">
              <div>{activeSlide}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    navigate("/login")
  );
};

export default Account;
