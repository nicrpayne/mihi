const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    //variable is equal to new table made of tertiary list bundled together
    let tertiaryEmotions = `SELECT "tertiary_emotions_list".secondary_emotion_id, "tertiary_emotions_list"."name",
        jsonb_build_object('name', "tertiary_emotions_list"."name", 'color', "tertiary_emotions_list".color)
        as "emotion"
        FROM "tertiary_emotions_list"`


    const queryText = `SELECT jsonb_build_object('secondary_tertiary_emotions', "foo".secondary_emotion_id, 'tertiary_emotions', jsonb_object_agg("foo".name, "foo".emotion), 'secondary_name', "secondary_emotions_list".name) AS emotion 
    FROM (${tertiaryEmotions}) AS foo
    JOIN "secondary_emotions_list"
    ON "secondary_emotions_list".id = foo.secondary_emotion_id
    GROUP BY "foo".secondary_emotion_id, "secondary_emotions_list".name`;

        //bundle up secondary with tertiary and JOIN primary

    

    
    console.log('in emotions.router GET')
    pool.query(queryText)
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