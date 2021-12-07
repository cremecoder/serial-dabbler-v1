import nodemailer from "nodemailer"

export default async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD
    }
  })

  try {
    const formEmail = await transporter.sendMail({
      from: email,
      to: "sean.cremecoder@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `
        <p>You have a contact form new contact form submission</p>
        <br />
        <p><strong>Name: </strong>${name}</p>
        <br />
        <p><strong>Email: </strong>${email}</p>
        <br />
        <p><strong>Message: </strong>${message}</p>
      `
    })

    console.log("Message Sent", email.messageId)
  } catch (err) {
    console.error(err)
  }

  res.status(200).json(req.body)
}
