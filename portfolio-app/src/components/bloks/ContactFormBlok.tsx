import { storyblokEditable } from "@storyblok/react";
import React, { useEffect, useRef, useState } from "react";
import { ContactFormStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/ContactFormBlok.css";

interface ContactFormProps {
  blok: ContactFormStoryblok;
}

type SubjectOptions = ContactFormStoryblok["subject"];

const ContactFormBlok: React.FC<ContactFormProps> = ({ blok }) => {
  const nameInput = blok.nameInput[0];
  const emailAddressInput = blok.emailAddressInput[0];
  const telInput = blok.telInput[0];
  const subject: SubjectOptions = blok.subject;
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      setIsValid(form.checkValidity());
    };

    form.addEventListener("input", validateForm);

    return () => {
      if (form) {
        form.removeEventListener("input", validateForm);
      }
    };
  }, []);

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
              name="message"
              className="form-control contact-form-input"
              placeholder={nameInput.placeholder.concat(
                nameInput.isRequired ? " *" : ""
              )}
              maxLength={parseInt(nameInput.maxLength)}
              required={nameInput.isRequired}
            />
            <input
              type="email"
              id="email-input"
              name="message"
              className="form-control contact-form-input"
              placeholder={emailAddressInput.placeholder.concat(
                emailAddressInput.isRequired ? " *" : ""
              )}
              maxLength={parseInt(emailAddressInput.maxLength)}
              required={emailAddressInput.isRequired}
            />
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
