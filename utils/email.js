const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
    // 1) create a transponder
    const transponder = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS
        }
    })

    // 2) specify the options
    const mailOptions = {
        from: 'Minilik Zeru <hello@minilik.io>',
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    // 3) Actually send the email
    await transponder.sendMail(mailOptions)
}

module.exports = sendEmail