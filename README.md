# E-Commerce Cart Platform

## Project Overview
This is a simple React-based e-commerce platform where users can:
- View a list of products fetched from an API.
- Add or remove items to/from a shopping cart.
- Increase or decrease the quantity of items in the cart.
- View a detailed cart summary, including price breakdown, discount, and total payable amount.
- Get visual notifications for actions such as adding or removing items from the cart.

## Features
- **Product Listing**: Fetches product data from [FakeStore API](https://fakestoreapi.com/) and displays it in a grid layout.
- **Search**: Allows users to search for products by title.
- **Cart Management**: Users can add products to the cart, adjust quantities, and remove items.
- **Notifications**: Visual notifications pop up when products are added to or removed from the cart.
- **Cart Summary**: Displays the total price, coupon discount, platform fee, shipping charges, and the final amount.

## Project Structure
The main files and folders are organized as follows:

Gdgc/ \
│
├── public/              # Public assets \
├── src/                 # Source code folder \
│   ├── assets/          # Static images, icons, etc. \
│   ├── components/      # React components \
│   │   ├── Cart.css     # Styles for the cart \
│   │   └── Cart.jsx     # Main cart functionality component \
│   ├── App.jsx          # Main app component \
│   ├── App.css          # Global styles \
│   ├── index.css        # CSS for the index.html \
│   └── main.jsx         # Application entry point \
├── .gitignore           # Git ignore rules \
├── eslint.config.js     # ESLint configuration \
├── index.html           # Main HTML file \
├── package.json         # Project dependencies and scripts \
├── package-lock.json    # Locks versions of installed dependencies \
└── vite.config.js       # Vite configuration file 
 

## Installation and Setup

### Prerequisites
Before running this project, ensure that you have:
- **Node.js** installed on your machine. You can download it [here](https://nodejs.org/).

### Step-by-step Instructions

1. **Clone the repository:**
   
   git clone <repository-url>
   cd REACT-HW
   

2. **Install dependencies:**
   Run the following command to install all necessary dependencies:

   npm install


3. **Run the application:**
   Once the dependencies are installed, start the application with:
   
   npm run dev

   This will start the Vite development server. The application should now be running at [http://localhost:3000](http://localhost:3000).

## Project Functionality Breakdown

### Cart Component (`Cart.jsx`)
This component handles the cart functionality. It includes:
- **State management** using React's `useState` for products, cart items, and notifications.
- **API call** using Axios to fetch product data.
- **Functions** to add, remove, and adjust product quantities in the cart.
- **Cart summary** calculation that includes MRP, discount, and total amount.
- **Visual notifications** for cart operations (added or removed items).

### Styling (`Cart.css`)
All custom styles for the cart component and related elements are handled in this file:
- **Dark Theme**: Background is set to `#121212` for a modern, minimal look.
- **Responsive Design**: Uses CSS Grid for the product list to adjust the layout based on the screen size.
- **Animation**: Notifications use `@keyframes` to show fade-in and fade-out effects.

### Notification System
The notification system is a simple message box that appears in the center of the screen whenever a user adds or removes an item from the cart. It automatically disappears after 3 seconds.

### Cart Summary
The cart summary includes:
- **Total MRP**: The sum of prices for all items in the cart.
- **Coupon Discount**: A flat discount of ₹100 applied to the total MRP.
- **Platform Fee**: Fixed platform fee of ₹30.
- **Shipping Charges**: Flat shipping fee of ₹10.
- **Total Payable**: Final amount after applying discount and adding platform and shipping fees.

## Future Enhancements
- **User Authentication**: Add login functionality for users to save their cart data.
- **Persistent Cart**: Store the cart data in `localStorage` so that users don't lose their cart when refreshing the page.
- **Responsive Design**: Improve responsiveness for mobile and tablet views.
- **Discount Coupons**: Allow users to input discount codes and dynamically apply different discount rates.

## Contributing
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.
