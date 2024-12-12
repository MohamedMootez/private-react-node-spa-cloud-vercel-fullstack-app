export default function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json({ message: 'Hello, Bitches, M back  (GET)' });
  } else if (request.method === 'POST') {
    const body = request.body;
    const name=body.name;
    // const email=body.email;



    // Process the request body here
    response.status(200).json({ message: `Thank you for Registering in our culinary school, ya mnayek , ${name}` });
  } else {
    response.status(405).json({ error: 'Method Not Allowed' });
  }
}