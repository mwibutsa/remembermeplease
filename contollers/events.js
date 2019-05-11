import { Event, Message } from '../models';
import select from 'lodash';
const events = {
    create: async (req, res) => {
        try {
            let event = req.body;
            event = select.pick(event, ['type', 'day', 'month', 'year', 'target', 'phonenumber', 'country', 'notificationTime'])
            event.userId = 1;
            const newEvent = await Event.create(event);
            let newMessage;
            if (req.body.message) {
                newMessage = await Message.create({ content: req.body.message });
            }
            return res.status(200).json({
                message: 'Event created successfully',
                newEvent,
                message: newMessage.content,
            });
        } catch (e) {
            res.status(500).json({
                message: 'error',
                error: e.message,
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const events = await Event.findAndCountAll({
                where: { userId: 1 }
            });
            let todays = [];
            let thisWeek = [];
            let other = [];
            events.rows.map((event) => {
                const currentYear = new Date().getFullYear();
                const currentMonth = new Date().getMonth() + 1;
                const currentDay = new Date().getDate();
                const currentTime = (new Date(`${currentYear}-${currentMonth}-${currentDay}`)).getTime();
                console.log(new Date(currentTime));

                if (!event.year) event.year = currentYear;
                const { day, month, year } = event;
                const eventTime = (new Date(`${year}-${month}-${day}`)).getTime();
                const diff = (eventTime - currentTime) / (1000 * 60 * 60 * 24);
                console.log('diff 1', diff);
                if (Math.sign(diff) !== -1 && 0 <= diff < 2) {


                    todays.push(event.dataValues);
                } else if (Math.sign(diff) === 1 && 2 < diff < 7) {
                    console.log('diff 2', diff);
                    thisWeek.push(event.dataValues);
                } else if (Math.sign(diff) === 1 && diff >= 7) {
                    other.push(event.dataValues);
                }
            });

            return res.status(200).json({
                todays: {
                    events: todays,
                    eventsCount: todays.length
                },
                thisWeek: {
                    events: thisWeek,
                    eventsCount: thisWeek.length
                },
                other: {
                    events: other,
                    eventsCount: other.length
                },

            });
        } catch (e) {
            return res.status(500).json({
                message: 'error',
                error: e.message,
            })
        }
    },
}

export default events;