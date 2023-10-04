// Importing necessary modules
const express = require('express');
const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

// Creating a new router for minions
const minionsRouter = express.Router();

// Middleware to handle minionId parameter
minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion; // Attach found minion to the request object
    next(); // Move to the next middleware/route handler
  } else {
    res.status(404).send(); // Send a 404 status if minion not found
  }
});

// Middleware to handle workId parameter
minionsRouter.param('workId', (req, res, next, id) => {
  const work = getFromDatabaseById('work', id);
  if (work) {
    req.work = work; // Attach found work to the request object
    next(); // Move to the next middleware/route handler
  } else {
    res.status(404).send(); // Send a 404 status if work not found
  }
});

// Routes for minions
minionsRouter.route('/')
  .get((req, res) => {
    // Fetch and send all minions
    res.send(getAllFromDatabase('minions'));
  })
  .post((req, res) => {
    // Add a new minion and send the created minion
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
  });

minionsRouter.route('/:minionId')
  .get((req, res) => {
    // Send the minion attached to the request by the param middleware
    res.send(req.minion);
  })
  .put((req, res) => {
    // Update a minion and send the updated minion
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
  })
  .delete((req, res) => {
    // Delete a minion and send appropriate status
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(deleted ? 204 : 500).send();
  });

// Routes for minion's work
minionsRouter.route('/:minionId/work')
  .get((req, res) => {
    // Fetch and send all work for a specific minion
    const work = getAllFromDatabase('work').filter(singleWork => singleWork.minionId === req.params.minionId);
    res.send(work);
  })
  .post((req, res) => {
    // Add a new work for a specific minion and send the created work
    req.body.minionId = req.params.minionId;
    const createdWork = addToDatabase('work', req.body);
    res.status(201).send(createdWork);
  });

minionsRouter.route('/:minionId/work/:workId')
  .put((req, res) => {
    // Check if minionId in the URL matches minionId in the request body
    if (req.params.minionId !== req.body.minionId) {
      return res.status(400).send();
    }
    // Update a work and send the updated work
    const updatedWork = updateInstanceInDatabase('work', req.body);
    res.send(updatedWork);
  })
  .delete((req, res) => {
    // Delete a work and send appropriate status
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    res.status(deleted ? 204 : 500).send();
  });

// Export the minions router to be used in other modules
module.exports = minionsRouter;
