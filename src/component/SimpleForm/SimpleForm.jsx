const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.password.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="1" />
                <br/>
                <input type="email" name="email" id="2" />
                <br/>
                <input type="password" name="password" id="3" />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;