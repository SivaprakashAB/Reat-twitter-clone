# Twitter-Clone

# Social Media Application

A modern social media application built with React Vite,  interactive posts. Check out the [Live Demo](https://react-clone-siva.netlify.app/) to explore its capabilities.

## Features

- 💬 Interactive post actions (like, retweet, reply, bookmark)
- 🔄 Dynamic content loading
- 📱 Modal view for post details
- 💾 Persistent storage for user interactions
- 📱 Responsive design that works on desktop and mobile devices

## Technologies Used

- *React*: For building the user interface with a component-based approach
- *CSS3*: For custom styling and responsive layouts

## Main pages and thier roles

- *Home*: The central hub where users can view their personalized feed, interact with posts, and create new retweet.
- *Explore*: A discovery page where users can find trending topics, search for trending posts.
- *Notifications*: Keeps users updated on interactions with their messages.
- *Profile*: Showcases the user's identity, their following count, their followers count.
- *Communities*: to show the discussions with the community users.

## Components Created and Usage

The application is built using a modular, component-based architecture. Below are the key components and their purposes:

- *Home*: 
  - Feed.jsx: Shows the post list with like , retweet , comment for the posts.
  - LeftSidebar.jsx: Navigation and user info and profile for the user.
  - RightSidebar.jsx: Trending topics.

- *Explore*: 
  - ExploreColumn.jsx: Trending posts from the following users.

- *Notifications*: 
  - NotificationColumn.jsx: Lists notifications.

- *Profile*: 
  - ProfileColumn.jsx: User profile and id.

- *Communities*: 
  - CommunitiesColumn.jsx: Community content.

These components are combined to form the application's pages, ensuring reusability and maintainability.

## GitHub Repository

The source code for this project : https://github.com/SivaprakashAB/Reat-twitter-clone

## Getting Started

### Prerequisites

- *npm or Yarn*: Package manager for installing dependencies

### Installation

1. Clone the repository:
   bash
   git clone [your-repository-url]
   
2. Navigate to the project directory:
    bash
    cd [project-directory]
    
3. Install dependencies:
    bash
    npm install
    
4. Start the development server:
    bash
    npm run dev
    
The application will launch in your default browser at http://localhost:5173.

## Project Structure and Best Practices
### Folder Structure
bash
src/  
 ┣ components/  # All React components  
 ┃ ┣ Feed.css  
 ┃ ┣ Feed.jsx  
 ┃ ┣ RightSidebar.css  
 ┃ ┣ RightSidebar.jsx  
 ┃ ┣ Sidebar.jsx  
 ┃ ┣ Sidebar.css  
 ┣ pages/  # All React Pages  
 ┃ ┣ Community.css  
 ┃ ┣ Community.jsx  
 ┃ ┣ Explore.css  
 ┃ ┣ Explore.jsx  
 ┃ ┣ Notifications.css  
 ┃ ┣ Notifications.jsx  
 ┃ ┣ Profile.css  
 ┃ ┣ Profile.jsx  
 ┣ App.css  # Main application styles  
 ┣ App.js  
 ┣ App.jsx  # Root application component  
 ┣ main.jsx  # Entry point for React  
 ┣ index.css  
 ┣ index.js  
 ┣ styles.css  # CSS variables for consistent styling  


### Best Practices

- *Component-Based Architecture:*  Reusable components for modularity and simplify maintenance.
- *Responsive Design:* CSS media queries and flexible layouts ensure compatibility across devices.
- *Code Organization:* Components are grouped by feature, improving navigation and scalability.
- *Styling:* Custom CSS with Bootstrap Icons ensures a cohesive, modern interface.

### API/JSON Documentation

The application uses JSON files (posts.json, trending.json) in the data/ directory to store post data. Below is the structure of a post:
code
```json
[
  {
    "id": 1,
    "user": "John Doe",
    "handle": "@johndoe",
    "profilePic": "Cric.jpeg",
    "content": "Exploring the beauty of nature.",
    "category": "forYou",
    "likes": 10,
    "retweets": 2,
    "comments": [],
    "isRetweeted": false,
    "isLiked": false
  },
  {
    "id": 2,
    "user": "Jane Smith",
    "handle": "@janesmith",
    "profilePic": "cricket.jpeg",
    "content": "Excited for the new tech conference!",
    "category": "forYou",
    "likes": 8,
    "retweets": 1,
    "comments": [],
    "isRetweeted": false,
    "isLiked": false
  }
]
  These JSON files simulate an API, providing data for posts and user interactions.

Code: (trending.json)
```json
{
  "trendingTopics": [
    "#CSKvsRCB",
    "#SupremeCourtOfIndia",
    "#Budget2025",
    "#ArtificialIntelligence",
    "#TechTrends"
  ],
  "posts": [
    {
      "topic": "#CSKvsRCB",
      "posts": [
        {
          "id": 1,
          "user": "CricketFan23",
          "handle": "@cricketlover",
          "profilePic": "Cric.jpeg",
          "content": "What a thrilling match between CSK and RCB! Dhoni still got it. #CSKvsRCB",
          "likes": 120,
          "retweets": 40,
          "comments": []
        },
        {
          "id": 2,
          "user": "SportsGuru",
          "handle": "@sports_guru",
          "profilePic": "cricket.jpeg",
          "content": "RCB's bowling attack needs serious improvement. #CSKvsRCB",
          "likes": 95,
          "retweets": 30,
          "comments": []
        }
      ]
    }
  ]
}

### UI/UX Guidelines

- *Responsive Design:* Adapts to desktop, tablet, and mobile screens using CSS media queries.
- *Consistent Styling:* Custom CSS and Bootstrap Icons maintain a good look.
- *Interactive Elements:* Buttons for likes, retweets, replies, and bookmarks provide visual feedback.
- *Modal Views:* Detailed post information is displayed in modals for focused view.



### Contributing (Fork the repository): 

Create a feature branch:
bash
git checkout -b feature/Feature

Commit your changes:
bash
git commit -m 'Added <Feature>'

Push to the branch:
bash
git push origin feature/Feature

Open a Pull Request on GitHub.
