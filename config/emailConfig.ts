const emailConfig = {
  host: "smtp.example.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your_email@example.com",
    pass: "your_email_password",
  },
};

export default emailConfig;
