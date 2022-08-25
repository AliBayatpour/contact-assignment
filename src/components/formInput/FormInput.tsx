import React from "react";
import styles from "./formInput.module.scss";

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<Props> = ({ ...props }) => {
  return (
    <input
      className={`${styles["input"]} ${styles["input--text"]}`}
      {...props}
    />
  );
};

export default FormInput;
