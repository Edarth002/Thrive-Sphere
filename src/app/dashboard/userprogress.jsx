// components/UserProgress.js
const UserProgress = ({ userId }) => {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchProgress = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/user-progresses?filters[user][id][$eq]=${userId}&populate[lesson]=true&populate[course]=true`
      );
      const json = await res.json();
      setProgressData(json.data);
      setLoading(false);
    };

    fetchProgress();
  }, [userId]);

  if (loading) return <p>Loading progress...</p>;
  if (!progressData.length) return <p>No progress found.</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Your Lesson Progress</h2>
      {progressData.map((item) => (
        <div key={item.id} className="bg-white shadow rounded p-4 mb-3">
          <p>
            <strong>Course:</strong>{" "}
            {item?.attributes?.course?.data?.attributes?.title}
          </p>
          <p>
            <strong>Lesson:</strong>{" "}
            {item?.attributes?.lesson?.data?.attributes?.Name}
          </p>
          <p>
            <strong>Status:</strong> {item?.attributes?.status}
          </p>
          <p>
            <strong>Last Viewed:</strong>{" "}
            {new Date(item?.attributes?.lastViewedAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserProgress;
