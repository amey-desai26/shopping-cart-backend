# Shopping cart API service

This is the Node.js/Express backend for the E-Shopping application. It provides RESTful APIs for product and cart management, supports CORS, and uses environment variables for configuration.

## Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/amey-desai26/shopping-cart-backend
   cd shopping-cart-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Backend Server**

   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

4. **API Endpoints**
   - Products: `GET /api/products`, `GET /api/products/:id`, `GET /api/products?search=...&sortBy=...&sortOrder=...`
   - Cart: `GET /api/cart`, `POST /api/cart`, `PUT /api/cart/:id`, `DELETE /api/cart/:id`

The backend will run by default on [http://localhost:3000](http://localhost:3000).

---

**Tip:**

- Make sure the backend is running before starting the Angular frontend.
  
