const express = require('express');
const trackRouter = express.Router();
const {
    createEvent,
    getEvent,
    deleteEvent,
    updateEvent
} = require("../Controllers/trackController");


trackRouter.get('/',getEvent);

trackRouter.post('/',createEvent);

trackRouter.put('/trackId',updateEvent);

trackRouter.delete('/:trackId',deleteEvent);

module.exports = trackRouter;