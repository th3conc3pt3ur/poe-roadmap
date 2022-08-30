import GemDetails from './GemDetails'

function BuildList({gems,level}) {
    return(
        <div className='flex flex-col drop-shadow-md'>
            <div className='bg-[#3e444c] rounded-t p-1 text-white'><b>Level {level}</b></div>
            <div className={`bg-[#32383e] flex flex-col w-full`}>
                {gems.map((gem,i) => (
                    <GemDetails key={i} index={i} gem={gem} />
                ))}
            </div>
        </div>
    );
}
export default BuildList