"use client";
const ErrorComponent = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4">
      <div className="text-red-500 text-xl font-semibold">
        Oops! Something went wrong.
      </div>
      {message && <p className="text-gray-600 mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default ErrorComponent;
