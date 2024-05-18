const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe,
    checkIsVoteRequest
} = require("../middlewares/games");
const { checkAuth } = require("../middlewares/auth.js");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, checkIsVoteRequest, sendGameById);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);


module.exports = gamesRouter;
