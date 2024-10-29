# Project Overview
This frontend is a Vue.js application that allows users to search for TikTok videos and view them. It interacts with the backend API to fetch video data and play videos directly within the application.

### Technologies Used
- Vue 3: Main frontend framework.
- Axios: For making HTTP requests to the backend API.
- Vidstack: Video player used to embed videos in the application.

### Prerequisites
- Node.js and npm: Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/en).

## Getting Started
1. Clone the Repository
```bash
git clone <your-repo-url>
cd frontend
```

2. Install Dependencies
```bash
npm install
```

3. Run the Application
```bash
npm run serve
```
The application should now be running at `http://localhost:8080`.

4. Adjust Backend URL

Ensure that the backend API endpoint in `HomeView.vue` or your environment file is set to the correct backend URL (`http://localhost:8080` by default).

## Project Structure
```plaintext
frontend/
├── public/
│   └── index.html             # Main HTML file
├── src/
│   ├── components/            # Vue components
│   │   ├── SearchBar.vue       # Search bar component
│   │   ├── VideoList.vue       # List of videos component
│   │   └── VideoPlayer.vue     # Video player component
│   ├── views/
│   │   └── HomeView.vue        # Main home view
│   ├── App.vue                 # Root Vue component
│   ├── main.js                 # Entry point for Vue
│   └── assets/
│       └── main.css            # Main CSS file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project README
```

### Usage
1. Searching for Videos:
- Enter a keyword in the search bar and hit enter.
- The frontend will display a list of videos based on the search results from TikTok.

2. Loading More Results:
- Scroll down to trigger lazy loading and fetch more results from the backend.

3. Playing a Video:
- Click on a video thumbnail to fetch the playable video URL from the backend.
- The video will play within a modal overlay using Vidstack.

### Troubleshooting
- API Error (403): If you encounter a 403 error on the video URL, it may be due to TikTok's security restrictions. Consider using TikTok's embedded player as an alternative.
- Frontend Not Loading: Ensure the backend is running and accessible. Also, make sure the frontend's API calls are directed to the correct backend URL.

### Customization
You can customize various aspects of the frontend:
- API URL: Change the base API URL in HomeView.vue.
- Styling: Customize the CSS in assets/main.css for a unique look.
