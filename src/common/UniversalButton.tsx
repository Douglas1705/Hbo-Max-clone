interface ButtonProps {
    title: string;
}

function UniversalButton({title} : ButtonProps){
    return(
        <button className="
        decoration-blue-700 
        text-white 
        p-2.5 
        bg-blue-700
        rounded-lg
        "
        >{title}</button>
    )
    
}

export default UniversalButton