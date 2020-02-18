const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    //variable is equal 
    let queryText = `SELECT * FROM "tertiary_emotions_list";`;


    console.log('in tertiary.emotions.router GET')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in tertiary emotions GET', error)
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;