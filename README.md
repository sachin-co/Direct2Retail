**Direct-to-Retails for Retail Stores
**
**Overview**
Direct-to-Retails for Retail Stores is a web application designed to facilitate the direct rental and management of retail rack space for businesses looking to display and sell their products in physical stores. Our platform connects retail store owners with companies seeking temporary or permanent space to showcase their products, enabling a streamlined and efficient rental process.

**Features**
User Registration and Authentication: Secure sign-up and login for both store owners and companies.
Rack Listing: Store owners can list available rack spaces with detailed descriptions, photos, and rental terms.
Search and Filter: Companies can search for rack spaces based on location, size, price, and other criteria.
Booking Management: An intuitive booking system for companies to reserve racks and for store owners to manage reservations.
Payment Integration: Secure payment gateway for processing rental fees.
Chat: Users can chat with store owners for racks and store experiences.
Notification System: Email and SMS notifications for booking confirmations, reminders, and updates.

**Technology Stack**
Frontend: React.js, HTML5, CSS3, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Payment Gateway: Razorpay
Deployment: Vercel, Render
Version Control: Git, GitHub

**Installation**
Prerequisites
Node.js
MongoDB

**Steps**
Clone the repository:
git clone https://github.com/sachin-co/Direct2Retail.git

**Install dependencies:**
npm install

**Configure environment variables:**
Create a .env file in the root directory and add the following:
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZOR_KEY=your_razorpay_key
RAZOR_SECRET=your_razorpay_secret_key

**Run the application:**
npm start

**Access the application:**
Open your web browser and navigate to http://localhost:3000.

**Usage**
For Store Owners
Register and Create Profile: Sign up and create a profile for your store.
List Rack Spaces: Add details of available racks including photos, size, price, and rental terms.
Manage Bookings: View and manage incoming booking requests from companies.

For Companies
Register and Create Profile: Sign up and create a company profile.
Search for Racks: Use the search and filter functionality to find suitable rack spaces.
Book and Pay: Reserve racks and make payments securely through the platform.
Manage Rentals: Track and manage all your bookings and rental agreements.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.
