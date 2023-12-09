import { error, json } from "@sveltejs/kit";
import { goto } from "$app/navigation";

export const POST = async ({ request, cookies }) => {
  console.log(request, 'reque');
  const data = await request.json();
  console.log(data, 'from');
  if (!data.username) {
    throw error(400, "email required");
  }
  if (!data.password) {
    throw error(400, "Password required");
  }

  cookies.set("token", "token", {
    path: "/",
  });
  return json({
    name: data.username,
    id: 1,
  });
};
