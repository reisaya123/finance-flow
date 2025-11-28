CREATE TYPE "public"."transactionType" AS ENUM('income', 'expense');--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "type" "transactionType" NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "income";