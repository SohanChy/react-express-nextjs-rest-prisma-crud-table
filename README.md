# A CRUD Demo using React JS + Express with a SQL DB

A simple demo of of create, read, update, delete operations.
### Frontend
- React Js for rendering
- Next JS for SSR and boilerplating
- Bootstrap for basic styling
- State-Reducer Pattern for State-management
- Tests using Jest (incomplete)

### Backend
- Express for api
- Prisma for SQL ORM

### Setup
- Includes docker-compose.yml file for dev environment
- Postgres OR Sqlite can be used (shipped with Sqlite, Sample configs for Postgres given)
- Run `docker-compose up --build` 
- Project will auto build, setup db, migrate, seed, and build all frontend resources
- Open `http://localhost:3000/` in browser
- This is a `DEV docker-compose file` not suitable for deployment, **everytime backend is built using docker, it will reset the db**, uncomment the line `RUN npx prisma migrate reset --force` in `backend/Dockerfile` to disable this behaviour.

### Utils
- Script for migrating from json to db is in path `backend/prisma/seed.ts` (reads from data.json to seed)
- Run inside backend `npx prisma db seed` to (re)seed db
- Tests for the frontend can be run using `npm run test`  in frontend directory
- The project **can be run without docker**, `npm run dev` command has be run for both frontend and backend.