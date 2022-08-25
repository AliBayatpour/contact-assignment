import styles from "./info.module.scss";

interface Props {
  label: string;
  value: string;
}

const Info: React.FC<Props> = ({ label, value }) => {
  return (
    <div className={styles["infoBox"]}>
      <p className={styles["infoBox__title"]} data-testid="infoLabel">
        {label}
      </p>
      <a
        data-testid="infoValue"
        href={`mailto:${value}`}
        className={styles["infoBox__val"]}
      >
        {value}
      </a>
    </div>
  );
};

export default Info;
