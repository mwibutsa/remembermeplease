const getById = (id) => document.getElementById(id);

const getEvents = async () => {
    console.log('event listener....');

    const events = await fetch('../events');
    const json = await events.json();
    getById('today').innerHTML = '';
    // console.log(json.todays);
    json.todays.events.forEach(event => {
        console.log(event.target);
        const eventText = `<label class="no-header-label"><span onclick="location.href='editBirthday.html?id=${event.id}'">${event.target}</span>
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html?id=${event.id}'" />
          <hr /></label>`;
        getById('today').innerHTML += eventText;

    });
    getById('this_week').innerHTML = '';
    console.log(json);
    json.thisWeek.events.forEach(event => {
        console.log(event.target);
        const eventText = `<label class="no-header-label">${event.target}
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html'" />
          <hr /></label>`;
        getById('today').innerHTML += eventText;

    });
    getById('this_month').innerHTML = '';
    // console.log(json.todays);
    json.thisWeek.other.forEach(event => {
        console.log(event.target);
        const eventText = `<label class="no-header-label">${event.target}
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html'" />
          <hr /></label>`;
        getById('today').innerHTML += eventText;

    });

    // console.log(json);

}

document.addEventListener('DOMContentLoaded', getEvents);