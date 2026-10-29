# 📝 MegaBlog — Dynamic Blogging Platform

A modern, full-stack blogging application built with **React**, **Redux Toolkit**, and **Appwrite**. This platform features user authentication, a rich text editor for writing blogs, image uploads, and post management.

---



## ✨ Features

*   **User Authentication:** Secure Signup, Login, and Logout powered by Appwrite Auth.
*   **Rich Text Editor:** WYSIWYG editor using TinyMCE for styling and formatting blog posts.
*   **Post Management:** Create, Read, Update, and Delete (CRUD) posts. Set posts as "Active" or "Inactive".
*   **File Storage:** Upload, preview, and delete featured images stored in Appwrite Buckets.
*   **Global State Management:** Redux Toolkit handles user session states across components.
*   **Responsive UI:** Fully responsive design built using Tailwind CSS.

---

## 🛠️ Tech Stack

*   **Frontend:** React (v19), Vite (v7)
*   **Styling:** Tailwind CSS (v4)
*   **Routing:** React Router DOM (v7)
*   **State Management:** Redux Toolkit & React Redux
*   **Forms:** React Hook Form
*   **Backend as a Service (BaaS):** Appwrite (Authentication, Database, and Bucket Storage)
*   **Rich Text Parsing:** HTML React Parser, TinyMCE Editor

---

## ⚙️ Project Setup & Configuration

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/purvrajsinhjadeja31105-dotcom/Blog-website.git
cd Blog-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and copy the contents from `.env.sample`. Replace the values with your Appwrite project configuration:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_COLLECTION_ID="your_collection_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
```

### 4. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

---

## 🛡️ License

Distributed under the MIT License. See `LICENSE` for more information.
