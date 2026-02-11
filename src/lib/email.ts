import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER, // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
    });

    return info;
};
