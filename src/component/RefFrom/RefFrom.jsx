import { useRef } from "react";

const RefFrom = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="1" />
                <br/>
                <input ref={emailRef} type="email" defaultValue={"kalia@jalia.com"} name="email" id="2" />
                <br/>
                <input ref={passwordRef} type="password" name="password" id="3" />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RefFrom;