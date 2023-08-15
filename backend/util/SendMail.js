const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});



const SendMail = async (email,bcc,Subject,text = '',html='',attachments=[]) => {
  try {

    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: [...email], // list of receivers
      bcc: [...bcc], // list of receivers
      subject: Subject, // Subject line
      text: text, // plain text body
      html: html, // html body
      attachments:[
      ...attachments
      ],
    });
    console.log("Message sent: %s", info.messageId);
    return info.messageId
  } catch (error) {
    console.log("🚀 ~ file: SendMail.js:32 ~ SendMail ~ error:", error);
    return {
      err:error,
      message:error.message
    }
  }
};

module.exports = SendMail;
