const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 animate-pulse">
      {/* Logo shimmer */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-muted shimmer" />
        <div className="h-6 w-32 rounded-lg bg-muted shimmer" />
      </div>
      {/* Loading bar */}
      <div className="w-48 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-loading-bar" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
