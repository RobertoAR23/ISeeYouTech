const sessionMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    next();
  } else {
    return res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = sessionMiddleware;
