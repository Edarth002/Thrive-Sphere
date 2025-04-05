export const fetchCourses = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses`
    );
    const data = res.json;
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("Failed to fetch courses because: ", error);
    throw new Error("Failed to fetch courses because: ", error);
  }
};
