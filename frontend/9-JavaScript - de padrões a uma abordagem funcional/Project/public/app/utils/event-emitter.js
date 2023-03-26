const events = new Map();

export const EventEmitter = {

    on(event, listner) {

        if (!events.has(event)) events.set(event, []);
        events.get(event).push(listner);
    },

    emit(event, data) {

        const listners = events.get(event);
        if (listners)
            listners.forEach(listner => listner(data));
    }
};