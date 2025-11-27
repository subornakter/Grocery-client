#### 🛒 Grocery Shop – Full Stack Project (Next.js + Firebase)

A modern grocery management system built with Next.js, Firebase Authentication, and Firestore.
This project includes product management, secure user login, responsive mobile-first design, and a clean, scalable component-based structure.

#### 🚀 Features

- 🔐 User Authentication (Register, Login, Logout) using Firebase
- 📦 Product Management (Add, Edit, Delete, View)
- 📱 Fully Responsive UI – Desktop + Moblie
- 🔥 Real-time Database using MongoDB
- 🖼️ Swiper Slider on Home Page
- 🛠️ Modular & Clean Code Structure
- 🎨 Optimized UI using Tailwind CSS
- 📦 JSON-based API integration with backend
  
This project is designed to simulate a real-world grocery management system with clean UI and smooth user experience. 

#### 🛠️ Technologies Used

- Next.js 16+
- React + Context API
- Firebase Authentication
- MongoDB Database
- Tailwind CSS
- SweetAlert2
- React Toastify
- Swiper Slider
- Express.js

#### 🚀 Setup & Installation  
## 1️⃣ Clone the Project
```bash
git clone https://github.com/your-username/groca.git
cd groca
```

## 2️⃣ Install Dependencies
```bash
npm install
```

## 3️⃣ Setup Environment Variables

Create a .env.local file inside the root folder:
 ```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```
## 4️⃣ Run the Development Server
```bash
npm run dev
```
#### 📂 Project Structure (Full Routes Summary)
```bash
src/
└─ app/
   ├─ layout.js                 → Main layout (Navbar + Footer + AuthProvider)
   ├─ globals.css               → Global styles
   ├─ page.jsx                  → Home page

   ├─ about/
   │   └─ page.jsx             → About page (static)
   │
   ├─ contact/
   │   └─ page.jsx             → Contact page (static)
   │
   ├─ AddProduct/
   │   └─ page.jsx             → Add new product (Admin only)
   │
   ├─ ManageProducts/
   │   └─ page.jsx             → Product dashboard (View/Edit/Delete)
   │
   ├─ Login/
   │   └─ page.jsx             → Login page
   │
   ├─ Register/
   │   └─ page.jsx             → Register page
   │
   ├─ components/
   │   ├─ Navbar.jsx           → Main navigation bar
   │   ├─ Footer.jsx           → Footer section
   │   ├─ ProductCard.jsx      → Mobile product card component
   │   ├─ ProductTable.jsx     → Desktop product table
   │   ├─ EditModal.jsx        → Product edit modal
   │   └─ Loader.jsx           → Loading spinner
   │
   ├─ context/
   │   ├─ AuthContext/
   │   │     └─ page.jsx       → Context creation (export AuthContext)
   │   └─ AuthProvider/
   │         └─ page.jsx       → Wraps app with Firebase Auth state
   │
   ├─ firebase/
   │   └─ firebase.config.js   → Firebase configuration file
   │
   └─ utils/
       └─ helpers.js           → Reusable helper functions
```
#### 🚀 Live Demo & Repositories

🔗 **Live Demo:**  
https://your-live-demo-url.com

📦 **Client Repository:**  
https://github.com/your-username/grocery-client

🖥️ **Server Repository:**  
https://github.com/your-username/grocery-server

