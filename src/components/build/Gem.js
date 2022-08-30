
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AppContext } from "./../../context/AppContext";
import {useContext} from 'react'

function Gem({gem,index}) {
    const {hydrateGem} = useContext(AppContext);
    // load data from api into gem object
    gem = hydrateGem(gem);

    return (
        <div className='flex flex-row items-center'>
            {gem._iconPath === undefined ? 
            <img src="/img/unknow.png" className='p-1' width='47px' alt={"Gem Icon"} height='47px' />
            :
            <img src={gem._iconPath} width='47px' alt={"Gem Icon"} height='47px' />
            }
            <div>
                <OverlayTrigger placement="top" overlay={<Tooltip>{gem._nameSpec}</Tooltip>}>
                    <a rel="noreferrer" className='text-white no-underline hover:underline text-sm' href={`https://www.poewiki.net/wiki/${gem._nameSpec}`} target='_blank'>
                        level {gem._level}/{gem._quality}
                    </a>
                </OverlayTrigger>
            </div>
        </div>
    )
}
export default Gem;