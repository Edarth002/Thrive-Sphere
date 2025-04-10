import Header from "@/app/components/header";

export default function Onboarding() {
  const onboardingSteps = [
    {
      title: "Sign Up",
      description:
        "Create your account to get started on your learning journey.",
    },
    {
      title: "Log In",
      description: "Sign in to your account and get started",
    },
    {
      title: "Explore Courses",
      description: "Browse through 20+ free and premium courses.",
    },
    {
      title: "Subcribe",
      description:
        "Subscribe to a premuim plan and have access to all our courses, get recommendations and updates",
    },

    {
      title: "Start Learning",
      description: "Begin your lessons and track your progress.",
    },
    {
      title: "Contact",
      description:
        "Still have questions? Reach out to us at thrivesphere@gmail.com",
    },
  ];

  return (
    <div>
      <Header />
      <div className="p-16 bg-blue-50 w-full h-screen">
        <h1 className="text-blue-600 text-5xl font-bold mb-4 text-center">
          Welcome to Thrive-Sphere
        </h1>
        <p className="text-stone-500 text-xl mb-10 text-center">
          Let's walk you through how to get started
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {onboardingSteps.map((step, i) => (
            <div key={i} className="p-5 shadow-md rounded-2xl bg-white">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {step.title}
              </h2>
              <p className="text-stone-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
