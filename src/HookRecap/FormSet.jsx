import useDefaultCode from "./useInputForm";

const FormSet = () => {
  const [name, setName] = useDefaultCode("kalia");
  const [email, setEmail] = useDefaultCode();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={setName} type="text" name="name" id="1" />
        <br />
        <input onChange={setEmail} type="email" name="email" id="2" />
        <br />
        <input type="password" name="password" id="3" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormSet;
