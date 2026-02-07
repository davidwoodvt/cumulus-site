export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <span className="text-2xl font-bold text-white">Cumulus</span>
          </div>
          <ul className="hidden md:flex gap-8">
            <li><a href="#capabilities" className="text-slate-300 hover:text-white transition">Capabilities</a></li>
            <li><a href="#partners" className="text-slate-300 hover:text-white transition">For Partners</a></li>
            <li><a href="#about" className="text-slate-300 hover:text-white transition">About</a></li>
          </ul>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition font-medium">
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold">AI-Enabled Biotech</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Accelerate Drug Discovery
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> with AI</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cumulus partners with Tier 1 Commercial R&D organizations to compress discovery timelines and accelerate the path to IND. Our AI-enabled platform turns months into weeks.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition font-semibold text-lg">
              Learn More
            </button>
            <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-slate-500 hover:bg-slate-800 transition font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "50%", label: "Faster Discovery" },
              { metric: "12 weeks", label: "To IND (vs 6+ months)" },
              { metric: "100%", label: "AI-Powered Analysis" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.metric}</div>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Powered by AI</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Intelligent Target Discovery",
              description: "AI-driven identification of novel drug targets and research directions, reducing exploration cycles."
            },
            {
              title: "Accelerated Compound Screening",
              description: "Machine learning models predict efficacy and safety profiles, dramatically narrowing candidate pools."
            },
            {
              title: "Real-Time Data Integration",
              description: "Seamless integration with existing R&D workflows and laboratory management systems."
            },
            {
              title: "Regulatory Intelligence",
              description: "AI-powered insights into regulatory pathways, helping optimize IND applications and timelines."
            }
          ].map((capability, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-slate-400 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-slate-800/50 border-y border-slate-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Built for Commercial R&D</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Cumulus is designed specifically for Tier 1 pharmaceutical and biotech organizations looking to gain competitive advantage through AI-accelerated discovery.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Proven Results", desc: "Demonstrated impact on discovery timelines and research efficiency" },
              { title: "Enterprise Scale", desc: "Built for large-scale operations and complex R&D portfolios" },
              { title: "Confidential", desc: "Secure, private infrastructure for sensitive research data" }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Discovery?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join leading R&D organizations using Cumulus to compress discovery timelines and accelerate the path to IND.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition font-semibold text-lg">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Cumulus</h3>
              <p className="text-slate-400">AI-enabled biotech accelerating drug discovery.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Platform</a></li>
                <li><a href="#" className="hover:text-white transition">Capabilities</a></li>
                <li><a href="#" className="hover:text-white transition">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-500">
              &copy; 2026 Cumulus. Confidential. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
