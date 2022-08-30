import { OverlayTrigger,Tooltip } from 'react-bootstrap';

function Reward({reward}) {
    let iconReward = "";
    // 😡 sad static object of vendor
    const vendor = {1: "Nessa",2: "Yeena",3: "Clarissa",4:"Petarus and Vanja"}
    if (reward.type === "reward") {
        iconReward = 
        <OverlayTrigger placement="top" overlay={<Tooltip>Quest reward</Tooltip>}>
            <div className="font-bold w-3 text-center" style={{color:'#cece0b'}}>!</div>
        </OverlayTrigger>
    } else {
        iconReward = 
        <OverlayTrigger placement="top" overlay={<Tooltip>Vendor</Tooltip>}>
            <div className="font-bold w-3 text-center" style={{color:'#cece0b'}}>$</div>
        </OverlayTrigger>
    }
    return(
        <div className='reward flex flex-row gap-2 w-full items-center'>
            <span className=''>{iconReward}</span>
            <span className={`text-white text-xs`}>
                Act {reward.quest.act}
            </span>
            <span className='text-white text-xs'>
                {reward.quest.name} from {reward.type === "reward" ? reward.quest.npc : vendor[reward.quest.act] }
            </span>
        </div>        
    )
}
export default Reward;