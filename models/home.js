import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    typeofhome: {
      type: String,
      required: true,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    imageUrl: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);
export default Home;
