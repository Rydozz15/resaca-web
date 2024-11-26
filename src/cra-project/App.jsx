import React from "react";
import {
  Beer,
  Terminal,
  Ghost,
  MessageSquare,
  Coffee,
  Skull,
  Binary,
  Shield,
  Webhook,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix-style rain effect overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2940')] bg-cover mix-blend-overlay"></div>

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <Beer className="w-24 h-24 animate-bounce" />
              <Terminal className="w-12 h-12 absolute -right-4 -bottom-4 text-purple-500" />
            </div>
            <h1 className="text-6xl font-bold glitch-text">RESACA</h1>
            <p className="text-xl text-purple-400">
              Donde el código fluye y la cerveza también
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-black/50 p-6 rounded-lg border border-green-500 hover:border-purple-500 transition-all group">
            <Shield className="w-12 h-12 mb-4 group-hover:text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Ciberseguridad Chill</h3>
            <p className="text-gray-400">
              Aprende mientras te diviertes. Sin corbatas, sin estrés, solo
              conocimiento y buena onda.
            </p>
          </div>
          <div className="bg-black/50 p-6 rounded-lg border border-green-500 hover:border-purple-500 transition-all group">
            <Ghost className="w-12 h-12 mb-4 group-hover:text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Comunidad Fantasma</h3>
            <p className="text-gray-400">
              Como los exploits 0-day, aparecemos cuando menos lo esperas.
            </p>
          </div>
          <div className="bg-black/50 p-6 rounded-lg border border-green-500 hover:border-purple-500 transition-all group">
            <Coffee className="w-12 h-12 mb-4 group-hover:text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Café && Schop</h3>
            <p className="text-gray-400">
              Para los bugs de día y las vulnerabilidades de noche.
            </p>
          </div>
        </div>

        {/* Easter Egg Section - Hidden message in binary when hovering */}
        <div className="text-center mb-20">
          <div className="inline-block relative cursor-help group">
            <Binary className="w-16 h-16 mx-auto mb-4" />
            <span className="hidden group-hover:block absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 px-4 py-2 rounded text-xs">
              01010000 01100001 01110000 01100001 01110011 00100000 01000110
              01110010 01101001 01110100 01100001 01110011
            </span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto text-center bg-black/70 p-8 rounded-lg border border-purple-500">
          <h2 className="text-3xl font-bold mb-6">Únete al Webeo</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/yourlink"
              className="hover:text-purple-400 transition-colors"
            >
              <MessageSquare className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Webhook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Skull className="w-8 h-8" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            * No nos hacemos responsables por las resacas del día siguiente
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>rm -rf /hangovers/* && chmod +x beer.sh</p>
      </footer>
    </div>
  );
}

export default App;
