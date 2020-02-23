const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



/**
 * POST route to journal_entries
 */

router.post('/', rejectUnauthenticated, (req, res) => {
        console.log('in journal entry post router')
        const newEntry = req.body;
        console.log(newEntry)
        const queryText = `INSERT INTO "journal_entries" ("date", "location", "journal_text", 
                            "primary_emotion_id", 
                            "secondary_emotion_id", "tertiary_emotion_id")
                            VALUES ($1, $2, $3, $4, $5, $6);`;
        const queryValues = [
            newEntry.date,
            newEntry.location,
            newEntry.text,
            newEntry.primaryId,
            newEntry.secondaryId,
            newEntry.tertiaryId
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in delete route', req.params)
 
    console.log(req.params.id);
        const queryText = 'DELETE FROM "journal_entries" WHERE "id" = $1'
      
        
        pool.query(queryText, [req.params.id])
            .then(() => { res.sendStatus(200) })
            .catch((err) => {
                console.log(err)
                res.sendStatus(500)
            })
   
});

// Updates selected movie in database
router.put('/:id', rejectUnauthenticated, (req, res) => {
    // console.log('req.body in /edit/id is: ', req.body);
    const updatedEntry = req.body.journalText;
    const entryId = req.params.id

    const queryText =   `UPDATE "journal_entries"
                        SET "journal_text" = $1
                        WHERE "id" = $2;`;

    const queryValues = [
        updatedEntry,
        entryId

    ];

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error completing UPDATE movie query', error);
            res.sendStatus(500);
        });
});


module.exports = router;