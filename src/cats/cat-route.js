const express = require('express');
const catRoute = express.Router();
const jsonParser = express.json();
const CatService = require('./cat-service');


catRoute
  .route('/')
  .get((req, res, next) => {
    res.json(CatService.getFirst())
  })
  .delete((req, res, next) => {
    res.json(CatService.remove())
  })

catRoute
    .route('/next/:id')
    .get((req, res, next) => {
      res.json(CatService.getNext(parseInt(req.params.id)))
    })

catRoute
    .route('/prev/:id')
    .get((req, res, next) => {
      res.json(CatService.getPrev(parseInt(req.params.id)))
    })

module.exports = catRoute;
