# Todo App

Full-stack Todo application with categories.

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- React Hook Form
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- SQLite


## Features

- Create tasks with text and category
- View list of tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by category
- Maximum 5 tasks per category
- Undo notification after deleting a task
- Loading states
- Error handling
- Empty state


## Project Structure

```
todo-app/
├── frontend/
│
├── backend/
│
└── README.md
```


# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
DATABASE_URL="file:./todo.db"
PORT=5000
NODE_ENV=development
```

Generate Prisma Client:

```bash
npx prisma generate
```

Create database:

```bash
npx prisma migrate dev
```

Start backend:

```bash
npm run dev
```

Backend will be available at:

```
http://localhost:5000
```


# Backend API

## Todos

### Get all todos

```
GET /api/todos
```

### Filter todos by category

```
GET /api/todos?category=Work
```

### Create todo

```
POST /api/todos
```

Example body:

```json
{
  "text": "Learn React",
  "category": "Study"
}
```

### Update todo status

```
PATCH /api/todos/:id
```

Example body:

```json
{
  "completed": true
}
```

### Delete todo

```
DELETE /api/todos/:id
```


## Categories

### Get categories

```
GET /api/categories
```


# Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend will be available at:

```
http://localhost:3000
```


# Deployment

## Frontend

The frontend application is deployed using:

- Vercel


## Backend

The backend application is deployed using:

- Render


## Database

The project uses:

- SQLite
- Prisma ORM


# Development Notes

The backend validates that each category can contain no more than 5 tasks.

When a task is deleted, the frontend shows an undo notification. If the user does not undo the action within several seconds, the task is removed permanently.