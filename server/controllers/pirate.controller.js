const { pirate } = require("./../models/pirate.model");

module.exports.onePirate = (req, res) => {
    const id = req.params.id
    pirate.findOne({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


module.exports.allPirates = (req, res) => {
    pirate.find({})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.createPirate = (req, res) => {
    pirate.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}


module.exports.deletePirate = (req, res) => {
    pirate.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}