export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      <div className="ml-2 text-gray-700 text-2xl font-bold">Loading...</div>
    </div>
  );
};
