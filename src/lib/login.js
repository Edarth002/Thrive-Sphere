export const loginUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || "Login failed");
    }

    localStorage.setItem("token", data.jwt);
    localStorage.setItem("user", data.user);

    return { token: data.jwt, user: data.user };
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};
