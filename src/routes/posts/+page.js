import { fetchFromApi } from "$lib/utils/api";

export const load = async ({ fetch }) => {
  try {
    const query = {
      query: "page('notes').children",
      select: {
        title: true,
        url: true,
      },
    };
    const data = await fetchFromApi(fetch, query);

    // Return the parsed data and status to be used by the frontend
    return { posts: data.result, status: data.status };
  } catch (error) {
    // Log error
    console.error("Error loading data in +page.js:", error);

    return { posts: { status: "error" }, error: error.message };
  }
};
