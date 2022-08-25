import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import CheckboxInput from "../../components/checkboxInput/CheckboxInput";
import FormInput from "../../components/formInput/FormInput";
import Info from "../../components/info/Info";
import { COUNTRIES_DB } from "../../data/countries.data";
import { INDUSTRIES, NATIONALS } from "../../data/selectOptions.data";
import { ContactForm } from "../../interfaces/contactForm-interface";
import styles from "./home.module.scss";
import dropDownSvg from "../../assets/dropdown.svg";

const initialFormVal: ContactForm = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  companyName: "",
  industry: "",
  country: "",
  operatingGeography: "global",
  comment: "",
  privacy: false,
  newsLetter: false,
};
const Home: React.FC = () => {
  const [formFields, setFormFields] = useState<ContactForm>(initialFormVal);
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    checkValidity(formFields);
  }, [formFields]);

  const checkValidity = (formFields: ContactForm) => {
    if (
      formFields.firstName &&
      formFields.email &&
      formFields.industry &&
      formFields.country &&
      formFields.privacy
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const {
    firstName,
    lastName,
    email,
    jobTitle,
    companyName,
    comment,
    privacy,
    newsLetter,
  } = formFields;

  const dropdownSVG = <img src={dropDownSvg} alt="arrow down" />;

  // SELECT BOX STYLES
  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#A6D0D8",
      borderRight: "none",
      borderLeft: "none",
      borderTop: "none",
      boxShadow: "none",
      borderRadius: 0,
      borderColor: "rgba(20, 9, 35, 0.6)",
      "&:hover": {
        borderColor: "rgba(20, 9, 35, 0.6)",
      },
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "rgba(20, 9, 35, 0.6)",
      };
    },
    dropdownIndicator: (styles) => ({ ...styles, color: "rgb(20, 9, 35)" }),
    option: (provided, state) => ({
      ...provided,
      color: "rgb(20, 9, 35)",
      "&:hover": {
        backgroundColor: "rgba(118, 143, 156, 0.6)",
      },
      backgroundColor: state.isSelected
        ? "rgba(118, 143, 156, 0.6)"
        : "transparent",
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "1px rgb(20, 9, 35) solid",
      background: "#a6d0d8",
    }),
  };

  // HANDLE FORM CHANGES
  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if ((event.target as HTMLInputElement).type === "checkbox") {
      const { name, checked } = event.target as HTMLInputElement;
      setFormFields({ ...formFields, [name]: checked });
    } else {
      const { name, value } = event.target as HTMLInputElement;
      setFormFields({ ...formFields, [name]: value });
    }
  };

  // HANDLE SELECTBOX CHANGES
  const handleSelectChange = (selectObj: any, name: keyof ContactForm) => {
    setFormFields({ ...formFields, [name]: selectObj });
  };

  return (
    <div className={styles.mainContainer}>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-12 col-md-8">
            <h1 className={styles["formTitle"]}>Contact us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Info label="Media enquiries:" value="press@tuumplatform.com" />
            <Info label="Career questions:" value="careers@tuumplatform.com" />
          </div>
          <div className="col-12 col-md-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("form submitted");
              }}
              data-testid="homeForm"
            >
              <div className={`${styles["inputGroup"]}`}>
                <FormInput
                  name="firstName"
                  type="text"
                  placeholder="First name*"
                  value={firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleChange}
                />
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  name="jobTitle"
                  type="text"
                  placeholder="Job title"
                  onChange={handleChange}
                  value={jobTitle}
                />
              </div>
              <div className={`${styles["inputGroup"]}`}>
                <FormInput
                  name="companyName"
                  type="text"
                  placeholder="Company name*"
                  value={companyName}
                  onChange={handleChange}
                  required
                />

                <Select
                  className={`${styles["inputGroup__input"]}`}
                  options={INDUSTRIES}
                  styles={colourStyles}
                  placeholder="Industry*"
                  components={{
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                    DropdownIndicator: () => dropdownSVG,
                  }}
                  onChange={(e) => handleSelectChange(e, "industry")}
                />

                <Select
                  className={`${styles["inputGroup__input"]}`}
                  placeholder="Country*"
                  options={COUNTRIES_DB}
                  styles={colourStyles}
                  components={{
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                    DropdownIndicator: () => dropdownSVG,
                  }}
                  onChange={(e) => handleSelectChange(e, "country")}
                />

                <Select
                  className={`${styles["inputGroup__input"]}`}
                  placeholder="Operating geography"
                  options={NATIONALS}
                  styles={colourStyles}
                  components={{
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                    DropdownIndicator: () => dropdownSVG,
                  }}
                  onChange={(e) => handleSelectChange(e, "operatingGeography")}
                />
              </div>
              <div className={styles["textBox"]}>
                <p className={styles["textBox__title"]}>
                  What would you like to talk about?
                </p>
                <textarea
                  className={styles["textBox__input"]}
                  name="comment"
                  rows={5}
                  cols={50}
                  onChange={handleChange}
                  value={comment}
                ></textarea>
              </div>
              <CheckboxInput
                label="By submitting this form I accept"
                link="https://tuumplatform.com/privacy-policy/"
                linkText="privacy policy and cookie policy."
                name="privacy"
                checked={privacy}
                onChange={handleChange}
                required
              />
              <CheckboxInput
                name="newsLetter"
                label="I would like to receive your newsletter."
                onChange={handleChange}
                checked={newsLetter}
              />

              <button
                className={`${styles["submitBut"]} ${
                  !formValid ? styles["submitBut--disabled"] : ""
                }`}
                data-testid="submitBut"
                disabled={!formValid}
                onClick={() => console.log("hi")}
              >
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
