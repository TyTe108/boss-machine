// Importing necessary modules
const express = require('express');
const { 
  getAllFromDatabase, 
  addToDatabase, 
  deleteAllFromDatabase, 
  createMeeting 
} = require('./db');

// Creating a new router for meetings
const meetingsRouter = express.Router();

// Route to get all meetings
meetingsRouter.get('/', (req, res) => {
  // Fetch and send all meetings from the database
  res.send(getAllFromDatabase('meetings'));
});

// Route to create a new meeting
meetingsRouter.post('/', (req, res) => {
  // Create a new meeting and add it to the database
  const newMeeting = addToDatabase('meetings', createMeeting());
  // Send the created meeting with a 201 Created status
  res.status(201).send(newMeeting);
});

// Route to delete all meetings
meetingsRouter.delete('/', (req, res) => {
  // Delete all meetings from the database
  deleteAllFromDatabase('meetings');
  // Send a 204 No Content status to indicate successful deletion
  res.status(204).send();
});

// Export the meetings router to be used in other modules
module.exports = meetingsRouter;
