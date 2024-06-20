// Import environment variables
import { API_URL, API_USERNAME, API_PASSWORD } from "$env/static/private";

export const POST = async ({ request }) => {
  try {
    // Parse the JSON body of the incoming request
    const query = await request.json();

    // Create a base64-encoded authorization header
    const auth = btoa(`${API_USERNAME}:${API_PASSWORD}`);

    // Make a POST request to the external API with the parsed query and authorization headers
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        authorization: `Basic ${auth}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    });

    // Check if the response from the external API is not OK (status code not in 200-299 range)
    if (!response.ok) {
      // Throw an error with the status text from the response
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Parse the JSON body of the response
    const data = await response.json();

    // Return a new response with the parsed JSON data, status 200, and JSON content-type
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    // Log the error to the console
    console.error("Error in server.js POST:", error);

    // Return a new response with the error message, status 500, and JSON content-type
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};
