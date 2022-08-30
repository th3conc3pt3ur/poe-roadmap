import React,{useState,useContext} from 'react';
import { AppContext } from "./../context/AppContext";
import BuildContainer from './build/BuildContainer';
import BuildHeader from './build/BuildHeader';
import Loader from './Loader';

function Form() {
    const {getPastebin,getPobCode,build,slots,headerVisible,isLoading,localBuild} = useContext(AppContext);
    const [pobCode, setPobCode] = useState("");
    const [pobPastebin, setPobPastebin] = useState("");

    const submit = () => {
        if(pobCode !== "") {
            getPobCode(pobCode)
        } else {
            getPastebin(pobPastebin);
        }
    }

    return (
        <>
        <main className={`${headerVisible ? '':'hidden'} main p-2 mx-auto flex flex-col items-center justify-center gap-2`}>
            <div className='flex flex-row items-center justify-center gap-2 w-full'>
                <div className="w-full">
                    <label className="sm:h-[40px] lg:h-auto block text-gray-300 text-sm font-bold mb-2" htmlFor="pobCode">PoB Code</label>
                    <textarea value={pobCode} onChange={(e) => setPobCode(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pobCode" type="text" placeholder="Path of Building Code..."></textarea>
                </div>
                <div className="w-full">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="pobPastebin">PoB pastebin Link</label>
                    <textarea value={pobPastebin} onChange={(e) =>  {setPobCode("");setPobPastebin(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pobPastebin" type="text" placeholder="Path Of Building pastebin Link..."></textarea>
                </div>
            </div>
            {localBuild.length !== 0 ? 
                <div>
                    <select className='bg-[#32383e] text-white rounded-sm' onChange={(e) => e.target.value !== "" ? getPobCode(e.target.value): null}>
                    <option value="">{"< Select previous build >"}</option>
                    {localBuild.map((build) => (
                        <option key={build.hash} value={build.pobString}>{build.buildClass} / {build.ascendClass} lvl {build.level} - {build.mainSkill}</option>
                    ))}
                    </select>
                </div>
            :null}
            <div className='button flex flex-col mb-1'>
                {isLoading ? 
                <button className="flex flex-row gap-2 items-center btnCustom  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><Loader/></button>
                :
                <button onClick={() => submit()} className="flex flex-row gap-2 items-center btnCustom  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">SUBMIT</button>
                }
            </div>
        </main>
        
        {build != null && slots != null ? <><BuildHeader/><BuildContainer /></>:null}
        </>
    );
}
export default Form;