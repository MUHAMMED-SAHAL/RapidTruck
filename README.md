# RapidTruck 3.0 - Software Engineering and Project Management Project Built Following the Agile Methodology 

RapidTruck 3.0 is a comprehensive platform designed to improve communication between truck drivers and traffic police departments, streamline document management, enhance traffic planning, and foster a community for truck drivers.

## 🚚 Overview

RapidTruck 3.0 addresses several key challenges in the trucking industry:

- Uncoordinated communication regarding roadblocks and restrictions
- Inefficient document management for truck drivers
- Outdated traffic estimation and planning
- Lack of a dedicated community platform for truck drivers

## ✨ Features

### User Management
- User authentication for truck drivers and traffic police
- Profile customization with personal and vehicle details
- Role-based access control

### Document Management
- Secure document upload and storage
- Document categorization and organization
- Expiry date tracking and reminders
- Quick access to essential documents

### Traffic Alerts
- Real-time notifications for roadblocks and restrictions
- Alert creation interface for traffic police
- Filtering by location, severity, and type
- Detailed information about each alert

### Traffic Insights
- Data analytics based on uploaded logistics information
- Traffic pattern visualization
- Route optimization suggestions
- Historical data analysis

### Community Page
- Discussion forum for truck drivers
- Experience sharing and advice seeking
- Post creation, comments, and likes
- Community engagement features

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Custom auth system (can be replaced with Auth.js, Firebase, etc.)
- **State Management**: React Context API
- **Styling**: Tailwind CSS with custom theming

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/rapidtruck.git
   cd rapidtruck
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
\`\`\`

## 📁 Project Structure

\`\`\`
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
\`\`\`

## 🧩 Key Components

### Authentication

The application uses a custom authentication system with context API. In a production environment, you would replace this with a more robust solution like Auth.js, Firebase Authentication, or a custom backend.

### Document Management

Documents are stored with metadata including expiry dates, document type, and other relevant information. The system provides reminders for documents nearing expiration.

### Traffic Alerts

Traffic police can create alerts with details about roadblocks, restrictions, and other important information. Truck drivers receive these alerts in real-time.

### Community

The community section allows truck drivers to share experiences, ask questions, and build connections with other drivers.

## 🔄 Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

\`\`\`bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
\`\`\`
