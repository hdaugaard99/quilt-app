const express = require('express');
const app = express();
const quiltRoute = express.Router();

// Quilt model
let Quilt = require('../model/quilt');
let Block = require('../model/block');
let Piece = require('../model/piece');

// Add Quilt
quiltRoute.route('/add-quilt').post((req, res, next) => {
    Quilt.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Add Block
quiltRoute.route('/add-block').post((req, res, next) => {
    Block.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Add Piece
quiltRoute.route('/add-piece').post((req, res, next) => {
    Piece.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all quilts
quiltRoute.route('/').get((req, res) => {
    Quilt.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get all blocks
quiltRoute.route('/blocks-list').get((req, res) => {
    Block.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all pieces
quiltRoute.route('/pieces-list').get((req, res) => {
    Piece.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get single quilt
quiltRoute.route('/read-quilt/:id').get((req, res) => {
    Quilt.findById(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }
})

// Get single block
quiltRoute.route('/read-block/:id').get((req, res) => {
    Block.findById(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }
})

// Get single piece
quiltRoute.route('/read-piece/:id').get((req, res) => {
    Piece.findById(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }
})

// Update quilt

quiltRoute.route('/update-quilt/:id').put((req, res, next) => {
    Quilt.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data);
            console.log('Quilt successfully updated')
        }
    })
})

// Update block
quiltRoute.route('/update-block/:id').put((req, res, next) => {
    Block.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data);
            console.log('Block successfully updated')
        }
    })
})

// Update piece
quiltRoute.route('/update-piece/:id').put((req, res, next) => {
    Piece.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data);
            console.log('Piece successfully updated')
        }
    })
})

// Delete quilt
quiltRoute.route('/delete-quilt/:quiltId').delete((req, res, next) => {
    Quilt.findByIdAndRemove(req.params.quiltId, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// Delete block
quiltRoute.route('/delete-blockk/:id').delete((req, res, next) => {
    Block.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// Delete piece
quiltRoute.route('/delete-piece/:id').delete((req, res, next) => {
    Piece.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = quiltRoute;