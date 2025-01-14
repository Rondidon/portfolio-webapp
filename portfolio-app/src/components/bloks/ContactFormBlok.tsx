import { storyblokEditable } from "@storyblok/react";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput, {
  type Value as E164Number,
  Country,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ContactFormStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/ContactFormBlok.css";
import { ContactFormData, requestSendMail } from "../../api/requestSendEmail";

interface ContactFormProps {
  blok: ContactFormStoryblok;
}

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
  const subjectInput = blok.subjectInput[0];
  const messageArea = blok.messageInput[0];
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(
    undefined
  );
  const [textAreaLength, setTextAreaLength] = useState<number | undefined>(0);
  const [subjectLength, setSubjectLength] = useState<number | undefined>(0);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null
  );
  const [sendToRecipient, setSendToRecipient] = useState(true);

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

  const buildContactFormData = (): ContactFormData => {
    return {
      name: (
        formRef.current?.elements.namedItem("nameInput") as HTMLInputElement
      ).value,
      email: (formRef.current?.elements.namedItem("email") as HTMLInputElement)
        .value,
      phoneNumber: phoneNumber || "",
      subject: (
        formRef.current?.elements.namedItem("subjectInput") as HTMLInputElement
      ).value,
      message: (
        formRef.current?.elements.namedItem(
          "messageArea"
        ) as HTMLTextAreaElement
      ).value,
      sendToRecipient: sendToRecipient,
    };
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset(); // Setzt alle Eingabewerte zurück
    }
    setPhoneNumber(undefined);
    setTextAreaLength(0);
    setSubjectLength(0);
    setIsValid(false);
    setFormStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents standard reload of the site
    if (!isValid) {
      return;
    }
    const formData: ContactFormData = buildContactFormData();
    requestSendMail(formData).then((result: string) => {
      if (result.includes("error")) {
        setFormStatus("error");
      } else {
        resetForm();
        setFormStatus("success");
      }
    });
  };

  useEffect(() => {
    const form = formRef.current;
    const textArea = textAreaRef.current;
    const subjectInput = subjectInputRef.current;

    if (!form) return;

    const validateForm = () => {
      const isTelNumberValid: boolean = checkTelNumberValidity(
        phoneNumber,
        telInput.isRequired ? telInput.isRequired : false
      );
      setIsValid(form?.checkValidity() && isTelNumberValid);
      if (formStatus === "error" || formStatus === "success") {
        setFormStatus(null);
      }
    };

    const updateTextAreaLength = () => {
      setTextAreaLength(textArea?.textLength);
    };

    const updateSubjectLength = () => {
      setSubjectLength(subjectInput?.value.length);
    };

    textArea?.addEventListener("input", updateTextAreaLength);
    subjectInput?.addEventListener("input", updateSubjectLength);
    form.addEventListener("input", validateForm);

    return () => {
      textArea?.removeEventListener("input", updateTextAreaLength);
      subjectInput?.removeEventListener("input", updateSubjectLength);
      form.removeEventListener("input", validateForm);
    };
  }, [phoneNumber, telInput.isRequired, formStatus]);

  return (
    <div className="d-flex flex-column">
      <div className={"contact-form"} {...storyblokEditable(blok)}>
        <form
          onSubmit={handleSubmit}
          className="d-flex w-100 flex-column"
          ref={formRef}
        >
          <div className="contact-form-body">
            {blok && blok.header && (
              <h5 className="contact-form-header">
                <SafeHtmlRenderer htmlContent={blok.header} />
              </h5>
            )}
            <div className="d-flex flex-column gap-3">
              <input
                type="text"
                id="nameInput"
                name="nameInput"
                className="form-control contact-form-input"
                placeholder={formatPlaceholder(
                  nameInput.placeholder,
                  nameInput.isRequired
                )}
                maxLength={parseInt(nameInput.maxLength)}
                required={nameInput.isRequired}
                title={nameInput.title}
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
                title={emailAddressInput.title}
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
                title={telInput.title}
              />
              <div className="d-flex flex-column">
                <input
                  ref={subjectInputRef}
                  type="text"
                  id="subjectInput"
                  name="subjectInput"
                  className="form-control contact-form-input"
                  placeholder={formatPlaceholder(
                    subjectInput.placeholder,
                    subjectInput.isRequired
                  )}
                  maxLength={parseInt(subjectInput.maxLength)}
                  required={subjectInput.isRequired}
                  title={subjectInput.title}
                />
                <p className="text-length-notice">
                  {subjectLength + "/" + subjectInput.maxLength}
                </p>
              </div>
              <div className="d-flex flex-column">
                <textarea
                  ref={textAreaRef}
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
                  title={messageArea.title}
                />
                <p className="text-length-notice">
                  {textAreaLength + "/" + messageArea.maxLength}
                </p>
              </div>
              {blok.showCcOption && (
                <div className="d-flex gap-1 form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="sendToRecipientSwitch"
                    name="sendToRecipientSwitch"
                    checked={sendToRecipient}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setSendToRecipient(e.target.checked);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="sendToRecipientSwitch"
                  >
                    {blok.ccLabel}
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="card-default-footer p-3">
            <button
              type="submit"
              className={"btn btn-primary w-100 w-lg-0"}
              disabled={!isValid}
              title={blok.submitButtonTitle}
            >
              {blok.submitButtonText}
            </button>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: formStatus !== null ? "space-between" : "flex-end",
          width: "100%",
          paddingTop: "0.5rem",
        }}
      >
        {formStatus === "success" && (
          <span className="form-status success">
            <SafeHtmlRenderer htmlContent={blok.successMessage} />
          </span>
        )}
        {formStatus === "error" && (
          <span className="form-status error">
            <SafeHtmlRenderer htmlContent={blok.errorMessage} />
          </span>
        )}
        <span className="required-notice">{blok.requiredNotice}</span>
      </div>
    </div>
  );
};

export default ContactFormBlok;
