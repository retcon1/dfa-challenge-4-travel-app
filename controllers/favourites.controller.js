import User from "../models/user.model.js";

export const addFavourite = async (req, res) => {
  const { newFave } = req.body;
  if (!newFave || typeof newFave !== "string") {
    return res.status(400).json({ message: "Invalid favourite" });
  }

  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favourites.push(newFave);
    user.favourites.sort(); // keeps the array alphabetical

    await user.save();

    res.status(201).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};