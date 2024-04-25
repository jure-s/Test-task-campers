import styles from "./buttons.module.css";

export const Buttons = ({ text, action }) => {
  return (
    <button onClick={action} className={styles.buttons}>
      {text}
    </button>
  );
};
