import {useContext,useEffect,useState} from 'react';
import { AppContext } from "./../../context/AppContext";

function BuildHeader() {
    const {currentAscend,currentMainSkill,currentNotes,currentLevel,currentMainSkillImg,currentSkillTree,headerVisible,setHeaderVisible} = useContext(AppContext);
    const [displayNote,setDisplayNote] = useState(false);
    const [localCurrentNote,setLocalCurrentNote] = useState(null);

    /**
     * When the user clicks on a link, open the link in a new tab.
     * @param e - the event object
     */
    const treeView = (e) => {
        let url = e.target.value;
        window.open(url, "_blank")
    }
    
    useEffect(() => {
        setLocalCurrentNote(null);
        // use for displaying note with color
        const regex = /(\^x[a-zA-Z0-9]{6})/g;
        let temp = currentNotes.replaceAll(regex, function(match) {
            return `<span style='color : #${match.replace("^x","")}'>`;
        }).replaceAll(/\^7/g, "</span>").replaceAll(/\n|\r\n|\n\r|\r/g,"<br>");
        setLocalCurrentNote(temp);
    },[currentNotes]);
    
    return(
        <div className='flex flex-col bg-[#00000080] m-2'>
            <div className='flex flex-row justify-between items-center'>
                {currentMainSkillImg === null ? <img src="/img/unknow.png" alt={currentMainSkill} style={{height:'64px'}} />:<img src={currentMainSkillImg} alt={currentMainSkill} style={{height:'64px'}} />}
                
                <div className='text-2xl sm:text-3xl text-[#c7b36b] customTitle text-center'>
                    {currentAscend} {currentMainSkill} {currentLevel}
                </div>                
                <img src={`/img/ascend/${currentAscend}.png`} alt="Ascension" style={{height:'64px',borderRadius:'10px'}} />
            </div>
            <div className='h-[1px] border-b border-[#545454] m-2 px-2'></div>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col sm:flex-row gap-2 p-2 items-center'>
                <img src="/img/skillTree.jpg" alt="Skill Tree" />
                <div className='text-white'>Skill Tree : </div>
                <select className='bg-[#32383e] text-white rounded-sm' onChange={(e) => treeView(e)}>
                {currentSkillTree.map((skillTree,key) => (
                    <option key={key} value={skillTree.url}>
                        {skillTree.title === undefined ? "Main": skillTree.title}
                        (Version : {skillTree.treeVersion.replace('_','.')})
                    </option>
                ))}
                </select>
                </div>
                <div className='flex flex-row gap-2 p-2 items-center'>
                    <label htmlFor="header-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" onChange={() => setHeaderVisible(!headerVisible)} checked={headerVisible} id="header-toggle" className="sr-only peer" />
                        <div className="w-11 h-6 border bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show header</span>
                    </label>
                </div>
            </div>
            <div className='flex flex-row text-white gap-2 p-2'>
                <div className={`flex flex-row gap-2 items-center ${displayNote ? 'self-start':'self-center'}`}>
                    <div>Notes</div>
                    <div><button className='btnCustom  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => setDisplayNote(!displayNote)}>{displayNote ? 'Hide': 'Show'}</button></div>
                </div>
                <div className={`flex-wrap text-white ${displayNote ? '':'hidden'}`} dangerouslySetInnerHTML={{__html: localCurrentNote}}></div>
            </div>
        </div>
    )
}
export default BuildHeader;