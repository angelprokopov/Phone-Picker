import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <section>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <button className={styles.btn_register}>Register</button>
          <button className={styles.btn_back}>Back To Home</button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
