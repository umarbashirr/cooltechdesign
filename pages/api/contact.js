// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();
let nodemailer = require('nodemailer');

export default async function handler(req, res) {
	if (req.method === 'GET') {
		return res.status(401).json({ success: false, msg: 'Access Denied!' });
	}
	if (req.method === 'POST') {
		const transporter = nodemailer.createTransport({
			port: 465,
			service: 'Gmail',
			auth: {
				user: process.env.USER,
				pass: process.env.PASSWORD,
			},
			secure: true,
		});

		const mailData = {
			from: req.body.email,
			to: 'umarbashir601@gmail.com',
			subject: `${req.body.subject} | Message From ${req.body.name}`,
			// text: req.body.message + ' | Sent from: ' + req.body.email,
			html: `<div>Dear Support Team,</div>
    <p>${req.body.message}</p>
    <div>
    <hr />
    <h3>Details:</h3>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phone: ${req.body.phone}</p>
    </div>`,
		};
		try {
			const transport = await transporter.sendMail(mailData);
		} catch (error) {
			console.log(error);
		}
		return res
			.status(200)
			.json({ success: 'true', msg: 'Message sent successfully' });
	}
}
