const RegistrationForm = () => {
  return (
    <section>
      <form>
        <div>
          <label>First Name</label>
          <input type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text"/>
        </div>
        <div>
          <label>E-mail Address</label>
          <input type="email"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password"/>
        </div>
      </form>
      <div>
        <button>Register</button>
      </div>
    </section>
  );
};

export default RegistrationForm;
