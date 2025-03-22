import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "amit@example.com",
    fullName: "Amit Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "prashant@example.com",
    fullName: "Prashant Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "hardeep@example.com",
    fullName: "Hardeep Jeet",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "simran@example.com",
    fullName: "Simran Pandey",
    password: "123456",
    profilePic: "https://unsplash.com/photos/woman-wearing-white-t-shirt-smiling-tNCH0sKSZbA",
  },
  {
    email: "arpit@example.com",
    fullName: "Arpit Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "rohit@example.com",
    fullName: "Rohit Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();