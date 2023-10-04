const express = require('express');
const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

const minionsRouter = express.Router();

// Param middleware
minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.param('workId', (req, res, next, id) => {
  const work = getFromDatabaseById('work', id);
  if (work) {
    req.work = work;
    next();
  } else {
    res.status(404).send();
  }
});

// Minion Routes
minionsRouter.route('/')
  .get((req, res) => {
    res.send(getAllFromDatabase('minions'));
  })
  .post((req, res) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
  });

minionsRouter.route('/:minionId')
  .get((req, res) => {
    res.send(req.minion);
  })
  .put((req, res) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
  })
  .delete((req, res) => {
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(deleted ? 204 : 500).send();
  });

// Work Routes
minionsRouter.route('/:minionId/work')
  .get((req, res) => {
    const work = getAllFromDatabase('work').filter(singleWork => singleWork.minionId === req.params.minionId);
    res.send(work);
  })
  .post((req, res) => {
    req.body.minionId = req.params.minionId;
    const createdWork = addToDatabase('work', req.body);
    res.status(201).send(createdWork);
  });

minionsRouter.route('/:minionId/work/:workId')
  .put((req, res) => {
    if (req.params.minionId !== req.body.minionId) {
      return res.status(400).send();
    }
    const updatedWork = updateInstanceInDatabase('work', req.body);
    res.send(updatedWork);
  })
  .delete((req, res) => {
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    res.status(deleted ? 204 : 500).send();
  });

module.exports = minionsRouter;
