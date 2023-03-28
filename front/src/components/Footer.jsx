//import assets
import Facebook from "../img/facebook-logo.png";
import Instagram from "../img/instagram-logo.jpg";
import AExpress from "../img/American-Expresso-logo-PNG.png";
import CarteBancaire from "../img/Logo_CB.jpg";
import Mastercard from "../img/Mastercard_logo_PNG19.png";
import Paypal from "../img/PayPal.svg.png";
import Visa from "../img/Visa._logo.svg.png";
import Logo from "../img/logo-hema.svg";
const Footer = () =>{
//const year = new Date().getFullYear;
    return (<footer>
                <div className="wrap border text-center...">
                    <div className ="main-row  flex flex-row ... place-content-evenly">
                        <div><h1 className="font-bold mt-6 ...">Follow Us on</h1>
                            <div className="flex flex-row mt-6 ... flex space-x-4 ...">
                                <img src={Facebook} alt="logo_Facebook" className="w-6 h-6"></img>
                                <img src={Instagram} alt="logo_instagram" className="w-6 h-6"></img>
                            </div>
                        </div>
                        <div className="pb-15...">
                            <h1 className="font-bold mt-6 ...">You can pay easily</h1>
                            <div className="flex flex-row mt-6 ... flex space-x-4 ...">
                                <img src={AExpress} alt="logo_American-Express" className="w-10 h-10"></img>
                                <img src={CarteBancaire} alt="logo_CB" className="w-10 h-10"></img>
                                <img src={Mastercard} alt="logo_mastercard" className="w-12 h-6"></img>
                                <img src={Paypal} alt="logo_paypal" className="w-12 h-6"></img>
                                <img src={Visa} alt="logo_visa" className="w-9 h-6"></img>
                            </div>
                        </div>
                        <div className="right-colum mt-6 ...">
                            <div className="newsletter flex-col">
                                <h1 className="font-bold ">SignUp to our Vinma newsletter</h1>
                                <p className="whitespace-pre-line mt-6">Please subscribe to our newsletter to stay <br />ahead of our promotional products <br /> and novelties.</p>
                                <div className="">
                                    <input type="text" name="signup" id="newsletter" placeholder="your email" size="30" maxlength="20" className="border-2 border-zinc-700 p-2 mr-2 "></input>
                                    <button type="button" onclick="" className="bg-neutral-400 text-black p-2 ... rounded-md ... mb-8 mt-6" >subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-10 ... mt-6 ... flex flex-row ... space-x-60 ... text-center... mb-8">
                    <img src={Logo} alt="" className="w-25 h-25 " />
                    <div className="empty"></div>
                    <div className="flex-row space-x-4 ...">
                        <text className="font-bold">confidentialité</text>
                        <text className="font-bold">conditions générales</text>
                        <text className="font-bold">copyright</text>
                        <text className="font-bold">responsabilité</text>
                        <text className="font-bold">cookies</text>
                    </div>
                </div>
            </footer>);
};
export default Footer;