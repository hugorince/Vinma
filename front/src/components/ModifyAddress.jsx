import { useState } from "react";
import axios from "axios";

export default function ModifyAddress({ infosModified, infosUser }) {
  const [newAdress, setNewAddress] = useState("");
  const [modified, setModified] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const modif = await axios.put(
        "http://localhost:8080/modification/" + infosUser.userId,
        {
          address: newAdress,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("auth")}`,
          },
        }
      );
      console.log(modif);
      setModified("address updated");
      infosModified();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col rounded border-gray-100 shadow-sm bg-white py-4 px-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-cyan-500">
            change my address
          </h1>
          <p className="font-bold">update your address</p>
        </div>
        <div>
          <p>change address</p>
          <input
            className="border border-black w-48"
            type="text"
            value={newAdress}
            onChange={(e) => setNewAddress(e.target.value)}
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
