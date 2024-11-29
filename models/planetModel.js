import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    distancefromsunkm: {
      type: Number,
      required: true,
    },
    distancefromearthkm: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets",planetSchema)

export default planetModel