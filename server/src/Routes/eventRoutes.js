const express = require('express');
const eventRouter = express.Router();

const {
    CreateEvent,
    getEvents,
    updateEvent
} = require("../Controllers/EventsController")

eventRouter.get("/:userID",getEvents);

eventRouter.post('/',CreateEvent);

eventRouter.put("/:eventID",updateEvent)

module.exports = eventRouter;