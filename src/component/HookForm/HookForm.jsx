import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const [name, handleName] = useInputState("kalia")
    const [email, handleEmail] = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name, email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleName} type="text" name="name" id="1" />
                <br/>
                <input value={email} onChange={handleEmail} type="email" name="email" id="2" />
                <br/>
                <input type="password" name="password" id="3" />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;