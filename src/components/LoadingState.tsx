
const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent" />
      </div>
      <p className="text-lg text-muted-foreground animate-pulse">
        Searching repository...
      </p>
    </div>
  );
};

export default LoadingState;
