export async function sendEmail({ to, subject, message }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, text: message, html: message }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to send email: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error sending email", error);
    throw new Error("Error sending email");

    return { error: "Error sending Email" };
  }
}
