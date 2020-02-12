const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the journal entries
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "journal_entries";';
    console.log('in entries.router GET')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in entries GET', error)
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;