const sgmail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');
sgmail.setApiKey("add key");

const sendEmail = async(obj) =>{
		
		let emailObj = {
			to: "hamzaaslam7690@gmail.com",
			from: "hamza.a@reactivespace.com",
			subject: subject,
			html: '',
		};
		return await sgmail.send(emailObj);
    }

export default sendEmail;




