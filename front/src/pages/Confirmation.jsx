import coche from "../img/coche.png";

const Confirmation = () => {
  return (
    <div className="w-full h-screen bg-beige flex justify-center items-center">
      <div className="w-2/3 h-3/4 bg-white flex flex-col justify-around items-center">
        <p className="text-balck text-3xl">Your account has been created</p>
        <img src={coche} alt="coche" className="w-40" />
        <p>
          <a className="text-marineblue text-2xl" href="/Login">
            Log in to continue
          </a>
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
