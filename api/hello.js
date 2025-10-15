export default function handler(req, res) {
  const timestamp = new Date().toISOString();
  res.status(200).json({ 
    message: "This is a serverless function running on Vercel Cloud",
    timestamp: timestamp,
    environment: "Vercel Cloud Environment",
    status: "active"
  });
}
