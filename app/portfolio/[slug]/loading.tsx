export default function Loading() {
  return (
    <main className="min-h-screen bg-white text-[#2D2433]">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="h-4 w-28 animate-pulse rounded-full bg-pink-100" />
        <div className="mt-6 h-12 w-full max-w-3xl animate-pulse rounded-2xl bg-pink-50 sm:h-20" />
        <div className="mt-6 h-5 w-full max-w-2xl animate-pulse rounded-full bg-pink-50" />
        <div className="mt-10 aspect-[16/9] w-full animate-pulse rounded-[28px] bg-pink-50" />
      </div>
    </main>
  );
}
