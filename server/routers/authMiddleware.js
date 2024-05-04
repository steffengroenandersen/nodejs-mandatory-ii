export const adminAuth = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user.role !== "admin") {
      return res.status(401).send({ error: "Unauthorized" });
  }
  next();
};