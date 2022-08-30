
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Reward from './Reward';
import { AppContext } from "./../../context/AppContext";
import {useContext,useState} from 'react';

function GemDetails({gem}) {
    const {currentClass} = useContext(AppContext);
    const [isActive,setIsActive] = useState(true);
    const nbReward = gem._rewards.filter((rew) => rew.classe.name === currentClass.toLowerCase()).length
    const classWhoHaveAccess = gem._rewards.map((rew) => rew.classe.name).filter((value, index, classArray) => classArray.indexOf(value) === index).join(", ");
    
    return (
        <div className='flex flex-col items-center border-b gap-1 border-black w-full'>
            <div className='flex lg:flex-row flex-col lg:items-center gap-2 w-full justify-between'>
                <div className='basis-5/5 lg:basis-2/5 flex flex-row items-center gap-2'>
                    <div><input type="checkbox" onChange={() => setIsActive(!isActive)} /></div>
                    <div className={`basis-4 hover:cursor-pointer ${isActive ? '':'hidden'}`}>
                        { nbReward > 0 ? 
                        <OverlayTrigger placement="top" overlay={<Tooltip>Gem available to your class</Tooltip>}>
                            <img style={{width: '16px'}} src={'/img/yes.png'} alt="Yes"/>
                        </OverlayTrigger>
                        :
                        <OverlayTrigger placement="top" overlay={<Tooltip>Gem not available to your class</Tooltip>}>
                            <img style={{width: '16px'}} src={'/img/no.png'} alt="No"/>
                        </OverlayTrigger>
                        }
                    </div>
                    <div className={`flex flex-row gap-1 items-center ${isActive ? '':'hidden'}`}>
                        { gem._dexReq !== 0 && gem._dexReq !== undefined ? 
                            <OverlayTrigger placement="top" overlay={<Tooltip>Required {gem._dexReq} Dexterity</Tooltip>}>
                            <span className="text-white hover:cursor-pointer text-xs font-semibold  px-1.5 py-0.5 rounded bg-green-700">{gem._dexReq}</span> 
                            </OverlayTrigger>
                        : ""}
                        { gem._intReq !== 0 && gem._intReq !== undefined ? 
                            <OverlayTrigger placement="top" overlay={<Tooltip>Required {gem._intReq} Intelligence</Tooltip>}>
                            <span className="text-white hover:cursor-pointer text-xs font-semibold  px-1.5 py-0.5 rounded bg-blue-700">{gem._intReq}</span>
                            </OverlayTrigger>
                        : ""}
                        { gem._strReq !== 0 && gem._strReq !== undefined ? 
                            <OverlayTrigger placement="top" overlay={<Tooltip>Required {gem._strReq} Strenght</Tooltip>}>
                            <span className="text-white hover:cursor-pointer text-xs font-semibold  px-1.5 py-0.5 rounded bg-red-700">{gem._strReq}</span>
                            </OverlayTrigger>
                        : ""}
                    </div>
                    <img className={`${isActive ? '':'hidden'}`} src={gem._iconPath} alt="Icon" width='47px' height='47px' />
                    <a rel="noreferrer" href={`https://www.poewiki.net/wiki/${gem._nameSpec}`} target='_blank' className={`text-white no-underline hover:underline text-sm`}>
                        {gem._nameSpec}
                    </a>
                </div>
                <div className={`basis-5/5 lg:basis-2/5 flex flex-col gap-1 justify-between pr-2 px-2 lg:p-0 ${isActive ? '':'hidden'}`}>
                    {gem._rewards.filter((rew) => rew.classe.name === currentClass.toLowerCase()).slice(0, 2).map((myReward, index) => (
                        <Reward reward={myReward} key={index} />
                    ))}
                    { gem._rewards.filter((rew) => rew.classe.name === currentClass.toLowerCase()).length === 0 && gem._rewards.length !== 0 ?
                    <div className="flex flex-col items-start">
                        <div className='reward flex flex-row gap-2 w-full'>
                            <span className=''><OverlayTrigger placement="top" overlay={<Tooltip>Vendor</Tooltip>}>
                                    <div className="font-bold w-3 text-center" style={{color:'#cece0b'}}>$</div>
                                    </OverlayTrigger>
                            </span>
                            <span className={`text-white text-xs`}>
                                Act 3
                            </span>
                            <span className='text-white text-xs'>
                                A Fixture of Fate from Siosa
                            </span>
                        </div>      
                        <div className='reward flex flex-row gap-2 w-full items-center'>
                            <span className=''><OverlayTrigger placement="top" overlay={<Tooltip>Vendor</Tooltip>}>
                                    <div className="font-bold w-3 text-center" style={{color:'#cece0b'}}>$</div>
                                    </OverlayTrigger>
                            </span>
                            <span className={`text-white text-xs`}>
                                Act 6
                            </span>
                            <span className='text-white text-xs'>
                                Fallen from Grace from Lilly
                            </span>
                        </div>     
                        <span className='badge badge-pill badge-primary'>Available to : {classWhoHaveAccess}</span> 
                    </div>
                    :null}
                    {gem._rewards.length === 0 ? <div style={{color:'#aaa'}}>Lootable</div>:""}
                </div>
                <div className='min-w-[20px] flex self-start text-right pr-1 text-white text-sm'>{gem.number !== undefined ? 'x '+gem.number:''}</div>
            </div>
            
        </div>        
    )
}
export default GemDetails;