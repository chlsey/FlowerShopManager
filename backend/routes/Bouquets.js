const express = require("express");
const router = express.Router();
const { Bouquets } = require('../models');

router.get("/", async (req, res) => {
    try {
        const listOfBouquets = await Bouquets.findAll();
        res.json(listOfBouquets);
    } catch (err) {
        res.send(err);
    }
});

router.post("/", async (req, res) => {
    try{
        const bouquet = req.body;
        await Bouquets.create(bouquet);
        res.json(bouquet);
    }
    catch(error)
    {
        res.send(error);
    }
});

module.exports = router;