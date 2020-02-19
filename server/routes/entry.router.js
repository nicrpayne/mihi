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

// router.delete('/:id/:user_id', rejectUnauthenticated, (req, res) => {
//     console.log(req.user.id)
//     const id = req.params.id
//     const user_id = req.params.user_id
//     const loggedin_user = req.user.id
//     console.log('in delete route', id)
//     if (loggedin_user == user_id) {
//         const queryText = 'DELETE FROM "item" WHERE "id" = $1'
//         pool.query(queryText, [id])
//             .then(() => { res.sendStatus(200) })
//             .catch((err) => {
//                 console.log(err)
//                 res.sendStatus(500)
//             })
//     } else {
//         res.sendStatus(403)
//     }
// });


module.exports = router;