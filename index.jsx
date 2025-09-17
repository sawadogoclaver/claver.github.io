import React, { useState, useEffect } from "react";

// Portfolio page for Next.js (single-file component)
// Usage: place this file in `app/page.jsx` (Next 13 app router) or in `pages/index.jsx` (Next <13)

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // apply dark mode class to html root
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const projects = [
    {
      id: 1,
      title: "App de gestion de tâches",
      description:
        "Application full-stack pour gérer les tâches avec authentification, filtres et notifications.",
      image: "/images/project-tasks.jpg",
      tech: ["React", "Node.js", "Postgres"],
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce moderne",
      description: "Site e-commerce performant avec catalogue, panier et paiement (Stripe).",
      image: "/images/project-ecom.jpg",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#"
    },
    {
      id: 3,
      title: "Dashboard analytique",
      description: "Dashboard temps réel avec graphiques et alertes métier.",
      image: "/images/project-dashboard.jpg",
      tech: ["React", "D3", "Socket.io"],
      link: "#"
    }
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // demo: open mailto (no backend). For a real app, POST to an API route.
    const subject = encodeURIComponent("Contact portfolio - " + form.name);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:you@domain.com?subject=${subject}&body=${body}`;
    setStatus("Envoyé via le client mail (mailto). Pour un backend, remplacez par fetch('/api/contact')");
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Claver Sawadogo</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">Développeur Full-stack — React • Node • Kubernetes</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <a
            href="#contact"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 p-8">
            <h2 className="text-3xl font-bold mb-2">Bonjour — Je suis Claver</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Développeur Full-stack passionné par la création d'applications scalables et performantes. J'aime transformer des idées en produits réels avec une attention particulière à l'expérience utilisateur, la maintenabilité et les bonnes pratiques DevOps.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">Docker & Kubernetes</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article key={p.id} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-800">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 my-2">{p.description}</p>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a className="text-indigo-600 dark:text-indigo-400 text-sm" href={p.link}>Voir</a>
                    <a className="text-sm text-slate-500 dark:text-slate-400">+ détails</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
          <h4 className="font-semibold mb-3">Compétences</h4>
          <ul className="space-y-2 text-sm">
            <li>• Frontend : React, Next.js, Tailwind, TypeScript</li>
            <li>• Backend : Node.js, Express, PostgreSQL</li>
            <li>• DevOps : Docker, Kubernetes, CI/CD</li>
            <li>• Tests & Qualité : Jest, RTL, Cypress</li>
          </ul>

          <div className="mt-6">
            <h5 className="font-medium mb-2">Contact rapide</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">Email: <a href="mailto:you@domain.com" className="text-indigo-600">you@domain.com</a></p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Location: Ouagadougou, Burkina Faso</p>
          </div>
        </aside>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
              className="p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Votre email"
              className="p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Votre message"
              className="p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 sm:col-span-2 h-32"
            />

            <div className="sm:col-span-2 flex items-center justify-between">
              <button type="submit" className="px-5 py-2 bg-indigo-600 text-white rounded-md">Envoyer</button>
              <div className="text-sm text-slate-600 dark:text-slate-400">{status}</div>
            </div>
          </form>
        </div>
      </section>

      <footer className="mt-12 py-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Claver Sawadogo — Portfolio
        </div>
      </footer>
    </main>
  );
}
