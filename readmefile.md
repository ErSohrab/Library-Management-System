# Library Management System

## Overview

This repository contains two main projects:

**Library Management System**  
   A browser-based application for managing library operations, including admin and librarian roles, student and book management, and transaction tracking.  
   **Location:** `Library Management  Syatem/`



---

## Library Management System

### Features

- **Admin Panel**
  - Register, update, delete, and view librarians.
  - Admin authentication.
- **Librarian Panel**
  - Issue and return books.
  - Register and search students.
  - Add, update, delete, and search books.
  - View all students and transactions.
  - Librarian authentication.
- **Data Storage**
  - Uses browser `localStorage` for all data (students, books, librarians, transactions).
  - Includes a sample SQL schema (`Database.sql`) for reference.

### Folder Structure

- `Admin.js`, `Admin.css`, `AdminLoginPage.html` – Admin login and logic.
- `MainAdmin.js`, `MainAdmin.css`, `AdminMainPage.html` – Admin dashboard.
- `LibrarianLogin.js`, `LibrarianLogin.css`, `LibraryLoginPage.html` – Librarian login.
- `MainLibrarian.js`, `MainLibrarian.css`, `LibraryMainPage.html` – Librarian dashboard.
- `index.html`, `index.css` – Landing page.
- `Database.sql` – Example SQL schema for a relational database.
- `img/` – Images used in the UI.

### How to Run

1. Open `Library Management  Syatem/index.html` in your browser.
2. Choose **Admin** or **Librarian** to log in.
3. Use the provided credentials (see login JS files) or register new users as admin.
4. All data is stored in your browser's localStorage.

### Notes

- No backend/server is required; all logic is client-side.
- For a real deployment, you would implement the SQL schema on a server and connect via backend code.

---
