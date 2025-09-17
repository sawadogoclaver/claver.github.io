import { useState, useEffect } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <main className="min-h-screen transition-colors duration-300">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>
        <button
          onClick={() => setDark((d) => !d)}
          className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-4">Présentation</h2>
        <p>
          Bonjour, je suis <b>Développeur Full-Stack</b> passionné par React,
          Next.js et DevOps 🚀
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-4">Compétences</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>React, Next.js, Tailwind CSS</li>
          <li>Node.js, Express, PostgreSQL</li>
          <li>Docker, Kubernetes, CI/CD</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-4">Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg dark:border-slate-700">
            <img src="/images/project1.jpg" alt="Projet 1" className="rounded mb-2" />
            <h3 className="font-semibold">Projet 1</h3>
            <p>Application web moderne.</p>
          </div>
          <div className="p-4 border rounded-lg dark:border-slate-700">
            <img src="/images/project2.jpg" alt="Projet 2" className="rounded mb-2" />
            <h3 className="font-semibold">Projet 2</h3>
            <p>Dashboard interactif.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message envoyé !");
          }}
          className="grid gap-4"
        >
          <input
            type="text"
            placeholder="Nom"
            className="p-2 border rounded dark:bg-slate-800 dark:border-slate-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded dark:bg-slate-800 dark:border-slate-600"
          />
          <textarea
            placeholder="Message"
            className="p-2 border rounded dark:bg-slate-800 dark:border-slate-600 h-24"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Envoyer
          </button>
        </form>
      </section>

      <footer className="text-center py-6 border-t dark:border-slate-700">
        © {new Date().getFullYear()} Mon Portfolio
      </footer>
    </main>
  );
}

