export default function About() {
  return (
    <section className="relative bg-linear-to-r from-cyan-600 to-blue-600 text-white py-20 px-4 overflow-hidden mt-18">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-cyan-300">LuxTrip</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Crafting extraordinary travel experiences since 2010. Your journey to luxury starts here.
            </p>
          </div>
        </div>
      </section>
  );
}
