
import React,{useContext} from 'react';
import { AppContext } from "./../../context/AppContext";
import BuildSlot from "./BuildSlot";
import BuildList from "./BuildList";
import BuildItem from "./BuildItem";

function BuildContainer(props) {
    const {slots,gemByLevel} = useContext(AppContext);
    return (
        <section className="p-2 mx-auto flex lg:flex-row flex-col items-start justify-between gap-2 w-full mb-20 lg:mb-10">
            <div className="basis-1/4 flex flex-col gap-2 w-full">
                <div className='text-3xl text-white'>Link</div>
                {slots.map((slot,i) => (
                    <BuildSlot key={i} slot={slot}/> 
                ))}
            </div>
            <div className="basis-2/4 flex flex-col gap-2 w-full">
                <div className='text-3xl text-white'>Which gems to get ?</div>
                {gemByLevel.map((gems,level) => (
                    <BuildList key={level} gems={gems} level={level}/>
                ))}
                
            </div>
            <div className="basis-1/4 flex flex-col gap-2 w-full">
                <div className='text-3xl text-white'>Unique item</div>
                <BuildItem/>                
            </div>
        </section>
    );
}
export default BuildContainer;