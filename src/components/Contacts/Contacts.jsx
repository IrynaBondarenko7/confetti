import { Formik } from "formik";
import * as Yup from "yup";
import ballonsL from "../../images/contacts/balloons-tab-lt.png";
import ballonsR from "../../images/contacts/balloons-tab-rt.png";
import {
  StyledContactsSection,
  StyledContactsText,
  StyledContavtsTitle,
  StyledContacs,
  StyledContactsEmail,
  StyledFormLabel,
  Form,
  Field,
  StyledFormTextarea,
  StyledSubmitButton,
  ErrorMessage,
  StyledBallonsLeftImg,
  StyledBallonsRightImg,
} from "./Contacts.styled";
import { ReactComponent as Call } from "../../images/call.svg";
import { ReactComponent as SMS } from "../../images/sms.svg";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Nieprawidłowe Іmię"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Nieprawidłowy email")
    .required("Email is required"),
});

export const Contacts = () => {
  return (
    <StyledContactsSection id="contacts">
      <StyledContavtsTitle>Kontakty</StyledContavtsTitle>
      <StyledContactsText>
        Confetti - Studio <br />
        Dekoracij Balonami
        <br /> Warszawa 
      </StyledContactsText>
      <StyledContacs href="tel:+48793351407">
        <Call />
        +48 793 351 407 
      </StyledContacs>
      <StyledContactsEmail href="malito:confettibalony@gmail.com">
        <SMS />
        confettibalony@gmail.com
      </StyledContactsEmail>
      <StyledBallonsLeftImg src={ballonsL} alt="ballons" />
      <Formik
        initialValues={{
          name: "",
          email: "",
          text: "",
        }}
        validationSchema={ContactsSchema}
        onSubmit={async (values) => {}}
        validateOnChange={true}
      >
        {({ errors, touched }) => {
          const isNameError = Boolean(errors.name && touched.name);
          const isEmailError = Boolean(errors.email && touched.email);

          return (
            <Form>
              <StyledFormLabel>
                <span>Imię*</span>
                <Field
                  id="name"
                  name="name"
                  placeholder="Imię"
                  required
                  error={isNameError ? "true" : undefined}
                />
                <ErrorMessage name="name" component="p" />
              </StyledFormLabel>
              <StyledFormLabel>
                <span>E-mail*</span>
                <Field
                  id="email"
                  name="email"
                  placeholder="mail@gmail.com"
                  required
                  error={isEmailError ? "true" : undefined}
                />
                <ErrorMessage name="email" component="p" />
              </StyledFormLabel>
              <StyledFormLabel>
                <span>Wiadomość</span>
                <StyledFormTextarea
                  id="text"
                  name="text"
                  placeholder="Twoja wiadomość..."
                  type="email"
                  component="textarea"
                />
              </StyledFormLabel>
              <StyledSubmitButton
                type="submit"
                disabled={isNameError || isEmailError}
              >
                Wyślij
              </StyledSubmitButton>
            </Form>
          );
        }}
      </Formik>
      <StyledBallonsRightImg src={ballonsR} alt="ballons" />
    </StyledContactsSection>
  );
};
