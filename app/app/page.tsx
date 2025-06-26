export default function MainAppPage() {
  return (
    <main className="min-h-screen flex bg-base text-text">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 border-r border-accent-1 p-4 hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Your Notes</h2>
        <ul className="space-y-2">
          <li className="hover:text-accent-1 cursor-pointer">Welcome Note</li>
          <li className="hover:text-accent-1 cursor-pointer">Project Ideas</li>
          <li className="hover:text-accent-1 cursor-pointer">Tasks</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Note Editor</h1>
          <button className="text-sm bg-accent-2 text-white px-4 py-2 rounded hover:bg-accent-1 transition">
            New Note
          </button>
        </header>

        <textarea
          className="w-full h-[400px] p-4 border border-accent-1 rounded-xl resize-none bg-white/80 text-text placeholder:text-text/60 focus:outline-none focus:ring-2 focus:ring-accent-1"
          placeholder="Start typing your note here..."
        />
      </section>
    </main>
  );
}
