

const Notepads = ({ notepads }) => {

    return(
        notepads.map(notepad => {
            return (
            <div key={String(notepad._id)}>
                <h3 >{notepad.title}</h3>
            </div>)
        })
    )  
    
}


export default Notepads