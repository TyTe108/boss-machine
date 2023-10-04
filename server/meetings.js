const express = require('express');
const { 
  getAllFromDatabase, 
  addToDatabase, 
  deleteAllFromDatabase, 
  createMeeting 
} = require('./db');

const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res) => {
  const newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
});

module.exports = meetingsRouter;
