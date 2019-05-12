const saveDraft = document.querySelector('#draft');
const sendNow = document.querySelector('#done');
const target = document.querySelector('#name');
const type = 'Birtday';
const day = 12;
const month = 05;
const year = 2019;
const phonenumber = document.querySelector('#whatsapp');
const message = document.querySelector('#message');

const event = {
    type,
    day,
    month,
    year,
    target: target.value,
    phonenumber: phonenumber.value,
    country: "Estonia",
    notificationTime: 7,
    message: message.value,
}

const myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-type', 'application/json');

const handleClick = (e) => {
    e.preventDefault();
    const type = 'Birtday';
    const day = 12;
    const month = 05;
    const year = 2019;
    const phonenumber = document.querySelector('#whatsapp');
    const message = document.querySelector('#message');

    const event = {
        type,
        day,
        month,
        year,
        target: target.value,
        phonenumber: phonenumber.value,
        country: "Estonia",
        notificationTime: 7,
        message: message.value,
    }
    console.log(event);

    fetch('../events', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: myHeaders,
    })
        .then((result) => { window.location = 'congratulations.html'; })
        .catch((err) => console.log(err));
};

sendNow.addEventListener('click', handleClick);
