const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.text.value);
        console.log(e.target.password.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" id="" />
                <br/>
                <input type="password" name="password" id="" />
                <br/>
                <input type="phone" name="phone" id="" />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;