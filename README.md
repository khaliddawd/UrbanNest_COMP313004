# UrbanNest_COMP313004/ Final project 
UrbanNest - Real Estate Web Application
UrbanNest is a comprehensive real estate platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse, search, and list properties for rent or sale. The app provides an intuitive user interface, seamless user authentication, and a rich search functionality.

Technologies Used
Backend: Node.js, Express.js
Database: MongoDB
Frontend: React.js
Features
Property Listings: Users can view a wide array of properties, complete with detailed information, prices, locations, and descriptions.
Advanced Search: Customize searches based on property type (sale/rent), amenities, price range, location, and more.
User Profiles: Register and manage user profiles with the ability to add or update listings.
Authentication: Secure registration and login, with Google OAuth integration for seamless access.
Booking Visits: Users can select preferred dates to schedule property visits.
Maps Integration: Interactive maps show property locations and nearby amenities for a comprehensive understanding of the neighborhood.
Favorites: Users can save properties they are interested in by marking them as favorites.
Installation and Setup
To get started with UrbanNest, follow these steps to set up the application on your local machine:

1. Clone the Repository
Clone the project repository from GitHub:
git clone https://github.com/khaliddawd/UrbanNest_COMP313004.git

2. Install Server Dependencies
Navigate to the project directory and install the server-side dependencies:
cd UrbanNest_COMP313004
npm install

3. Install Client Dependencies
Go to the client directory and install the frontend dependencies:
cd client
npm install

4. Set Up Environment Variables
Create a .env file in the root directory of the project and add the following configuration settings:
MONGO_URI = "Your MongoDB Connection String"
JWT_SECRET = "Your Secret Key for JWT"
"Replace "Your MongoDB Connection String" with your actual MongoDB URI, and "Your Secret Key for JWT" with a secret string for JSON Web Token authentication."

5. Start the Development Server
Run the following command to start both the server and the React frontend:
npm run dev

This will start the development server and the client-side React app. By default, the backend will run on http://localhost:5000, and the frontend will be available at http://localhost:3000.

![UrbanNest Preview](https://raw.githubusercontent.com/khaliddawd/UrbanNest_COMP313004/main/UrbanNest.jpg)






