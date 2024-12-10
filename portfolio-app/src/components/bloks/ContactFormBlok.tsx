import { storyblokEditable } from "@storyblok/react";
import React, { useEffect, useRef, useState } from "react";
import { ContactFormStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/ContactFormBlok.css";
import "react-phone-number-input/style.css";
import PhoneInput, {
  type Value as E164Number,
  Country,
  formatPhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";

interface ContactFormProps {
  blok: ContactFormStoryblok;
}

type SubjectOptions = ContactFormStoryblok["subject"];

const telInputCountries: Country[] = [
  "AT", // Austria
  "BE", // Belgium
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czech Republic
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IE", // Ireland
  "IT", // Italy
  "LV", // Latvia
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "NL", // Netherlands
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE", // Sweden
  "GB", // United Kingdom
  "CH", // Switzerland
  "US", // United States
  "CA", // Canada
];

const checkTelNumberValidity = (
  phoneNumber: E164Number | undefined,
  isRequired: boolean
): boolean => {
  if (!isRequired && (!phoneNumber || phoneNumber?.length === 0)) {
    return true;
  }
  if (isRequired && (!phoneNumber || phoneNumber?.length === 0)) {
    return false;
  }
  if (!phoneNumber) {
    return false;
  }
  return isValidPhoneNumber(phoneNumber);
};

const ContactFormBlok: React.FC<ContactFormProps> = ({ blok }) => {
  const nameInput = blok.nameInput[0];
  const emailAddressInput = blok.emailAddressInput[0];
  const telInput = blok.telInput[0];
  const messageArea = blok.messageInput[0];
  const subject: SubjectOptions = blok.subject;
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );

  const formatPlaceholder = (
    placeholderText: string,
    isRequired: boolean | undefined
  ) => {
    if (!isRequired) {
      return placeholderText;
    }
    if (placeholderText.endsWith("*")) {
      return placeholderText;
    }
    return placeholderText.concat(" *");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents standard reload og the site
    console.log("Form submitted");
  };

  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }

    const validateForm = () => {
      const isTelNumberValid: boolean = checkTelNumberValidity(
        phoneNumber,
        telInput.isRequired ? telInput.isRequired : false
      );
      console.log("validateTelNumber: ", isTelNumberValid);
      console.log("validateRest: ", formRef.current?.checkValidity());
      setIsValid(
        formRef.current
          ? formRef.current?.checkValidity() && isTelNumberValid
          : true
      );
    };
    validateForm();

    form.addEventListener("input", validateForm);
    return () => {
      if (form) {
        form.removeEventListener("input", validateForm);
      }
    };
  }, [phoneNumber, telInput.isRequired, formRef.current]);

  return (
    <div className={"card-default-variant"} {...storyblokEditable(blok)}>
      <form
        onSubmit={handleSubmit}
        className="d-flex w-100 flex-column"
        ref={formRef}
      >
        <div className="card-default-body">
          {blok && blok.header && (
            <h5 className="contact-form-header">
              <SafeHtmlRenderer htmlContent={blok.header} />
            </h5>
          )}
          <div className="d-flex flex-column gap-3">
            <input
              type="text"
              id="contact-input"
              name="nameInput"
              className="form-control contact-form-input"
              placeholder={formatPlaceholder(
                nameInput.placeholder,
                nameInput.isRequired
              )}
              maxLength={parseInt(nameInput.maxLength)}
              required={nameInput.isRequired}
            />
            <input
              type="email"
              id="emailInput"
              name="email"
              className="form-control contact-form-input"
              placeholder={formatPlaceholder(
                emailAddressInput.placeholder,
                emailAddressInput.isRequired
              )}
              maxLength={parseInt(emailAddressInput.maxLength)}
              required={emailAddressInput.isRequired}
            />
            <PhoneInput
              placeholder={formatPlaceholder(
                telInput.placeholder,
                telInput.isRequired
              )}
              className="form-control react-phone-number-input"
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                const isTelNumberValid: boolean = checkTelNumberValidity(
                  value,
                  telInput.isRequired ? telInput.isRequired : true
                );
                setIsValid(
                  formRef.current
                    ? formRef.current?.checkValidity() && isTelNumberValid
                    : false
                );
              }}
              defaultCountry="DE"
              countries={telInputCountries}
            />
            <textarea
              id="-input"
              name="messageArea"
              className="form-control contact-form-input"
              placeholder={formatPlaceholder(
                messageArea.placeholder,
                messageArea.isRequired
              )}
              maxLength={parseInt(messageArea.maxLength)}
              required={messageArea.isRequired}
              aria-multiline={true}
              rows={5}
            />
            <span className="required-notice">{blok.requiredNotice}</span>
          </div>
        </div>
        <div className="card-default-footer p-3">
          <button
            type="submit"
            className={"btn app-btn-primary w-100 w-lg-0"}
            disabled={!isValid}
            title={blok.submitButtonTitle}
          >
            {blok.submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormBlok;
