#ITs - IT Support Ticketing System (React App) 

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




