export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FFFDFB]/35 backdrop-blur-[6px]"
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#E85D8E]/25 border-t-[#E85D8E]" />
        <span className="text-xs font-medium tracking-[0.18em] text-[#2D2433]/70">
          LOADING
        </span>
      </div>
    </div>
  );
}
