export default function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json({ message: 'Hello, Bitches, M back  (GET)' });
  } else if (request.method === 'POST') {
    const body = request.body;
    // Process the request body here
    response.status(200).json({ message: `Received POST request with body: ${JSON.stringify(body)}` });
  } else {
    response.status(405).json({ error: 'Method Not Allowed' });
  }
}