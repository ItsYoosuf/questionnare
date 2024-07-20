// controllers/newsController.js
// Assuming NewsSection.js is actually meant to be a controller, rename it appropriately or ensure it's being used correctly.
// Correct the import path if "NewsItem" is a model and ensure the file extension and casing are correct.
import NewsItem from "../models/NewsItem.js"; // Adjust the path as necessary

export async function getNewsItems(req, res) {
  try {
    const newsItems = await NewsItem.find();
    res.status(200).json(newsItems);
  } catch (error) {
    res.status(500).send(error);
  }
}