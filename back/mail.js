import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key: "f1c4edff3ac0e8e126db0a4bba817b90-50f43e91-a6eb16da",
    domain: "sandbox49ce0b93dc624024a350ba8484f8b414.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (
  email,
  inquiry,
  firstName,
  lastName,
  companyName,
  jobTitle,
  location,
  phone,
  text,
  cb
) => {
  const mailOptions = {
    from: email,
    to: "contact@sgs.br.com",

    subject: inquiry,
    text: `first name : ${firstName} \n last name : ${lastName}\n company name: ${companyName}\n job title: ${jobTitle} \n location: ${location}\n phone: ${phone} \n message: ${text}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

export default sendMail;
