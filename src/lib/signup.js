export const signUpUser = async ({ username, email, password }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      }
    );

    if (!res.ok) throw new Error("User already exists or an error occurred");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Unexplained error: ", error?.message?.data);
    throw new error();
  }
};
