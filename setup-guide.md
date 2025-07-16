# ALPHA ULTIMATE — Setup Guide

## 1. Supabase Setup

- Create free project at https://supabase.com
- Go to SQL Editor → paste and run `/supabase-schema/schema.sql`
- Go to Storage → create bucket named `uploads`
- Copy your Project URL and Anon Public Key

## 2. Local Setup

```bash
cd frontend
npm install
cp .env.example .env   # Then fill in your Supabase keys
npm run dev
