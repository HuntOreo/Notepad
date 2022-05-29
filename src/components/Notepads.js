import { Link } from "react-router-dom"

const Notepads = ({ notepads }) => {

    return(
        notepads.map(notepad => {
            return (
                <Link key={String(notepad._id)} to={`/notepads/notepad/${notepad._id}`}>
                    <div>
                        <h3 >{notepad.title}</h3>
                    </div>
                </Link>
            )
        })
    )  
    
}


export default Notepads