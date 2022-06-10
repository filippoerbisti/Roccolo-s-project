import { SMTPClient } from 'emailjs';
 
export default function handler(req, res) {
  const { fullname, email, subject, message } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
    port: 465,
  });
 
  try {
    const send = client.sendAsync(
      {
        from: email,
        to: process.env.EMAIL,
        subject: `${subject}`,
        text: `${fullname} wrote: ${message}`,
      }
    )
  }
  catch(e) {
    res.status(400).end(JSON.stringify({ message:'errore diocane' }))
    return;
  }
 
  res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}
