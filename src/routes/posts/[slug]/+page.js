import { fetchFromApi } from "$lib/utils/api";

export const load = async ({ params, fetch }) => {
  try {
    const query = {
      query: `page('notes/${params.slug}')`,
      select: {
        title: "page.title",
      },
    };
    const data = await fetchFromApi(fetch, query);

    // Return the parsed data and status to be used by the frontend
    return { post: data.result, status: data.status };
  } catch (error) {
    // Log error
    console.error("Error loading data in +page.js:", error);

    return { posts: { status: "error" }, error: error.message };
  }
};
