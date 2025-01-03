const express = require('express');
let router = express.Router();
const SponsorController = require('../controllers/sponsor.controller');
const {
  body,
  param
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
  .get(AuthController.checkAuth, SponsorController.get)
  .post(AuthController.checkAuth, [
    body('name').isString(),
    body('quota').isString(),
    body('animal').isString()
  ], SponsorController.create);

router.route("/deactivate/:id")
  .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.deactivate);

router.route("/activate/:id")
  .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.activate);

router.route('/:id')
  .get(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.getOne)
  .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.update)
  .delete(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.delete);

module.exports = router;