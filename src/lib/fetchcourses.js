export const fetchCourses = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses`
    );
  } catch (error) {}
};
