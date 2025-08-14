MyShop E-commerce Project
A simple e-commerce project built with a Node.js and Express.js backend and a pure HTML, CSS, and JavaScript frontend. This project demonstrates basic product display from an external API and a functional contact form that saves submissions to a local JSON file.

🚀 Features
Product Display: Dynamically displays a list of products on the product.html page by fetching data from a dummy API.

Contact Form: A functional contact form on the index.html page. Form data is sent to a Node.js backend.

Backend API: A simple Express.js server that receives form data and saves it to a local contacts.json file.

Responsive Design: The website uses Tailwind CSS for a fully responsive and modern user interface.

💻 Technologies Used
Frontend:

HTML5

CSS3 (Tailwind CSS)

JavaScript (ES6+)

Backend:

Node.js

Express.js

⚙️ Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need to have Node.js and npm installed on your computer. You can download them from the official Node.js website.

Installation
Clone the repository (if applicable) or download the project files.

Open your terminal or command prompt and navigate to the project's root directory.

Install the required Node.js packages by running the following command:

npm install

▶️ Running the Project
The project consists of a separate frontend and backend, both of which need to be run.

1. Start the Backend Server
In your terminal, make sure you are in the project's root directory.

Run the server using the node command:

node server.js

You should see a message in the terminal indicating that the server is running:
🚀 Server running on http://localhost:5000

2. View the Frontend
Now that the server is running, you can open the index.html file in your web browser.

For the contact form to work, ensure the script.js file has the correct URL: http://localhost:5000/contact.

📂 Project Structure
index.html: The main landing page with the contact form.

product.html: A page to display products.

login.html: The login page.

signup.html: The sign-up page.

script.js: Frontend JavaScript for fetching products and handling the contact form submission.

server.js: The Node.js and Express.js backend server.

contacts.json: The file where contact form submissions are saved.

package.json: Manages the project's dependencies and scripts.

package-lock.json: Records the exact versions of installed packages.
