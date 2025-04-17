# 🛠 Bike Servicing Management API
📄 Summary
This is a backend RESTful API built for managing a bike servicing center's operations. It enables the management of customers, bikes, and service records with additional support for tracking pending and completed services.

🌐 Live API Link
🔗 - [@Live-Link](https://assignment-8-sand-zeta.vercel.app/) vercel link
- [@https://github.com/nafis200/L-2-A-8](https://github.com/nafis200/L-2-A-3) uses Github Link

🧰 Tech Stack
Backend Framework: Node.js, Express.js

Language: TypeScript

ORM: Prisma ORM

Database: PostgreSQL

UUID Support: All primary keys are UUID

Deployment: Render

# Setup Guide
Clone the repository

- git clone https://github.com/nafis200/L-2-A-8

- cd bike-servicing-api
Install dependencies

- npm install

# Set up environment variables
Create a .env file in the root directory with the following:

- DATABASE_URL="postgresql://assignment8_user:Qtlys91G9D6ywqazQRx3FOxywpeVHZ7B@dpg-cvvurpmuk2gs73dn46pg-a.virginia-postgres.render.com/assignment8"
- PORT=3000

- npx prisma migrate dev --name init
Start the server
- npm run dev
View API documentation

🚀 Key Features
✅ Customer Management

Create, Read, Update, Delete customers

Search customer by ID

✅ Bike Management

Add and view bikes

Link bikes to customers

✅ Service Management

Add new service records

Mark services as completed

Retrieve service history

✅ Overdue & Pending Services

GET /api/services/status

Filters services that are:

Pending or In-Progress

And older than 7 days

✅ Validation & Error Handling

Standardized error responses

Validations on all required fields

✅ UUID Based Primary Keys

Universally unique and secure

✅ Prisma ORM Integration

Type-safe queries

Easy DB migrations