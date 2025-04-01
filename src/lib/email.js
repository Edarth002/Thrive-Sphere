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

    const result = response.json();
    return result;
  } catch (error) {
    console.error(error, "Error sending email");

    return { error: "Error sending Email" };
  }
}
