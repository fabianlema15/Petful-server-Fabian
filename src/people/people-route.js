const express = require('express');
const peopleRoute = express.Router();
const jsonParser = express.json();
const PeopleService = require('./people-service');


peopleRoute
  .route('/')
  .get((req, res, next) => {
    res.json(PeopleService.getAll())
  })
  .post(jsonParser, (req, res, next) => {
    res.json(PeopleService.add(req.body.name))
  })
  .delete((req, res, next) => {
    res.json(PeopleService.remove())
  })

  peopleRoute
    .route('/frontme/:id')
    .get((req, res, next) => {
      res.json(PeopleService.getFrontMe(parseInt(req.params.id)))
    })

module.exports = peopleRoute;
