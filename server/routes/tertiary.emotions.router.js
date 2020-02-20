const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    //variable is equal 
    let queryText = `SELECT * FROM "tertiary_emotions_list"
                        WHERE "secondary_emotion_id"=$1;`;


    console.log('in tertiary.emotions.router GET', req.params.id)
    pool.query(queryText, [req.params.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in emotions GET', error)
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;