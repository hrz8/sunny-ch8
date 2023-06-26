const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * Response
 * @typedef {object} Response
 * @property {string} result - The title
 * @property {array<Player>} data - The content
 */

/**
 * GET /players
 * @summary List all players
 * @description Listing all players from the database
 * @operationId listPlayers
 * @return {Response} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "data": [
 *     {
 *       "id": 1,
 *       "username": "galileo",
 *       "email": "galileo@brazil.com",
 *       "password": "$2a$10$Q.uMt79272XWj2DmFBgGEuevlRMM4oEPjmFL122nacdqwKMt5hA1u\n",
 *       "experience": 0,
 *       "lvl": 0,
 *       "createdAt": "2023-06-25T17:00:00.000Z",
 *       "updatedAt": "2023-06-25T17:00:00.000Z"
 *     }
 *   ]
 * }
 */
playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);
playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
