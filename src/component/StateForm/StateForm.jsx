import { useState } from "react";

const StateForm = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 8){
            setError("Please input at least more than 8 length of your password")
        }
        else{
            setError("")
            console.log("email:", email,"password:", password);
        }
    }

    const emailHandler = e => {
        setEmail(e.target.value);
    }
    const passwordHandler = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="1" />
                <br/>
                <input onChange={emailHandler} type="email" name="email" id="2" />
                <br/>
                <input onChange={passwordHandler} type="password" name="password" id="3" required />
                <br/>
                <button>Submit</button>
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateForm;