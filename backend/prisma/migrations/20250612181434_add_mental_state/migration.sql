/*
  Warnings:

  - You are about to drop the `goals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `health_metrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mood_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sleep_records` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('HAPPY', 'EXCITED', 'ENERGETIC', 'PROUD', 'MOTIVATED', 'LOVED', 'GRATEFUL', 'CALM', 'HOPEFUL', 'CONFIDENT', 'NEUTRAL', 'TIRED', 'BORED', 'DISTRACTED', 'INDIFFERENT', 'REFLECTIVE', 'SAD', 'ANGRY', 'ANXIOUS', 'WORRIED', 'FRUSTRATED', 'OVERWHELMED', 'LONELY', 'EMBARRASSED', 'STRESSED', 'GUILTY', 'HOPELESS');

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_userId_fkey";

-- DropForeignKey
ALTER TABLE "health_metrics" DROP CONSTRAINT "health_metrics_userId_fkey";

-- DropForeignKey
ALTER TABLE "mood_entries" DROP CONSTRAINT "mood_entries_userId_fkey";

-- DropForeignKey
ALTER TABLE "sleep_records" DROP CONSTRAINT "sleep_records_userId_fkey";

-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_userId_fkey";

-- DropTable
DROP TABLE "goals";

-- DropTable
DROP TABLE "health_metrics";

-- DropTable
DROP TABLE "mood_entries";

-- DropTable
DROP TABLE "sleep_records";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "workouts";

-- DropEnum
DROP TYPE "EnergyLevel";

-- DropEnum
DROP TYPE "GoalStatus";

-- DropEnum
DROP TYPE "GoalType";

-- DropEnum
DROP TYPE "MetricType";

-- DropEnum
DROP TYPE "MoodLevel";

-- DropEnum
DROP TYPE "SleepQuality";

-- DropEnum
DROP TYPE "StressLevel";

-- DropEnum
DROP TYPE "WorkoutType";

-- CreateTable
CREATE TABLE "MentalState" (
    "id" TEXT NOT NULL,
    "mood" "Mood" NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MentalState_pkey" PRIMARY KEY ("id")
);
