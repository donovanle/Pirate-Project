const PirateController = require('../controllers/pirate.controller')

module.exports = app =>{
    app.get("/api/pirates", PirateController.allPirates)
    app.post("/api/pirates/new", PirateController.createPirate)
    app.get("/api/pirates/:id", PirateController.onePirate)
    app.delete("/api/pirates/delete/:id", PirateController.deletePirate)
}