CREATE TABLE "clients" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"job" text,
	"rate" numeric(10, 2),
	"isactive" boolean DEFAULT true NOT NULL,
	CONSTRAINT "clients_email_unique" UNIQUE("email")
);
