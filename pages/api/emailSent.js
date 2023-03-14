import sendEmail from "@/helpers/emailSend";

/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
	const {
		method,
		body,
	} = req;

	switch (method) {
		case 'POST':
			try {
                
				await sendEmail(body);
				return res.status(200).json({ status: true });
			} catch (error) {
				return res.status(404).json({
					success: false,
				});
			}
		default:
			res.setHeaders('Allow', ['POST']);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};
