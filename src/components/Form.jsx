import { Link } from "react-router-dom"


export default function Form() {
    return (
        <>
    <form 
    onSubmit ={ (e) => e.preventDefault}
    method="POST" 
    action="" 
    encType="multipart/form-data">
        <div>
            <label style={{color: "white"}}>Enter your username</label>
            <br />
            <input 
            style={{fontSize: "1rem"}} 
            type="text" 
            name="username" 
            />
            <br />
            <Link to="/pokemon">
            <input 
            type="submit" 
            value="Upload Username" />
            </Link>
        </div>
    </form>

        </>
    )
}