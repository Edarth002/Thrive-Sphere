export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { userId, courseId, lessonId } = req.body;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/user-progresses`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 9dedcb45839ff67adee06203adb19165383cca2ba5c4ce40d03a1c7af3cdc0d6d4130c11cef15415079fd6a74ac535403e7abb64dd5501cdef0c5395071914d31dc698eb033bd36d00900a88a3f17ba0a690d39e0143c3a54475ec2401886a0fbd3e63080fb7b8587c8c1de8a959aeb2cf8573d8fb6c3976974b9cc8d01b2415`,
        },
        body: JSON.stringify({
          data: {
            user: userId,
            course: courseId,
            lesson: lessonId,
            status: "started",
            lastViewedAt: new Date().toISOString(),
          },
        }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Track error:", err);
    res.status(500).json({ error: "Tracking failed" });
  }
}
