export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Sign In</h2>
        {/* TODO: Add Supabase Auth UI */}
        <button className="bg-indigo-500 text-white px-4 py-2 rounded w-full">Sign In with Google</button>
      </div>
    </div>
  );
}
