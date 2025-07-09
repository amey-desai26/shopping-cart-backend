// notFound.js
// Middleware to handle 404 errors for unmatched routes

function notFound(req, res, next) {
  res.status(404).json({ message: "Route not found" });
}

module.exports = notFound;
