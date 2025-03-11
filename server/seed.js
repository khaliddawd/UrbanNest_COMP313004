import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// MongoDB Connection URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = "real_estate_db"; // Database Name
const collectionName = "Residency"; // Collection Name

// Read residency data from JSON file
const filePath = path.resolve('./data/residency.json');

if (!fs.existsSync(filePath)) {
  console.error('❌ Error: residency.json file not found.');
  process.exit(1);
}

const rawData = fs.readFileSync(filePath);
const residencies = JSON.parse(rawData);

// Seed Function
const seedDatabase = async () => {
  const client = new MongoClient(mongoURI);

  try {
    console.log("✅ Connecting to MongoDB...");
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    console.log("✅ Clearing existing residencies...");
    await collection.deleteMany({}); // Clears all existing data

    console.log("✅ Inserting new residency data...");
    await collection.insertMany(residencies.map(residency => ({
      title: residency.title,
      description: residency.description,
      price: residency.price,
      address: residency.address,
      city: residency.city,
      country: residency.country,
      image: residency.image,
      facilities: residency.facilities,
      userEmail: residency.userEmail,
      createdAt: residency.createdAt?.["$date"]
        ? new Date(residency.createdAt["$date"])
        : new Date(),
      updatedAt: residency.updatedAt?.["$date"]
        ? new Date(residency.updatedAt["$date"])
        : new Date(),
    })));

    console.log("🎉 Residency data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await client.close();
    process.exit(0);
  }
};

// ✅ Run the seeding function
seedDatabase();
