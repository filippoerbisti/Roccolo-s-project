import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "filippo.erbisti@gmail.com", // Your email where you'll receive emails
      from: "filippo.erbisti@gmail.com", // your website email address here
    //   subject: `${req.body.subject}`,
      subject: "ciao",
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
