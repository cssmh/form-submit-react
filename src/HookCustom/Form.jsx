import useCustomForm from "./inputState";

const Form = () => {

    const [name, handleName] = useCustomForm()
    const [email, handleEmail] = useCustomForm()
    const [password, handlePassword] = useCustomForm()

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" id="1" />
        <br />
        <input onChange={handleEmail} type="email" name="email" id="2" />
        <br />
        <input onChange={handlePassword} type="password" name="password" id="3" />
        <br />
        <button>Submit</button>
      </form>{" "}
    </div>
  );
};

export default Form;
