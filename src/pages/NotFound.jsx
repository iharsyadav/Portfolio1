import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-indigo-500 md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;