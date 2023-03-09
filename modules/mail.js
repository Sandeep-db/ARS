import nodemailer from 'nodemailer'

export default async function sendMail({ receiverMail, mailSubject, mailBody }, callback) {
    if (typeof receiverMail == 'string') {
        receiverMail = [receiverMail]
        mailBody = [mailBody]
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sandyblaze954@gmail.com",
            pass: "esheholdasmtlwwl"
        }
    })

    let mailOptions = {
        from: "CRS",
        subject: mailSubject || 'mail from Car Rental System',
        // to: receiverMails,
        // html: `${mailBodies}`
    }

    let reject = []
    for (const [i, to] of receiverMail.entries()) {
        mailOptions.to = to
        mailOptions.html = `${mailBody[i]}`
        await transporter.sendMail(mailOptions, (err, data) => {
            if (err || data.rejected.length) {
                reject.push(to)
            }
        })
    }
    callback(reject)
}
