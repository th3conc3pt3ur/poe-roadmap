import Gem from './Gem';

function BuildSlot({slot}) {
    let gems = slot.Gem
    if(gems === undefined) {
        gems = [];
    } else {
        // we need this in the case there is only one gem
        if(!Array.isArray(slot.Gem)) {
            gems = [slot.Gem];
        }
    }
    const nbGems = gems.length;
    
    let displayClass = "grid-cols-3";
    if(nbGems === 6 || nbGems === 3) {
        displayClass = "grid-cols-3";
    }
    if(nbGems === 4) {
        displayClass = "grid-cols-2";
    }
    
    return (
        <div className='flex flex-col drop-shadow-md'>
            <div className='bg-[#3e444c] rounded-t p-1 text-white'><b>{slot._slot !== undefined ? slot._slot: ""} - {slot._label !== undefined ? slot._label: ""}</b></div>
            <div className={`bg-[#32383e] justify-center grid gap-2 ${nbGems <= 3 ? 'grid-rows-1' : 'grid-rows-2'} ${displayClass}`}>
                {gems.map((gem,i) => (
                    <Gem key={i} index={i} gem={gem} />
                ))}
            </div>
        </div>
    );
}
export default BuildSlot;