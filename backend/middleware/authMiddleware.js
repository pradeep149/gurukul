export const protect = (req, res, next) => {
  try {
    const isAdmin = req.user && req.user.role === "admin"; // Modify as needed
    if (!isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
