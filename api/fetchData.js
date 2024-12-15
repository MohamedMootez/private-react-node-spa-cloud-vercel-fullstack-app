import bodyParser from "body-parser";

// Helper function to parse JSON body
const jsonParser = bodyParser.json();

export default function handler(req, res) {
  // Use the JSON parser middleware
  jsonParser(req, res, (err) => {
    if (err) {
      // Handle JSON parsing errors
      console.error("Error parsing JSON:", err);
      return res.status(400).json({ error: "Invalid JSON payload" });
    }

    if (req.method === "GET") {
      // Handle GET requests
      return res.status(200).json({
        message: "Hello, Bitches, I'm back with an answer from the Axios POST.",
      });
    } else if (req.method === "POST") {
      // Handle POST requests
      const { name, email } = req.body; // Destructure fields from parsed body

      // Validate required fields
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");

      if (missingFields.length > 0) {
        // Respond with validation errors
        return res.status(400).json({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        });
      }

      // Respond with a success message
      return res.status(200).json({
        message: `Thank you for registering in our culinary school, ${name}!`,
      });
    } else {
      // Handle unsupported methods
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  });
}
