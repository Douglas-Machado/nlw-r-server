import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a51d51dda31201",
    pass: "880bf9414f0c3f"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){
    
  await transport.sendMail({
    from: 'Equipe FeedGet <oi@feedget.com>',
    to: 'Douglas Machado <douglas_claudino13@gmail.com>',
    subject: subject,
    html: body
  })

  }
}