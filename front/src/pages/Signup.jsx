import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (password === confirmPassword) {
        console.log(profilePicture);
        let formData = new FormData();

        formData.append("profilePicture", profilePicture);
        formData.append("name", name);
        formData.append("lastName", lastname);
        formData.append("nickName", nickname);
        formData.append("address", address);
        formData.append("email", email);
        formData.append("password", password);

        const response = await axios.post(
          "http://localhost:8080/signup",
          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // navigate("/confirmation");
        handleToken(response.token);
        navigate("/");
      } else {
        console.log(
          "Your password confirmation is different from your password"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-beige">
        <div className="flex justify-center">
          <form className="bg-white inline-flex py-6 flex-col w-96 items-center mt-6 pb-6 rounded-sm mb-6">
            <div className="">
              <div className="font-bold text-4xl mb-3">sign up</div>
              <div className="text-marineblue font-bold text-xl">
                It's my first journey with VINMA
              </div>
              <div className="my-1 mb-4">Sign up in order to post</div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>name *</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>last name *</label>
                <input
                  type="text"
                  placeholder="enter your last name"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={lastname}
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>nickname *</label>
                <input
                  type="text"
                  placeholder="enter your nickname"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={nickname}
                  onChange={(event) => {
                    setNickname(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>address *</label>
                <input
                  type="text"
                  placeholder="enter your address"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>email *</label>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>password *</label>
                <input
                  type="password"
                  placeholder="enter your password"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm p-1.5"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label>confirm password *</label>
                <input
                  type="password"
                  placeholder="confirm your password"
                  className="border-[1.5px] py-1.5 px-3 rounded-sm"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label>avatar</label>
                <input
                  type="file"
                  className="mt-1 mb-2"
                  id="file"
                  name="file"
                  onChange={(event) => {
                    setProfilePicture(event.target.files[0]);
                    console.log(profilePicture);
                  }}
                />
              </div>
            </div>
            <button
              className="border-b-2 border-darkgold transition duration-200 hover:bg-darkgold text-white mt-10 px-5 py-2 bg-gold rounded-sm"
              onClick={handleSubmit}
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
