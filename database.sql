
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
	"clearance_level" INTEGER NOT NULL DEFAULT 0
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
	"journal_text" TEXT NOT NULL
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