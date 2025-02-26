import mongoose from "mongoose";
const { Schema, model } = mongoose;
const MarqueeSchema = new Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
});

const Marquee = mongoose.model("Marquee", MarqueeSchema);

export default Marquee;
