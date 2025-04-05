export const fetchCourses = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses?populate=thumbnail`
    );
    const data = res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Failed to fetch courses because: ", error);
    throw new Error("Failed to fetch courses because: ", error);
  }
};
