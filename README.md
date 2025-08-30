Mini Property Listing Dashboard

This project is a dynamic frontend application built with React and Vite as part of a skills assessment. It features a dashboard to display, filter, and manage property listings, backed by a mock API using json-server.

Features
View Property Listings: Fetches and displays a list of properties from a mock API upon loading.

Card Layout: Each property is displayed in a clean, modern card format with key details.

Search Functionality: Users can search for properties by name or location in real-time.

Filter by Type: Allows users to filter the listings by property type (e.g., Plot, Shed, Retail Store).

Add New Property: A dedicated form allows users to add new properties to the list. The list updates dynamically upon submission without a page refresh.

View Details Modal: Clicking the "View" button on any property opens a modal with an image and full description.

Tech Stack
Frontend: React, Vite

Styling: CSS with modern layout techniques (Grid)

API Mocking: json-server

HTTP Client: Axios

Setup and Running the Project
To run this project locally, you will need to run the Vite development server and the json-server mock API in two separate terminals.

Prerequisites
Node.js (v18 or newer)

npm

1. Clone the Repository
git clone <your-repo-url>
cd property-listing-dashboard

2. Install Dependencies
npm install

3. Run the Mock API Server
This server will provide the data from the db.json file.

npx json-server --watch db.json --port 3001

The API will be available at http://localhost:3001/properties.

4. Run the React Application
In a new terminal, start the Vite development server.

npm run dev

The application will be available at http://localhost:5173.

