import { Event } from '../models';

const create = async (req, res) => {
    try {
        const event = req.body;
        event.userId = 1;
        const newEvent = await Event.create(event);
        return res.status(200).json({
            message: 'Event created successfully',
            newEvent
        })
    } catch (e) {
        res.status(500).json({
            message: 'error',
            error: e.message,
        })
    }
}

export default create;