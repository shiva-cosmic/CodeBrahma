  import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
  import { useEffect, useState } from "react";
  import SyntaxHighlighter from "react-syntax-highlighter";
  import { codeExamples, floatingCards } from "../data/CodeExamples";
  import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

  export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState("App.jsx");

    useEffect(() => {
      function handleMouseMove(e) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const currentFloatingCard = floatingCards[activeTab];

    return (
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">

        {/* NEW: Purple/orange glow following mouse */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.2), transparent 50%)`,
          }}
        />

        {/* NEW background blobs */}
        <div className="absolute top-24 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto text-center relative w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>
              {/* New badge style */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600/20 border border-purple-300/20 rounded-full mb-6 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-purple-200">Introducing Code Brahma</span>
              </div>

              {/* NEW gradient headings */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Code Smarter
                </span>
                <span className="block bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">
                  Build Faster
                </span>
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 bg-clip-text text-transparent">
                  With Code Brahma
                </span>
              </h1>

              {/* NEW paragraph spacing + color */}
              <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                Boost your workflow with intelligent code suggestions, auto-debugging,
                and real-time optimization. Create production-grade apps effortlessly.
              </p>

              {/* Buttons updated */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">

                <button className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                  Start Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button className="group px-8 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-semibold text-white transition-all hover:bg-white/20 flex items-center gap-2">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Play className="w-4 h-4" />
                  </div>
                  Demo Video
                </button>

              </div>
            </div>

            {/* RIGHT SIDE – IDE */}
            <div className="relative w-full">
              <div className="bg-white/10 rounded-2xl p-5 shadow-2xl border border-white/10 backdrop-blur-xl">

                <div className="bg-gray-900/40 border border-white/10 rounded-lg overflow-hidden h-[350px] lg:h-[450px]">

                  {/* New IDE header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-gray-300 text-sm">Code Brahma</span>
                    </div>

                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* Tabs style changed */}
                  <div className="flex space-x-3 px-4 py-2 bg-black/10 border-b border-white/5 overflow-x-auto">

                    {["App.jsx", "Hero.jsx", "Navbar.jsx"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-md text-sm transition ${
                          activeTab === tab
                            ? "bg-purple-600/30 text-white border border-purple-300/20"
                            : "text-gray-300 hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}

                  </div>

                  {/* Code section */}
                  <div className="p-4 h-full overflow-auto">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        background: "transparent",
                        fontSize: "12px",
                        lineHeight: "1.5",
                        borderRadius: "8px",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>

                </div>

                {/* Floating card unchanged except color */}
                <div
                  className={`hidden lg:block absolute bottom-4 right-4 w-72 ${currentFloatingCard.bgColor} rounded-lg p-4 backdrop-blur-xl border border-white/20 shadow-xl`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-7 h-7 ${currentFloatingCard.iconColor} rounded-md flex items-center justify-center`}>
                      {currentFloatingCard.icon}
                    </div>
                    <span className={`text-sm font-semibold ${currentFloatingCard.textColor}`}>
                      {currentFloatingCard.title}
                    </span>
                  </div>

                  <p className={`text-sm ${currentFloatingCard.contentColor}`}>
                    {currentFloatingCard.content}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
