import styles from "./PhoneRenders.module.css";

const PhoneRenders = () => {
  return (
    <section>
      <ul>
        <li>
          <div>
            <img
              className={styles.thumbnail}
              src={
                "https://m-cdn.phonearena.com/images/phones/83956-350/Google-Pixel-7a.webp"
              }
            />
            <p>Google Pixel 7a</p>
          </div>
        </li>
        <li>
          <div>
            <img
              className={styles.thumbnail}
              src={
                "https://m-cdn.phonearena.com/images/phones/83629-350/Apple-iPhone-14-Pro.webp"
              }
            />
            <p>Apple iPhone 14 Pro</p>
          </div>
        </li>
        <li>
          <div>
            <img
              className={styles.thumbnail}
              src={
                "https://m-cdn.phonearena.com/images/phones/83799-350/OnePlus-11.webp"
              }
            />
            <p>OnePlus 11</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PhoneRenders;
