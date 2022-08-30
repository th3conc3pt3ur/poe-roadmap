import Item from "./Item";
import {useContext,useState} from 'react';
import { AppContext } from "./../../context/AppContext";

function BuildItem(props) {
    const {items} = useContext(AppContext);
    const [showHardcore,setShowHardcore] = useState(false);
    
    return(
        <div className='flex flex-col drop-shadow-md'>
            <div className='bg-[#3e444c] rounded-t p-1 text-white'>
                <div className="flex flex-col justify-center">
                    <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" onChange={() => setShowHardcore(!showHardcore)} value="" id="default-toggle" className="sr-only peer" />
                        <div className="w-11 h-6 border bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">HardCore ?</span>
                    </label>
                    <div className='flex flex-col'>
                        <div className={`text-center ${showHardcore ? 'hidden': ''}`}>Standard Price</div>
                        <div className={`flex justify-evenly flex-row ${showHardcore ? 'hidden': ''} gap-2`}>
                            <div className="flex flex-row gap-1 justify-between">{new Intl.NumberFormat().format(items.totalChaos)} <img src={'/img/chaos_orb.png'} className='' alt="Chaos Orb" style={{height: '24px'}}/></div>
                            <div className="flex flex-row gap-1 justify-between">{new Intl.NumberFormat().format(items.totalExalted)} <img src={'/img/exalted_orb.png'} className='' alt="Exalted Orb" style={{height: '24px'}} /></div>
                        </div>
                        <div className={`text-center ${showHardcore ? '': 'hidden'}`}>Hardcore Price</div>
                        <div className={`flex justify-evenly flex-row ${showHardcore ? '': 'hidden'} gap-1`}>
                            <div className="flex flex-row gap-1 justify-between">{new Intl.NumberFormat().format(items.totalChaosHc)} <img src={'/img/chaos_orb.png'} className='' alt="Chaos Orb" style={{height: '24px'}}/></div>
                            <div className="flex flex-row gap-1 justify-between">{new Intl.NumberFormat().format(items.totalExaltedHc)} <img src={'/img/exalted_orb.png'} className='' alt="Exalted Orb" style={{height: '24px'}} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-[#32383e] flex flex-col w-full`}>
                {items.items.sort((a,b) => a.levelReq - b.levelReq).map((item,i) => (
                    <Item showHardcore={showHardcore} key={i} item={item}/>
                ))}
            </div>
        </div>
    );
}
export default BuildItem;