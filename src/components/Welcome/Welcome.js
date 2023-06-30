import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <p>WANNA TAKE A LOOK AT OUR GREAT OFFERS ?</p>
      <button className={styles.nav_register}>REGISTER HERE 👇🏽</button>
    </div>
  );
};

export default Welcome;
