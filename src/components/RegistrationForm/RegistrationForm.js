import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <section>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name"/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name"/>
        </div>
        <div>
          <label>E-mail Address</label>
          <input type="email" placeholder="Enter your e-mail"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Create your password"/>
        </div>
        <div>
          <button className={styles.btn_register}>REGISTER</button>
          <button className={styles.btn_back}>BACK TO HOME</button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
