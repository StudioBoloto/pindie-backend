const {checkAuth, checkCookiesJWT} = require("../middlewares/auth");
const {login, sendIndex, sendDashboard } = require("../controllers/auth");
const express = require('express');
const authRouter = express.Router();

authRouter.post("/auth/login", login);

module.exports = authRouter;
