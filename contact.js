// contact section
let c_name = document.querySelector("#c_name");
let c_email = document.querySelector("#c_email");
let c_subject = document.querySelector("#c_subject");
let c_message = document.querySelector("#c_message");
let c_send_btn = document.querySelector("#send_btn");
let name_r = document.querySelector("#name_r");
let email_r = document.querySelector("#email_r");
let subject_r = document.querySelector("#subject_r");
let message_r = document.querySelector("#message_r");

c_send_btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (c_name.value == "") {
        name_r.style.display = "block";
        c_name.style.border = "1px solid red";
    }
    else if (c_email.value == "") {
        email_r.style.display = "block";
        c_email.style.border = "1px solid red";
    }
    else if (c_subject.value == "") {
        subject_r.style.display = "block";
        c_subject.style.border = "1px solid red";
    }
    else if (c_message.value == "") {
        message_r.style.display = "block";
        c_message.style.border = "1px solid red";
    }
    else {
        let params = {
            from_name: c_name.value,
            from_email: c_email.value,
            subject: c_subject.value,
            message: c_message.value,
            reply_to:c_email.value
        }
        emailjs.send("service_6bozuiq", "template_0qoigzq", params).then(function (res) {
            alert("Successfully sent");
            c_name.value = "";
            c_email.value = "";
            c_subject.value = "";
            c_message.value = "";

        })
    }
});

c_name.addEventListener('keypress', (evt) => {
    if (c_name.value.length <0) {
        name_r.style.display = "block";
        c_name.style.border = "1px solid red";
    }
    else {
        name_r.style.display = "none";
        c_name.style.border = "1px solid lightgray";
    }
})

c_email.addEventListener('keypress', (evt) => {
    if (c_email.value.length < 0) {
        email_r.style.display = "block";
        c_email.style.border = "1px solid red";
    }
    else {
        email_r.style.display = "none";
        c_email.style.border = "1px solid lightgray";
    }
});
c_subject.addEventListener('keypress', (evt) => {
    if (c_subject.value.length < 0) {
        subject_r.style.display = "block";
        c_subject.style.border = "1px solid red";
    }
    else {
        subject_r.style.display = "none";
        c_subject.style.border = "1px solid lightgray";
    }
});
c_message.addEventListener('keypress', (evt) => {
    if (c_message.value.length < 0) {
        message_r.style.display = "block";
        c_message.style.border = "1px solid red";
    }
    else {
        message_r.style.display = "none";
        c_message.style.border = "1px solid lightgray";
    }
});




