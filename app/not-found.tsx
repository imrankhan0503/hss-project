import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen px-6 flex items-center justify-center bg-background text-primary">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-semibold"> Oops! This page is still sailing the seas 🌊</h2>
          <p className="mt-4 text-sm opacity-80"> The page you're looking for doesn't exist yet — or it is coming soon.</p>
          <div className="mt-8">
            <Link href="/" className="px-6 py-3 rounded-full bg-primary text-background font-semibold">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound;