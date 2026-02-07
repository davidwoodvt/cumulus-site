import React from 'react';

// Molecular structure visualization
function MoleculeVisualization({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={`w-full h-full ${className}`}>
      {/* Glowing molecules */}
      <defs>
        <radialGradient id="glowGreen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="glowCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Molecular bonds */}
      <line x1="50" y1="50" x2="150" y2="100" stroke="#60a5fa" strokeWidth="2" opacity="0.6"/>
      <line x1="150" y1="100" x2="120" y2="170" stroke="#06b6d4" strokeWidth="2" opacity="0.6"/>
      <line x1="50" y1="50" x2="80" y2="150" stroke="#0284c7" strokeWidth="2" opacity="0.6"/>
      <line x1="80" y1="150" x2="150" y2="100" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/>
      
      {/* Atoms */}
      <circle cx="50" cy="50" r="8" fill="url(#glowGreen)" filter="url(#glow)"/>
      <circle cx="150" cy="100" r="10" fill="url(#glowCyan)" filter="url(#glow)"/>
      <circle cx="120" cy="170" r="7" fill="url(#glowGreen)" filter="url(#glow)"/>
      <circle cx="80" cy="150" r="8" fill="url(#glowCyan)" filter="url(#glow)"/>
      <circle cx="100" cy="80" r="6" fill="url(#glowGreen)" filter="url(#glow)" opacity="0.7"/>
    </svg>
  );
}

// Animated antibody illustration
function AntibodyVisualization({ className = "" }) {
  return (
    <svg viewBox="0 0 180 220" className={`w-full h-full ${className}`}>
      <defs>
        <radialGradient id="antibodyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
        </radialGradient>
        <filter id="antibodyFilter">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Y-shaped antibody structure */}
      {/* Left arm */}
      <circle cx="40" cy="60" r="12" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
      <path d="M 40 72 Q 35 110 30 150" stroke="#10b981" strokeWidth="8" fill="none" opacity="0.7"/>
      <circle cx="30" cy="160" r="10" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
      
      {/* Right arm */}
      <circle cx="140" cy="60" r="12" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
      <path d="M 140 72 Q 145 110 150 150" stroke="#10b981" strokeWidth="8" fill="none" opacity="0.7"/>
      <circle cx="150" cy="160" r="10" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
      
      {/* Center stem */}
      <path d="M 90 80 L 90 140" stroke="#06b6d4" strokeWidth="10" opacity="0.6"/>
      <circle cx="90" cy="150" r="12" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
      
      {/* Central joint */}
      <circle cx="90" cy="80" r="14" fill="url(#antibodyGlow)" filter="url(#antibodyFilter)"/>
    </svg>
  );
}

// Compound structure
function CompoundVisualization({ className = "" }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-full h-full ${className}`}>
      <defs>
        <radialGradient id="compoundGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
        </radialGradient>
        <filter id="compoundFilter">
          <feGaussianBlur stdDeviation="2"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Hexagon ring structure */}
      <polygon points="80,20 110,35 110,65 80,80 50,65 50,35" 
               stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.5"/>
      <polygon points="80,100 110,115 110,145 80,160 50,145 50,115" 
               stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.5"/>
      
      {/* Connection */}
      <line x1="80" y1="80" x2="80" y2="100" stroke="#60a5fa" strokeWidth="2" opacity="0.6"/>
      
      {/* Atoms */}
      <circle cx="80" cy="50" r="6" fill="url(#compoundGlow)" filter="url(#compoundFilter)"/>
      <circle cx="100" cy="60" r="5" fill="url(#compoundGlow)" filter="url(#compoundFilter)"/>
      <circle cx="80" cy="130" r="6" fill="url(#compoundGlow)" filter="url(#compoundFilter)"/>
      <circle cx="65" cy="100" r="5" fill="url(#compoundGlow)" filter="url(#compoundFilter)"/>
    </svg>
  );
}

// Animated cloud background component
function CloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating clouds using HTML/CSS */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animation: 'drift 20s ease-in-out infinite' }}></div>
      <div className="absolute top-40 right-20 w-40 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-15 blur-3xl" style={{ animation: 'drift-reverse 25s ease-in-out infinite' }}></div>
      <div className="absolute top-1/2 left-1/4 w-36 h-18 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl" style={{ animation: 'drift 30s ease-in-out infinite' }}></div>
      <div className="absolute bottom-40 right-1/3 w-48 h-24 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-12 blur-3xl" style={{ animation: 'drift-reverse 22s ease-in-out infinite' }}></div>

      {/* Drug development simulation - glowing particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const delay = Math.random() * 10;
          const duration = Math.random() * 6 + 8;
          const startX = Math.random() * 100;
          const startY = Math.random() * 60 + 20;
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 3 + 'px',
                height: Math.random() * 6 + 3 + 'px',
                left: startX + '%',
                top: startY + '%',
                background: `radial-gradient(circle, hsl(${Math.random() * 60 + 180}, 100%, 60%), hsl(${Math.random() * 60 + 180}, 100%, 30%))`,
                boxShadow: `0 0 ${Math.random() * 8 + 4}px hsl(${Math.random() * 60 + 180}, 100%, 60%)`,
                animation: `moleculeFloat ${duration}s ease-in infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(20px) translateY(-10px); }
        }
        @keyframes drift-reverse {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-30px) translateY(10px); }
        }
        @keyframes moleculeFloat {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(50px, -200px) scale(1); opacity: 0; }
        }
      `}</style>
      <CloudBackground />
      <div className="relative z-10">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <span className="text-2xl font-bold text-white">Cumulus</span>
          </div>
          <ul className="hidden md:flex gap-8">
            <li><a href="#capabilities" className="text-slate-300 hover:text-white transition">Capabilities</a></li>
            <li><a href="#partners" className="text-slate-300 hover:text-white transition">For Partners</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full">
              <span className="text-blue-400 text-sm font-semibold">AI-Enabled Biotech</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Drug Discovery
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> with AI</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Cumulus partners with Tier 1 Commercial R&D organizations to compress discovery timelines and accelerate the path to IND. Our AI-enabled platform turns months into weeks.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition font-semibold">
                Learn More
              </button>
              <button className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-slate-500 hover:bg-slate-800 transition font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-6 rounded-xl border border-blue-700/50 backdrop-blur-sm hover:border-blue-500/80 transition">
              <MoleculeVisualization />
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 p-6 rounded-xl border border-green-700/50 backdrop-blur-sm hover:border-green-500/80 transition">
              <AntibodyVisualization />
            </div>
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/30 p-6 rounded-xl border border-amber-700/50 backdrop-blur-sm hover:border-amber-500/80 transition">
              <CompoundVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "50%", label: "Faster Discovery", icon: "molecule" },
              { metric: "12 weeks", label: "To IND (vs 6+ months)", icon: "compound" },
              { metric: "100%", label: "AI-Powered Analysis", icon: "antibody" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-slate-900/60 backdrop-blur p-8 rounded-lg border border-slate-700/50 group-hover:border-blue-500/50 transition text-center">
                  <div className="w-20 h-20 mx-auto mb-4 opacity-60 group-hover:opacity-100 transition">
                    {stat.icon === 'molecule' && <MoleculeVisualization />}
                    {stat.icon === 'compound' && <CompoundVisualization />}
                    {stat.icon === 'antibody' && <AntibodyVisualization />}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.metric}</div>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
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
              description: "AI-driven identification of novel drug targets and research directions, reducing exploration cycles.",
              icon: "molecule"
            },
            {
              title: "Accelerated Compound Screening",
              description: "Machine learning models predict efficacy and safety profiles, dramatically narrowing candidate pools.",
              icon: "compound"
            },
            {
              title: "Real-Time Data Integration",
              description: "Seamless integration with existing R&D workflows and laboratory management systems.",
              icon: "antibody"
            },
            {
              title: "Regulatory Intelligence",
              description: "AI-powered insights into regulatory pathways, helping optimize IND applications and timelines.",
              icon: "molecule"
            }
          ].map((capability, i) => (
            <div key={i} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition overflow-hidden relative">
              {/* Background visualization */}
              <div className="absolute -right-20 -top-20 w-40 h-40 opacity-5 group-hover:opacity-10 transition">
                {capability.icon === 'molecule' && <MoleculeVisualization />}
                {capability.icon === 'compound' && <CompoundVisualization />}
                {capability.icon === 'antibody' && <AntibodyVisualization />}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center border border-blue-500/30">
                  <div className="w-12 h-12">
                    {capability.icon === 'molecule' && <MoleculeVisualization />}
                    {capability.icon === 'compound' && <CompoundVisualization />}
                    {capability.icon === 'antibody' && <AntibodyVisualization />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-slate-400 leading-relaxed">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-slate-800/50 border-y border-slate-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Built for Commercial R&D</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
            Cumulus is designed specifically for Tier 1 pharmaceutical and biotech organizations looking to gain competitive advantage through AI-accelerated discovery.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Proven Results", desc: "Demonstrated impact on discovery timelines and research efficiency", icon: "molecule" },
              { title: "Enterprise Scale", desc: "Built for large-scale operations and complex R&D portfolios", icon: "compound" },
              { title: "Confidential", desc: "Secure, private infrastructure for sensitive research data", icon: "antibody" }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 hover:border-blue-500/50 transition">
                <div className="w-16 h-16 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition">
                  {item.icon === 'molecule' && <MoleculeVisualization />}
                  {item.icon === 'compound' && <CompoundVisualization />}
                  {item.icon === 'antibody' && <AntibodyVisualization />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          {/* Background molecules */}
          <div className="absolute -right-32 -top-32 w-64 h-64 opacity-10">
            <MoleculeVisualization />
          </div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 opacity-10">
            <CompoundVisualization />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Discovery?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join leading R&D organizations using Cumulus to compress discovery timelines and accelerate the path to IND.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition font-semibold text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Cumulus</h3>
              <p className="text-slate-400">AI-enabled biotech accelerating drug discovery.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Team</a></li>
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
      </div>
    </main>
  );
}
