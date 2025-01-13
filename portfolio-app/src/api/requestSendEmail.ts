// same as in backend
export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  sendToRecipient: boolean;
}

export const requestSendMail = async (
  formData: ContactFormData
): Promise<string> => {
  try {
    const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN;
    const endpoint = `${backendDomain}/api/send-email`;
    console.log(endpoint);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return "success";
    } else {
      const error = data.error || "error-unknown";
      return error;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return "error-unknown";
  }
};
