import { fetchFromApi } from "$lib/utils/api";

export const load = async ({ fetch }) => {
  try {
    const query = {
      query: "site.title",
    };
    const data = await fetchFromApi(fetch, query);

    // Return the parsed data and status to be used by the frontend
    return { title: data.result, status: data.status };
  } catch (error) {
    // Log error
    console.error("Error loading data in +page.js:", error);

    return { title: { status: "error" }, error: error.message };
  }
};
