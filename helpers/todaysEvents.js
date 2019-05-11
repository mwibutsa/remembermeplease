import db from '../models';

const { Event, Message, User } = db;

const todaysEvents = async () => {
    const events = await Event.findAll({
        include: {
            model: Message,
            model: User,
        },
        where: {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1
        }
    });

    return events;
};

export default todaysEvents;
