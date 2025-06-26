"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to NoteNest</h1>
      <p className="mb-6 max-w-xl">
        Organize your thoughts, notes, and projects in one powerful workspace.
      </p>
      <button
        onClick={() => router.push("/guide")}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </main>
  );
}
