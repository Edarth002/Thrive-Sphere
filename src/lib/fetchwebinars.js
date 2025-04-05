export const fetchWebinars = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/webinars?populate=thumbnail`
    );
    const data = res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Failed to fetch webinars because: ", error);
    throw new Error("Failed to fetch webinars because: ", error);
  }
};
