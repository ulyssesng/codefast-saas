import mongoose from "mongoose";
import "./Board";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  },

  hasAccess: {
    type: Boolean,
    default: false,
  },
  // set to false by default and will be true after payment

  customerId: {
    type: String,
  },
  // unique identifier given by payment provider

  // planId would be used if multiple subscription plans are offered

  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
