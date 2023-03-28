import { useState } from "react";
import axios from "axios";

export default function Modifyinfos({ infosModified, infosUser }) {
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [modified, setModified] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(infosUser);
    try {
      const modif = await axios.put(
        "http://localhost:8080/modification/" + infosUser.userId,
        {
          name: newName,
          email: newEmail,
          lastName: newLastName,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("auth")}`,
          },
        }
      );
      console.log(modif);
      setModified("infos updated");
      infosModified();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col rounded border-gray-100 shadow-sm bg-white py-4 px-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-cyan-500">change my infos</h1>
          <p className="font-bold">create a new password</p>
        </div>
        <div>
          <p>change name</p>
          <input
            className="border border-black w-48"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <p>change last name</p>
          <input
            className="border border-black w-48"
            type="text"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        <div>
          <p>change email</p>
          <input
            className="border border-black w-48"
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button
          className="text-white border border-cyan bg-cyan-400 font-semibold py-2 px-6 w-48 drop shadow-sm"
          onClick={handleSubmit}
        >
          update
        </button>
        <p>{modified}</p>
      </div>
    </>
  );
}
