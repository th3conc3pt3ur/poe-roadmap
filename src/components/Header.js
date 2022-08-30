import { AppContext } from "./../context/AppContext";
import {useContext} from 'react'
function Header() {
    const {headerVisible} = useContext(AppContext);
    return (
        <header className={`header p-2 w-full justify-between flex flex-row items-center ${headerVisible ? '':'hidden'}`}>
            <div className="flex sm:flex-row flex-col justify-between w-full items-center">
                <div className="flex flex-row items-center">
                    <div><img src="logo.png" className="" alt="logo" /></div>
                    <div className='text-3xl'>Poe-Roadmap, Still sane exile ?</div>
                </div>
                <div className="flex flex-row sm:flex-col justify-between items-center gap-2">
                    <div className="donation-container">
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="LLDXKH76468JL" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_FR/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                    <div className="patreon-container" style={{height:'40px'}}>
                        <a rel="noreferrer" className="btn btn-danger btn-sm" style={{backgroundColor:'rgb(232, 91, 70)'}} href="https://www.patreon.com/theconcepteur" target="_blank">
                            <div className="patreon-div" style={{height: '1rem',width: '1rem',float:'left',marginTop: '5px',marginRight: '5px'}}>
                                <svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg">
                                <g color="white">
                                    <circle fill="currentColor" cx="362.589996" cy="204.589996" data-fill="1" id="Oval" r="204.589996"></circle>
                                    <rect fill="currentColor" data-fill="2" height="545.799988" id="Rectangle" width="100" x="0" y="0"></rect>
                                </g>
                                </svg>
                            </div>
                            Become a patreon
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;