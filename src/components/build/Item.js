import React,{useState,useContext} from 'react';
import { AppContext } from "./../../context/AppContext";

function Item({item,showHardcore}) {
    const itemName = item.name
    const itemBase = item.base;
    const data = item.price
    const dataHc = item.priceHc
    
    const [isActive,setIsActive] = useState(true);
    const {prices} = useContext(AppContext);
    const actualLeague = prices.actual_league;
    
    return (
        <div className='flex flex-col bg-[#32383e] rounded-t border-b border-black p-2'>
            <div className='flex flex-row text-white items-center justify-between'>
                <div className='flex flex-row items-center gap-2'>
                <input type="checkbox" onChange={() => setIsActive(!isActive)} />   
                <div className={`flex flex-row items-center gap-2 ${!isActive ? 'hidden':''}`}>
                
                    {data !== 0 ? 
                        <>
                        <img src={item.icon}  style={{width:'50px',maxHeight: '75px'}} alt="Item"/>
                        <span className='text-white text-xs font-semibold mr-2 px-1.5 py-0.5 rounded bg-gray-700'>{item.levelReq}</span>
                        </>
                    :null}
                </div>
                <a rel="noreferrer" href={`https://www.poewiki.net/wiki/${itemName}`} className='text-white no-underline hover:underline' target='_blank'>{itemName}</a>
                </div>
                <div className={`flex flex-col ${!isActive ? 'hidden':''}`}>
                    {data !== 0 && !showHardcore ? 
                        <div className='flex flex-col text-sm items-center'>
                            <div>Standard</div>
                            <span className='softcore'>{data.chaosValue}
                                <img src={'/img/chaos_orb.png'} className='float-right' alt="Chaos Orb" style={{height: '24px'}}/>
                            </span>
                            <span className='softcore'>{data.exaltedValue}
                                <img src={'/img/exalted_orb.png'} className='float-right' alt="Exalted Orb" style={{height: '24px'}} />
                            </span>
                        </div>
                    :null}
                    {dataHc !== 0 && showHardcore ? 
                        <div className='flex flex-col items-center text-sm'>
                            <div>Hardcore</div>
                            <span className='hardcore'>{dataHc.chaosValue} <img className='float-right' src={'/img/chaos_orb.png'} alt="Chaos Orb" style={{height: '24px'}}/></span>
                            <span className='hardcore'>{dataHc.exaltedValue} <img className='float-right' src={'/img/exalted_orb.png'} alt="Exalted Orb" style={{height: '24px'}} /></span>
                        </div>
                    :null}
                </div>
            </div>
            <div className={`flex flex-row gap-2 justify-between ${!isActive ? 'hidden':''} `}>
                <div className='flex flex-row'>
                    <form method='POST' action='https://poe.trade/search' target='_blank' style={{float:'left',marginRight: '5px'}}>
                        <input type='hidden' name='name' value={itemName} />
                        <input type='hidden' name='league' value={actualLeague} />
                        <button type='submit' className='btnCustom  text-white  py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline'>Poe.trade</button>
                    </form>
                    <form method='POST' className="tradeOffical" data-name={itemName} data-league={actualLeague} data-base={itemBase} action={`https://www.pathofexile.com/api/trade/search/${actualLeague}`} target='_blank'>
                        <button type='submit' className='btnCustom  text-white py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline'>Trade Official</button>
                    </form>
                </div>
                <div>
                    {data !== 0 && !showHardcore ?
                    <button className='btnCustom text-white py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline' style={{float: 'right'}} data-toggle='tooltip' data-placement='top' title='Current Price Variation'>
                        <span className={`softcore ${data.totalChange > 0 ? 'text-red-400':'text-green-400'}`}>{data.totalChange} %</span>
                    </button>
                    :null}
                    { dataHc !== 0  && showHardcore ?
                    <button className='btnCustom text-white py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline' style={{float: 'right'}} data-toggle='tooltip' data-placement='top' title='Current Price Variation'>
                        <span className={`hardcore ${dataHc.totalChange > 0 ? 'text-red-400':'text-green-400'}`}>{dataHc.totalChange} %</span>
                    </button>
                    :null}
                </div>
            </div>
        </div>
    )
}
export default Item;