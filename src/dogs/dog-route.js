const express = require('express');
const dogRoute = express.Router();
const jsonParser = express.json();
const DogService = require('./dog-service');


dogRoute
  .route('/')
  .get((req, res, next) => {
    res.json(DogService.getFirst())
  })
  .delete((req, res, next) => {
    res.json(DogService.remove())
  })

dogRoute
    .route('/next/:id')
    .get((req, res, next) => {
      res.json(DogService.getNext(parseInt(req.params.id)))
    })

dogRoute
    .route('/prev/:id')
    .get((req, res, next) => {
      res.json(DogService.getPrev(parseInt(req.params.id)))
    })


module.exports = dogRoute;
