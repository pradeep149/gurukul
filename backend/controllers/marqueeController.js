import Marquee from "../models/Marquee.js";

export const getMarquee = async (req, res) => {
  try {
    let marquee = await Marquee.findOne();
    if (!marquee) {
      marquee = await Marquee.create({
        text: "‼️new CAT batch alert - starts on April 27 — Register now and get one week of classes free‼️",
        link: "#",
      });
    }
    res.json(marquee);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateMarquee = async (req, res) => {
  try {
    const { text, link } = req.body;
    let marquee = await Marquee.findOne();
    if (!marquee) {
      marquee = await Marquee.create({ text, link });
    } else {
      marquee.text = text;
      marquee.link = link;
      await marquee.save();
    }
    res.json(marquee);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
