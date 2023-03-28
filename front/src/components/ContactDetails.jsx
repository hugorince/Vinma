import { useState } from "react";

export default function ContactDetails({
  name,
  lastName,
  address,
  email,
  modifyInfos,
  modifyAddress,
}) {
  const [newAddress, setNewAddress] = useState("");
  console.log("name au niveau de contact details =", name);

  return (
    <>
      <div className="space-x-4 space-y-4 shadow-sm bg-white py-4 px-4">
        <div className="font-extrabold text-4xl rounded py-3 px-4">
          my contact details
        </div>
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl">my infos</h3>
            <div>
              <p>
                {name}, {lastName}
              </p>
              <p>{email}</p>
            </div>
            <div className="pt-4">
              <button
                className="text-white border boder-blue-800 bg-cyan-400 font-semibold py-2 px-2 w-24 drop shadow-sm"
                onClick={modifyInfos}
              >
                modify
              </button>
            </div>
          </div>

          <div className="flex flex-col divide-y space-y-2 pt-4">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl">Billing address</h3>
              <button
                className="text-gray border boder-black bg-zinc-200 font-semibold py-1 px-2 w-24 drop shadow-sm"
                onClick={modifyAddress}
              >
                modify
              </button>
            </div>
            <div className="pt-4">
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
