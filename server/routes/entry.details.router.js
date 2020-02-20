const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    //variable is 
    let queryText = `SELECT
    "journal_entries".id,
    "journal_entries".date,
        "journal_entries".user_id,
        "journal_entries".location,
        "journal_entries".journal_text,
        "journal_entries".primary_emotion_id,
        "journal_entries".secondary_emotion_id,
        "journal_entries".tertiary_emotion_id,
        "primary_emotions_list".name as pname,
        "primary_emotions_list".color as pcolor,
        "secondary_emotions_list".name as sname,
        "secondary_emotions_list".color as scolor,
        "tertiary_emotions_list".name as tname,
        "tertiary_emotions_list".color as tcolor
    FROM "journal_entries"
    JOIN "primary_emotions_list" ON "primary_emotions_list".id = "journal_entries".primary_emotion_id
    JOIN "secondary_emotions_list" ON "secondary_emotions_list".id = "journal_entries".secondary_emotion_id
    JOIN "tertiary_emotions_list" ON "tertiary_emotions_list".id = "journal_entries".tertiary_emotion_id
    WHERE "journal_entries".id =$1;`;

    // console.log('in emotions.router GET')
    pool.query(queryText, [req.params.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in entryDetails GET', error)
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;