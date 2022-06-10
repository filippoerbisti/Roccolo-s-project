import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        const body = JSON.parse(req.body);
        const message = `
            Full Name: ${body.fullname}\r\n
            Email: ${body.email}\r\n
            Message: ${body.message}
        `;

        await sendgrid.send({
            to: 'filippo.erbisti@gmail.com',
            from: 'filippo.erbisti@gmail.com',
            subject: 'New Message!',
            text: message,
            html: message.replace(/\r\n/g, '<br>'),
        }).then(() => {
            res.status(200).json({ status: 'Ok' });
          });
    } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
    }
    
    return res.status(200).json({ error: "" });
}

export default sendEmail;
