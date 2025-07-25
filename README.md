# ITS - IT Support Ticketing System (React App) 

ITS is a clean, fast, and responsive web-based tickedt management system designed to help organizations managwe support issues, track ticket status, and streamline between usears amnd IT engineers. Built using React, Tailwind CSS, and React Router.


## 🌟 Features

  - 🎛️ Interactive admin dashboard (Dashboard.jsx)
  - 🧑‍💻 Dedicated IT engineer dashboard (EngineerDashboard.jsx)
  - 📝 Support ticket submission with attachments (PDF, image, etc.)
  - 🔄 View and track inspection requests and tickect statuses
  - 📄 Assign tickets to specific engineers
  - 💬 Engineer can reply to tickets with messages and view attachments
  - 🌐 RTL/Farsi-firts support with English fallback (multi-language support planned)
  - 🧭 Sidebar navigation with dynamic route-based layout
  - ❌404 not found page for undefined routes

##  📁 Project Structer 

src/

│
├── components/

│ └── Sidebar.jsx

│ └── Header.jsx

├── pages/

│ └── Dashboard.jsx # User dashboard

│ └── EngineerDashboard.jsx # Engineer dashboard

│ └── SurveyStatus.jsx # Ticket status listing

│ └── InspectionRequest.jsx # Ticket request form

│ └── Certificates.jsx # List of ticket attachments (mocked as certificates)

│ └── AssignedEngineer.jsx # Engineer profile for handling tickets

│
├── App.jsx # Main layout and routes

└── main.jsx # App entry point


##  🚀 Getting Started 

### 1. Clone the repo 

```bash
git clone https://github.com/alirazi1992/its-react-support.git
cd its-react-support
```

### 2. Install Dependencies 

```bash
npm install
```

### 3. Start the Develompnet Server 

``` bash
npm run dev
```

### 🛠 Tech Stack 

  - **React.js**
  - **Tailwind CSS**
  - **React Router DOM**
  - **React Toastify**
  - **Vite**

### 📸 Screenshots

| Dashboard (RTL) | Ticket Request| Ticket Status |
|------------------|------------------|----------------|
| ![dashboard](./public/1.png) | ![form](./public/2.png) | ![status](./public/3.png) |



| Tickets |  Support Status | Engineer Dashboard |
|------------------|------------------|----------------|
| ![dashboard](./public/4.png) | ![form](./public/5.png) | ![status](./public/6.png) |




### 📌 Notes 

  - Tickect data is currremtly mocked . You can later repalce it with backend(Node.js, Firebase, etc.).
  - Message sending, attachments, and statuses are stored in local component state.
  - Support both IT asmins and IT engineers with role-based views.

### 🧑‍💻 Created By 
 **Ali Razi**

🌐Linkedin: linkedin.com\in\alirazi1992
 




