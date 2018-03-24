"use strict"

const dotenv = require("dotenv")
const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId
const sgMail = require("@sendgrid/mail")

module.exports = {
  send: _send,
  sendRegistrationConfirmation: sendRegistrationConfirmation,
  sendBirthdayEmail: sendBirthdayEmail
}
function _send(toAddress, toName, subject, body) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: toAddress,
    from: process.env.FROM_ADDRESS,
    subject: subject,
    html: body,
    bcc: process.env.BCC_ADDRESS
  }

  const safeDoc = {
    toAddress: toAddress,
    fromAddress: process.env.FROM_ADDRESS,
    subject: subject,
    body: body
  }

  sgMail.send(msg)
    .then(response => conn.db().collection("emails").insertOne(safeDoc))
    .then(response => response.insertedId.toString())
    .catch(xhr => {
      console.warn(xhr)
      return Promise.reject(xhr)
    })

}
function sendRegistrationConfirmation(toAddress, userId, toName) {
  let subject = "Thank you for Registering to Birthday Tracker"
  let body = `<p>Dear ${toName},</p>
        <p>Thank you for registering to Birthday Tracker.</p>
        
            <a href="${process.env.ORIGIN}/confirm-email/${userId}" style="background-color:#0000ff;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:16px;line-height:44px;text-align:center;text-decoration:none;width:150px;">Confirm Email</a>`

  return _send(toAddress, userId, subject, body)
}

function sendBirthdayEmail(toAddress, userId, toName) {
  let subject = "Happy Birthday"
  let body = `<p> Hey ${toName},</p>
        <p>Today is your birthday. The one day you are allowed to celebrate yourself. Hope you have an amazing day today, full of tons of laughter and fun. Happy Birthday 🎂 🎉 🎊 🎂 🎉 🎊 🎂 🎉 🎊 </p>

        <p>Vonetta</p>`

  return _send(toAddress, userId, subject, body)
}