export async function fetchFromApi(fetch, query) {
  try {
    const response = await fetch("/api/query", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchFromApi:", error);
    throw error;
  }
}
