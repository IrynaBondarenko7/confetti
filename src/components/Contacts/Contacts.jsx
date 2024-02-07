import { Formik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";
import ballonsL from "../../images/contacts/balloons-tab-lt.png";
import ballonsR from "../../images/contacts/balloons-tab-rt.png";
import ballonsDeskL from "../../images/contacts/balloons-desk-lt.png";
import ballonsDeskR from "../../images/contacts/balloons-desk-rt.png";
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
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+([' -][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ])?[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/,
      "Nieprawidłowe Іmię"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Nieprawidłowy email")
    .required("Email is required"),
});

export const Contacts = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <StyledContactsSection id="contacts">
      <div>
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
      </div>
      {isTablet && <StyledBallonsLeftImg src={ballonsL} alt="ballons" />}
      {isDesktop && <StyledBallonsLeftImg src={ballonsDeskL} alt="ballons" />}
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
      {isTablet && <StyledBallonsRightImg src={ballonsR} alt="ballons" />}
      {isDesktop && <StyledBallonsRightImg src={ballonsDeskR} alt="ballons" />}
    </StyledContactsSection>
  );
};
