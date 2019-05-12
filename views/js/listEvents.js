const getById = (id) => document.getElementById(id);

const getEvents = async () => {
  console.log('event listener....');

  const events = await fetch('../events');
  const json = await events.json();
  getById('today').innerHTML = '';
  // console.log(json.todays);
  json.todays.events.forEach(async (event) => {
    const eventText = `<label class="no-header-label"><span onclick="location.href='write-message.html?id=${
      event.id
    }'">${event.target}</span>
          <img icon-type${event.id}="${
      event.id
    }" src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='write-message.html?id=${
      event.id
    }'" />
          <hr /></label>`;
    getById('today').innerHTML += eventText;
  });
  getById('this_week').innerHTML = '';
  console.log(json);
  json.thisWeek.events.forEach((event) => {
    console.log(event.target);
    const eventText = `<label class="no-header-label">${event.target}
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='write-message.html'" />
          <hr /></label>`;
    getById('today').innerHTML += eventText;
  });
  getById('this_month').innerHTML = '';
  // console.log(json.todays);
  json.thisWeek.other.forEach((event) => {
    const eventText = `<label class="no-header-label">${event.target}
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='write-message.html'" />
          <hr /></label>`;
    getById('today').innerHTML += eventText;
  });

    const events = await fetch('../events');
    const json = await events.json();
    console.log(json);
    getById('today').innerHTML = '';
    if (json.todays.eventsCount !== 0) {
        json.todays.events.forEach(event => {
            const eventText = `<label class="no-header-label"><span onclick="location.href='edit-birthday.html?id=${event.id}'">${event.target}</span>
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html?id=${event.id}'" />
          <hr /></label>`;
            getById('today').innerHTML += eventText;
        });
    }
    getById('this_week').innerHTML = '';
    if (json.thisWeek.eventsCount !== 0) {
        json.thisWeek.events.forEach(event => {
            const eventText = `<label class="no-header-label"><span onclick="location.href='edit-birthday.html?id=${event.id}'>${event.target}</span>
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html'" />
          <hr /></label>`;
            getById('this_week').innerHTML += eventText;

        });
    }
    getById('this_month').innerHTML = '';
    if (json.other.eventsCount !== 0) {
        json.other.events.forEach(event => {
            const eventText = `<label class="no-header-label"><span onclick="location.href='edit-birthday.html?id=${event.id}'>${event.target}</span>
          <img src="profile/add.jpg" style="width: 7%;" align="right" onclick="location.href='editBirthday.html'" />
          <hr /></label>`;
            getById('this_month').innerHTML += eventText;

        });
    }
}
  // console.log(json);
};
document.addEventListener('DOMContentLoaded', getEvents);
