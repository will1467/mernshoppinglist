const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/', async (req, res, next) => {
    try {
        const items = await Item.find().sort({ date: -1});
        res.json(items);
    } catch(err){
        res.sendStatus(500);
        throw new Error(err);
    }

})

router.post('/', async(req, res, next) => {
    const newItem = new Item({
        name: req.body.name
    });

    try {
        const item = await newItem.save();
        res.json(item);
    } catch(err){
        res.sendStatus(500);
        throw new Error(err);
    }
})

router.delete('/', async(req, res, next) => {
    try{
        const item = await Item.findByIdAndRemove(req.params.id);
        res.sendStatus(204);
    } catch(err){
        res.sendStatus(500);
        throw new Error(err);
    }
})

module.exports = router;
