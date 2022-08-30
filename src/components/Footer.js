import { AppContext } from "./../context/AppContext";
import {useContext} from 'react';
import Loader from "./Loader";
function Footer() {
    const {prices} = useContext(AppContext);
    return(
        <footer className="footer p-2 fixed-bottom bg-[#32383e] border-t border-black">
            <div className="flex sm:flex-row flex-col justify-between text-slate-300 text-sm items-center">
                <div className="flex flex-row gap-1 justify-between sm:w-auto w-full">
                    <a className='flex flex-row items-center gap-2 bg-[#5865F2] no-underline hover:underline text-white rounded p-1' rel="noreferrer" data-toggle='tooltip' data-placement='top' title="Feel free to join !" href="https://discord.gg/xjwKMdb" target="_blank">
                    <img src={"/img/Discord-Logo-White.svg"} style={{height: '16px'}} alt="Discord"/> Discord
                    </a>
                    <a rel="noreferrer" className='flex flex-row items-center gap-2 no-underline hover:underline text-white rounded p-1 bg-slate-900' href="https://www.reddit.com/r/PoeRoadMap/" target="_blank" data-toggle='tooltip' data-placement='top' title="Need help ? Have question / suggestion don't hesitate to tell me here">
                        <img src={"/img/reddit-logo.svg"} style={{height:'20px'}} alt="Reddit"/>/r/PoeRoadMap
                    </a>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div>Last price update : </div>

                    <div>{prices !== null ? prices.lastUpdate : <Loader/>}</div>
                </div>
                <div className="">
                    Made with 💗 by TheConcepteur
                </div>
            </div>
        </footer>
    )
}
export default Footer