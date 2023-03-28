import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken, setInfosUser, handleInfosUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      handleToken(response.data.token);
      handleInfosUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen bg-beige">
        <div className="flex justify-center">
          <form className="inline-flex flex-col mt-24 mb-6 w-[600px] py-12 items-center bg-white rounded-sm">
            <div className="w-[300px]">
              <div className="flex flex-col font-bold self-start text-4xl mb-3">
                log in
              </div>
              <div className="mb-1 text-kaki text-xl font-bold">
                Welcome to VINMA
              </div>
              <div className="mb-5">Do you have an account ? Log in below.</div>
              <div className="flex flex-col">
                <label className="mb-2">email *</label>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="border-[1px] mb-4 py-1.5 px-3 rounded-sm"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">password *</label>
                <input
                  type="password"
                  placeholder="enter your password"
                  className="border-[1px] mb-4 py-1.5 px-3 rounded-sm"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <button
                className="hover:text-red-600"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Do you haven't an account ? Sign up !
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className="border-b-2 border-darkgold transition duration-200 hover:bg-darkgold text-white mt-10 px-5 py-2 bg-gold rounded-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
