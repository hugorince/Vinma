import { useState } from "react";
import axios from "axios";

export default function ChangePassword({ infosUser }) {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [modified, setModified] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const modif = await axios.put(
        "http://localhost:8080/modification/" + infosUser.userId,
        {
          password: newPassword,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("auth")}`,
          },
        }
      );
      console.log(modif);
      setModified("password modified");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col rounded border-gray-100 shadow-sm bg-white py-4 px-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-cyan-500">
            change my password
          </h1>
          <p className="font-bold">create a new password</p>
        </div>
        <div>
          <p>current password</p>
          <input
            className="border border-black w-48"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <p>new password</p>
          <input
            className="border border-black w-48"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          className="text-white border border-cyan bg-cyan-400 font-semibold py-2 px-6 w-48 drop shadow-sm"
          onClick={handleSubmit}
        >
          change password
        </button>
        <p>{modified}</p>
      </div>
    </>
  );
}
