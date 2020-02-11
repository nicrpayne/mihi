
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "User" (
	"ID" serial NOT NULL,
	"Username" varchar(255) NOT NULL,
	"Password" varchar(255) NOT NULL,
	"Auth Level" int(1) NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Journal Entries" (
	"ID" serial NOT NULL,
	"User ID" int(255) NOT NULL,
	"Date" DATE(6) NOT NULL,
	"Time" TIMESTAMP NOT NULL,
	"Location" varchar(255) NOT NULL,
	"Primary Emotion" int(2) NOT NULL,
	"Secondary Emotion" int(2) NOT NULL,
	"Tertiary Emotion" int(2) NOT NULL,
	"Text of Journal" varchar(N) NOT NULL,
	CONSTRAINT "Journal Entries_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Primary Emotions List" (
	"ID" serial NOT NULL,
	"Name" varchar(255) NOT NULL,
	"Journal Entry" varchar(255) NOT NULL,
	"Color" varchar(255) NOT NULL,
	CONSTRAINT "Primary Emotions List_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Secondary Emotions List" (
	"ID" serial NOT NULL,
	"Name" varchar(255) NOT NULL,
	"Journal Entry" varchar(255) NOT NULL,
	"Parent Emotion ID" int NOT NULL,
	"Color" varchar(255) NOT NULL,
	CONSTRAINT "Secondary Emotions List_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Tertiary Emotions List" (
	"ID" serial NOT NULL,
	"Name" int NOT NULL,
	"Journal Entry" varchar(255) NOT NULL,
	"Parent Emotion ID" int NOT NULL,
	"Color" varchar(255) NOT NULL,
	CONSTRAINT "Tertiary Emotions List_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Resources" (
	"ID" serial NOT NULL,
	"Name" varchar(255) NOT NULL,
	"Type" varchar(255) NOT NULL,
	"Link to Resource" varchar(255) NOT NULL,
	"Primary Emotion" int(255) NOT NULL,
	"Secondary Emotion" int(255) NOT NULL,
	"Tertiary Emotion" int(255) NOT NULL,
	CONSTRAINT "Resources_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Journal Entries" ADD CONSTRAINT "Journal Entries_fk0" FOREIGN KEY ("User ID") REFERENCES "User"("ID");
ALTER TABLE "Journal Entries" ADD CONSTRAINT "Journal Entries_fk1" FOREIGN KEY ("Primary Emotion") REFERENCES "Primary Emotions List"("ID");
ALTER TABLE "Journal Entries" ADD CONSTRAINT "Journal Entries_fk2" FOREIGN KEY ("Secondary Emotion") REFERENCES "Secondary Emotions List"("ID");
ALTER TABLE "Journal Entries" ADD CONSTRAINT "Journal Entries_fk3" FOREIGN KEY ("Tertiary Emotion") REFERENCES "Tertiary Emotions List"("ID");

ALTER TABLE "Primary Emotions List" ADD CONSTRAINT "Primary Emotions List_fk0" FOREIGN KEY ("Journal Entry") REFERENCES "Journal_Emotions"("Entry ID");

ALTER TABLE "Secondary Emotions List" ADD CONSTRAINT "Secondary Emotions List_fk0" FOREIGN KEY ("Journal Entry") REFERENCES "Journal_Emotions"("Entry ID");
ALTER TABLE "Secondary Emotions List" ADD CONSTRAINT "Secondary Emotions List_fk1" FOREIGN KEY ("Parent Emotion ID") REFERENCES "Primary Emotions List"("ID");

ALTER TABLE "Tertiary Emotions List" ADD CONSTRAINT "Tertiary Emotions List_fk0" FOREIGN KEY ("Journal Entry") REFERENCES "Journal_Emotions"("Entry ID");
ALTER TABLE "Tertiary Emotions List" ADD CONSTRAINT "Tertiary Emotions List_fk1" FOREIGN KEY ("Parent Emotion ID") REFERENCES "Secondary Emotions List"("ID");

ALTER TABLE "Resources" ADD CONSTRAINT "Resources_fk0" FOREIGN KEY ("Primary Emotion") REFERENCES "Primary Emotions List"("ID");
ALTER TABLE "Resources" ADD CONSTRAINT "Resources_fk1" FOREIGN KEY ("Secondary Emotion") REFERENCES "Secondary Emotions List"("ID");
ALTER TABLE "Resources" ADD CONSTRAINT "Resources_fk2" FOREIGN KEY ("Tertiary Emotion") REFERENCES "Tertiary Emotions List"("ID");
