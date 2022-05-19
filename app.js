const dotenv=require('dotenv').config();
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const api_key=process.env.API_KEY;
const Domain=process.env.DOMAIN;
const client = mailgun.client({username: 'api', key:api_key});
const data = {
	from: 'Srishti<srishtiprasad500@gmail.com>',
	to: ['srishtiprasad2412@gmail.com','srishticode07@gmail.com','srishticode1211@gmail.com'],
	
	subject: 'Hello,this is the subject of all the email sent to this!',
	text: 'Testing some Mailgun awesomness!,Email with this text will be sent to all email in TO section from FROM email'
};

client.messages.create(Domain, data)
.then((res) => {
console.log(res);
})
.catch((err) => {
console.error(err);
});
