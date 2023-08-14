const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
    pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  

  console.log("Message sent: %s", info.messageId);
}

  const SendMail = async (email,)=>{
  try {
    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
          pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
        }
      });

      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
        attachments
      });
      

  } catch (error) {
    console.log("🚀 ~ file: SendMail.js:32 ~ SendMail ~ error:", error)
    
  }
  }