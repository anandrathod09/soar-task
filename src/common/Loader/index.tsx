const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loader;
