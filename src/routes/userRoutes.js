const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Michael Jordan", sport: "Basketball" },
  { id: 2, name: "Brett Lee", sport: "Cricket" },
  { id: 3, name: "Rafael Nadal", sport: "Tennis" },
];

router.use((req, res, next) => {
  console.log("User Route Accessed");
  next();
});

router.get("/", (req, res) => {
  const sport = req.query.sport;
  if (sport) {
    const filteredUsers = users.filter((user) => user.sport === sport);
    res.json(filteredUsers);
  } else {
    res.json(users);
  }
});

router.get("/:id", (req, res) => {
  //If user goes to /
  const userId = parseInt(req.params.id, 10);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

module.exports = router;