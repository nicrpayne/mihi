CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"clearance_level" INT NOT NULL DEFAULT 0
);


CREATE TABLE "primary_emotions_list" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"color" VARCHAR(255) NOT NULL
);

CREATE TABLE "secondary_emotions_list" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"primary_emotion_id" INT REFERENCES "primary_emotions_list" NOT NULL,
	"color" VARCHAR(255) NOT NULL
);

CREATE TABLE "tertiary_emotions_list" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"secondary_emotion_id" INT REFERENCES "secondary_emotions_list" NOT NULL,
	"color" VARCHAR(255) NOT NULL	
);

CREATE TABLE "journal_entries" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" DATE NOT NULL,
	"time" TIMESTAMP NOT NULL,
	"location" VARCHAR(255) NOT NULL,
	"primary_emotion_id" INT REFERENCES "primary_emotions_list" NOT NULL,
	"secondary_emotion_id" INT REFERENCES "secondary_emotions_list" NOT NULL,
	"tertiary_emotion_id" INT REFERENCES "tertiary_emotions_list" NOT NULL,
	"journal_text" VARCHAR NOT NULL
);



CREATE TABLE "resources" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"type" VARCHAR(255) NOT NULL,
	"link_to_resource" VARCHAR(255) NOT NULL,
	"primary_emotion_id" INT REFERENCES "primary_emotions_list" NOT NULL,
	"secondary_emotion_id" INT REFERENCES "secondary_emotions_list" NOT NULL,
	"tertiary_emotion_id" INT REFERENCES "tertiary_emotions_list" NOT NULL
);

SELECT * FROM "journal_entries";

INSERT INTO "journal_entries" ("date", "location", "journal_text")
VALUES ($1, $2, $3);

alter table journal_entries alter column primary_emotion_id drop not null;

alter table journal_entries alter column secondary_emotion_id drop not null;
alter table journal_entries alter column tertiary_emotion_id drop not null;

alter table journal_entries alter column user_id drop not null;

alter table journal_entries alter column journal_text drop not null;


INSERT INTO "primary_emotions_list" ("name", "color")
VALUES ('Anger', 'Pink'), ('Fear', 'Orange'), ('Love', 'Yellow'), ('Joy', 'Green'), ('Surprise', 'Teal'), ('Sadness', 'Blue');

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Disgusted', 2, 'Dusty Rose'), ('Jealous', 2, 'Dusty Rose'), ('Irritable', 2, 'Dusty Rose'), ('Exasperated', 2, 'Dusty Rose'), ('Enraged', 2, 'Dusty Rose'); 

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Horrified', 3, 'Salamander'), ('Nervous', 3, 'Salamander'), ('Insecure', 3, 'Salamander'), ('Terrified', 3, 'Salamander'), ('Scared', 3, 'Salamander'), ('Scared', 3, 'Salamander');

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Grateful', 4, 'Goldenrod'), ('Sentimental', 4, 'Goldenrod'), ('Affectionate', 4, 'Goldenrod'), ('Romantic', 4, 'Goldenrod'), ('Enchanted', 4, 'Goldenrod');

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Euphoric', 5, 'Basil'), ('Excited', 5, 'Basil'), ('Optimistic', 5, 'Basil'), ('Proud', 5, 'Basil'), ('Cheerful', 5, 'Basil'), ('Happy', 5, 'Basil'), ('Content', 5, 'Basil'), ('Peaceful', 5, 'Basil');

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Moved', 6, 'Turquoise'), ('Overcome', 6, 'Turquoise'), ('amazed', 6, 'Turquoise'), ('Confused', 6, 'Turquoise'), ('Stunned', 6, 'Turquoise');

INSERT INTO "secondary_emotions_list" ("name", "primary_emotion_id", "color")
VALUES ('Gloomy', 7, 'Ocean'), ('Lonely', 7, 'Ocean'), ('Shameful', 7, 'Ocean'), ('Disappointed', 7, 'Ocean'), ('Unhappy', 7, 'Ocean'), ('Hurt', 7, 'Ocean');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Revolted', 2, 'Maroon'), ('Contemptuous', 2, 'Maroon'), ('Envious', 3, 'Maroon'), ('Resentful', 3, 'Maroon'), ('Aggrivated', 4, 'Maroon'), ('Annoyed', 4, 'Maroon'), ('Agitated', 5, 'Maroon'), ('Frustrated', 5, 'Maroon'), ('Hostile', 6, 'Maroon'), ('Hateful', 6, 'Maroon');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Dreadful', 7, 'Amber'), ('Mortified', 7, 'Amber'), ('Anxious', 8, 'Amber'), ('Worried', 8, 'Amber'), ('Inadequate', 9, 'Amber'), ('Inferior', 9, 'Amber'), ('Hysterical', 10, 'Amber'), ('Panicked', 10, 'Amber'), ('Helpless', 11, 'Amber'), ('Frightened', 11, 'Amber');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Thankful', 13, 'Brown'), ('Appreciative', 13, 'Brown'), ('Nostalgic', 14, 'Brown'), ('Tender', 14, 'Brown'), ('Compassionate', 15, 'Brown'), ('Warmhearted', 15, 'Brown'), ('Enamored', 16, 'Brown'), ('Passionate', 16, 'Brown'), ('Rapturous', 17, 'Brown'), ('Enthralled', 17, 'Brown');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Jubliant', 18, 'Seaweed'), ('Elated', 18, 'Seaweed'), ('Zealous', 19, 'Seaweed'), ('Enthusiastic', 19, 'Seaweed'), ('Hopeful', 20, 'Seaweed'), ('Eager', 20, 'Seaweed'), ('Illustrious', 21, 'Seaweed'), ('Triumphant', 21, 'Seaweed'), ('Playful', 22, 'Seaweed'), ('Amused', 22, 'Seaweed'), ('Delighted', 23, 'Seaweed'), ('Jovial', 23, 'Seaweed'), ('Pleased', 24, 'Seaweed'), ('Satisfied', 24, 'Seaweed'), ('Serene', 25, 'Seaweed'), ('Tranquil', 25, 'Seaweed');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Touched', 26, 'Aqua'), ('Stimulated', 26, 'Aqua'), ('Astounded', 27, 'Aqua'), ('Speechless', 27, 'Aqua'), ('Awe-struck', 28, 'Aqua'), ('Astonished', 28, 'Aqua'), ('Perplexed', 29, 'Aqua'), ('Disillusioned', 29, 'Aqua'), ('Bewildered', 30, 'Aqua'), ('Shocked', 30, 'Aqua');

INSERT INTO "tertiary_emotions_list" ("name", "secondary_emotion_id", "color")
VALUES ('Gloomy', 31, 'Denim'), ('Hopeless', 31, 'Denim'), ('Neglected', 32, 'Denim'), ('Isolated', 32, 'Denim'), ('Guilty', 33, 'Denim'), ('Regretful', 33, 'Denim'), ('Displeased', 34, 'Denim'), ('Dismayed', 34, 'Denim'), ('Disheartened', 35, 'Denim'), ('Miserable', 35, 'Denim'), ('Disturbed', 36, 'Denim'), ('Agonized', 36, 'Denim');