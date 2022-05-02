const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["msg"].value.trim())
    const subject = (inputs.elements["subject"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !subject.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "00c7ccb8e4557e",
        Password: "e082082ab4276a",
        To: "dshubham1295@gmail.com",
        From: email,
        Subject: subject,
        Body: msg + "<br>" + name + "<br>"
    }).then(msg => alert("The email successfully sent"))
})