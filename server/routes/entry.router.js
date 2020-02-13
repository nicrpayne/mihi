const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



/**
 * POST route to journal_entries
 */

    router.post('/', (req, res) => {
        console.log('in journal entry post router')
        const newEntry = req.body;
        console.log(newEntry)
        const queryText = `INSERT INTO "journal_entries" ("date", "location", "journal_text")
                            VALUES ($1, $2, $3);`;
        const queryValues = [
            newEntry.date,
            newEntry.location,
            newEntry.text
        ];
        pool.query(queryText, queryValues)
            .then(() => {
                res.sendStatus(201);
                console.log(queryValues)
            }).catch((err) => {
                console.log('Error in router.post on entry router', err);
                res.sendStatus(500);
            })
    });


module.exports = router;