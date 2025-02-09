🎬 Movie Platform
A movie platform web application that allows users to explore movies, view detailed information, and toggle between light and dark themes. The app fetches movie data from The Movie Database (TMDb) API, displaying popular movies, their ratings, release dates, and more.



movie-platform/
│
├── public/                  # 📂 Static files (images, icons)
│
├── src/
│   ├── components/          # 🏗️ Reusable components (Header, Footer, etc.)
│   ├── pages/               # 📄 Pages for the app (Home, MovieDetailsPage)
│   ├── context/             # 🌍 Context API for global state management (e.g., theme)
│   ├── utils/               # 🔧 Utility functions (API calls using Axios)
│   ├── App.js               # 🚀 Main app component with routing
│   ├── index.js             # 🔑 Entry point of the app
│  
│
|
├── package.json             # 📦 Project metadata and dependencies
└── README.md                # 📖 Project documentation


🌟 Features
✅ View a list of popular movies
✅ View detailed information about a movie
✅ Toggle between light and dark themes 🌗
✅ Add movies to the watchlist ⭐


🛠️ Technologies Used
Technology	Description
⚛️ React	JavaScript library for building UI
⚡ Axios	HTTP client for API requests
🎨 Tailwind CSS	Utility-first CSS framework
🚦 React Router	Navigation and routing in React apps
🎞 TMDb API	Movie database for fetching details


🚀 Setup and Installation

1️⃣ Clone the repository
git clone https://github.com/yourusername/movie-platform.git

cd movie-platform

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev
