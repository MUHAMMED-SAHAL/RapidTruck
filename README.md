# 🚚 RapidTruck 3.0

**Software Engineering and Project Management Project Built Following the Agile Methodology**

RapidTruck 3.0 is a comprehensive platform designed to improve communication between truck drivers and traffic police departments, streamline document management, enhance traffic planning, and foster a community for truck drivers.

---

## 📌 Overview

RapidTruck 3.0 addresses several key challenges in the trucking industry:

- ❌ Uncoordinated communication regarding roadblocks and restrictions  
- 🗂️ Inefficient document management for truck drivers  
- 🛣️ Outdated traffic estimation and planning  
- 👥 Lack of a dedicated community platform for truck drivers  

---

## ✨ Features

### 👤 User Management
- User authentication for truck drivers and traffic police  
- Profile customization with personal and vehicle details  
- Role-based access control  

### 📄 Document Management
- Secure document upload and storage  
- Document categorization and organization  
- Expiry date tracking and reminders  
- Quick access to essential documents  

### 🚧 Traffic Alerts
- Real-time notifications for roadblocks and restrictions  
- Alert creation interface for traffic police  
- Filtering by location, severity, and type  
- Detailed information about each alert  

### 📊 Traffic Insights
- Data analytics based on uploaded logistics information  
- Traffic pattern visualization  
- Route optimization suggestions  
- Historical data analysis  

### 💬 Community Page
- Discussion forum for truck drivers  
- Experience sharing and advice seeking  
- Post creation, comments, and likes  
- Community engagement features  

---

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS  
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)  
- **Authentication**: Custom auth system (can be replaced with Auth.js, Firebase, etc.)  
- **State Management**: React Context API  
- **Styling**: Tailwind CSS with custom theming  

---

## 📋 Prerequisites

- Node.js 18.x or higher  
- npm or yarn package manager  

---

## 🚀 Getting Started

### 1️⃣ Installation

```bash
git clone https://github.com/yourusername/rapidtruck.git
cd rapidtruck
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

---

## 📁 Project Structure

```bash
rapidtruck/
├── app/                  # Next.js App Router pages
│   ├── alerts/           # Traffic alerts pages
│   ├── community/        # Community forum pages
│   ├── dashboard/        # User dashboard
│   ├── documents/        # Document management
│   ├── insights/         # Traffic insights and analytics
│   ├── login/            # Authentication pages
│   ├── profile/          # User profile management
│   ├── register/         # User registration
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── auth-provider.tsx # Authentication context
│   ├── header.tsx        # Application header
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

---

## 🧩 Key Components

### 🔐 Authentication

The app uses a custom authentication system built with Context API. For production environments, consider integrating Auth.js, Firebase Auth, or a custom backend.

### 📁 Document Management

Supports metadata for documents, including expiry tracking and type categorization. Reminder notifications are triggered for expiring documents.

### 🚨 Traffic Alerts

Traffic police can create alerts with roadblock details and restrictions. Truck drivers receive real-time updates with filtering options.

### 🌐 Community Forum

Truck drivers can post questions, share advice, and engage with fellow drivers to build a support network.

---

## 🔄 Deployment

Deployable on platforms like **Vercel**, **Netlify**, or any service supporting Next.js.

### 🔧 Build for production

```bash
npm run build
# or
yarn build
```

### ▶️ Start the production server

```bash
npm start
# or
yarn start
```
