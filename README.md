# Management of Transactions Project

## Overview

This is an Angular application that manages transactions between sender and recipient. The application includes filtering operations and allows filtering transactions by date and status of transactions.
There is facility of create transaction. Also, once transaction is available, it's comment can also be updated.

Assuming Transactions are uni-directional entity. So, added create endpoint to create transactions and get endpoints to get transactions data along with an update comment functionality to update transactions comment.

## Features

- Add new transactions
- Display a list of transactions filtered by status and date range
- View details of individual transactions
- Edit comments on existing transactions

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Angular CLI (Command Line Interface)
- Visual Studio Code or any preferred code editor of your choice

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd transaction-management-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Development server:**

   ```bash
   ng serve
   ```

   Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Endpoints

### GET `/api/transactions/?status={status}&startDate={startDate}&endDate={endDate}`

Fetches transactions filtered by `status`, `startDate`, and `endDate`.
Query Parameters:
- `startDate` (optional): Filter transactions from this date (inclusive)
- `endDate` (optional): Filter transactions to this date (inclusive)
- `status` (optional): Filter transactions by status

### GET `/api/transactions/{id}`

Fetches details of a transaction by `id`.

### POST `/api/transactions/`

Adds a new transaction with the provided details.

### PUT `/api/transactions/{id}`

Updates the comment of a transaction identified by `id`.

### Screenshot

List all transactions
![Alt text](public/1.png?raw=true "transactions list")

List all transactions with status as COMPLETED
![Alt text](public/2.png?raw=true "transactions completed")

List all transactions with status as IN_PROGRESS
![Alt text](public/3.png?raw=true "transaction in-progress")

List all transactions with status as REJECTED
![Alt text](public/4.png?raw=true "transaction rejected")

View particular transaction
![Alt text](public/5.png?raw=true "transaction rejected")

Create a new transaction
![Alt text](public/6.png?raw=true "transaction creation")

List transactions with newly created transactions
![Alt text](public/7.png?raw=true "transaction list with newly created transaction")

Transaction with Updated comment for last transaction ( Updated by routing via pressing View button -> Edit Comment)

Transaction before comment updation
![Alt text](public/up-1.png?raw=true "transaction before comment updation")

Transaction during comment updation
![Alt text](public/up-2.png?raw=true "transaction during comment updation")

Transaction after comment updated
![Alt text](public/up-3.png?raw=true "transaction after comment updated")

Transaction list with updated comment transaction
![Alt text](public/8.png?raw=true "transaction list with updated comment transaction")
