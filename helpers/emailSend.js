const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(
  "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"
);

const sendEmail = async (obj) => {
  
  let emailObj = {
    to: "basatanwertech@gmail.com",
    from: "hamza.a@reactivespace.com",
    subject: "dsfgsdf",
    html: `<!doctype html>
	<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <title>Confirmation</title>
	</head>
	<body>
	  <div style="max-width: 90%;margin: auto;">
	    <p>You have a new contact request</p>
	      <h3>Contact Details</h3>
	      <ul>
	        <li>Name:${obj.name}</li>
	        <li>Email: ${obj.number}</li>
	        <li>Department: ${obj.email}</li>
	        <li>Subject: ${obj.venue}</li>
	        <li>Message: ${obj.message}</li>
	      </ul>
	  </div>
	</body>
	</html>`,
  };
  
  return await sgmail.send(emailObj);
};

export default sendEmail;
