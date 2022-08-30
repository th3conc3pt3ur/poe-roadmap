function SkillTree({skillTree}) {
    return (
        <div className='flex flex-row'>
            <a href={skillTree.url} target="_blank" rel="noreferrer" className='flex flex-row items-center gap-2 btnCustom no-underline hover:underline text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                <img src="/img/skillTree.jpg" alt="Skill Tree" />
                <div>{skillTree.title === undefined ? "Main": skillTree.title}</div>
                <div>(Version : {skillTree.treeVersion.replace('_','.')})</div>
                {/* node */}
            </a>
        </div>
    )
}
export default SkillTree;