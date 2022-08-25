import styles from "./checkboxInput.module.scss";

interface Props {
  label: string;
  link?: string;
  linkText?: string;
  required?: boolean;
  name: string;
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
const CheckboxInput: React.FC<Props> = ({
  link,
  linkText,
  label,
  ...otherProps
}) => {
  return (
    <div className={styles["checkBox"]}>
      <label data-testid="checkLabel">
        <input
          {...otherProps}
          className={styles["checkBox__input"]}
          type="checkbox"
        />
        {label}
        {link && linkText ? (
          <a
            className={styles["checkBox__link"]}
            target="_blank"
            rel="noreferrer"
            href={link}
            data-testid="checkLink"
          >
            {" " + linkText}
          </a>
        ) : null}
      </label>
    </div>
  );
};

export default CheckboxInput;
