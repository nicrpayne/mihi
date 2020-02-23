const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the journal entries
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT 
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
ORDER BY "date" DESC;`;
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