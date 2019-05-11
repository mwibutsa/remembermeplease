import db from '../models';
import select from 'lodash';

const { Event, User } = db;

const upcomingEvents = async () => {
  const events = await Event.findAll({ include: { model: User } });
  const eventsToShoutOut = events.filter((event) => {
    const newDate = new Date();
    const currentYear = newDate.getFullYear();
    const { notificationTime, day, month, year } = event;
    const eventDate = `${currentYear}-${month}-${day}`;
    const todaysMonth = newDate.getMonth() + 1;
    const todaysDate = newDate.getDate();
    const eventTime = new Date(eventDate).getTime();
    const todaysCustomDate = `${currentYear}-${todaysMonth}-${todaysDate}`;
    const todaysDaysTime = new Date(todaysCustomDate).getTime();

    const timeDifference =
      eventTime - todaysDaysTime - notificationTime * 24 * 60 * 60 * 100;
    const dayDifference = timeDifference / (24 * 60 * 60 * 1000);
    return dayDifference > 0 && dayDifference < 1;
  });
  const formatEventObject = [];
  eventsToShoutOut.forEach((event) => {
    const eventData = select.pick(event, [
      'userId',
      'type',
      'notificationTime',
      'target',
      'phonenumber',
    ]);
    const userData = select.pick(event.User, [
      'phonenumber',
      'firstname',
      'lastname',
      'email',
      'region',
    ]);
    userData.user_phone = userData.phonenumber;
    delete userData.phonenumber;
    formatEventObject.push({ ...userData, ...eventData });
  });
  return formatEventObject;
};

export default upcomingEvents;
