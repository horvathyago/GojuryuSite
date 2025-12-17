import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Schedule from '../components/home/Schedule';

const HomePage = () => {
  return (
    <div className="bg-[#333333] min-h-screen font-sans text-gray-200">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Our Philosophy</h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-400">
            Karate-do is a lifelong journey of discipline, respect, and self-mastery. 
            Our dojo focuses on the Gojuryu style, combining hard and soft techniques 
            to develop both physical power and mental tranquility. We provide a 
            professional environment for practitioners of all levels to reach their potential.
          </p>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shrink-0">
                <div className="border-2 border-red-700 w-full h-full rounded-full flex items-center justify-center text-red-700 font-bold italic text-2xl">拳</div>
            </div>
            <p className="text-xs italic text-gray-400 leading-relaxed">
              "The ultimate aim of Karate lies not in victory or defeat, but in the perfection of the character of its participants."
            </p>
          </div>
        </section>

        <Schedule />
      </main>

      <section className="container mx-auto px-12 pb-20">
         <h2 className="text-2xl font-bold uppercase mb-8 tracking-widest">Success Stories</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#222222] h-32 flex items-center p-4 gap-4 border-l-4 border-red-700">
                <div className="w-16 h-16 bg-gray-600 shrink-0"></div>
                <p className="text-[10px] uppercase italic text-gray-300">"Karate changed my discipline and focus. The best decision for my health."</p>
            </div>
            <div className="bg-[#222222] h-32 flex items-center p-4 gap-4 border-l-4 border-red-700">
                <div className="w-16 h-16 bg-gray-600 shrink-0"></div>
                <p className="text-[10px] uppercase italic text-gray-300">"The best environment for martial arts training in the city."</p>
            </div>
            <div className="flex items-center text-xs text-gray-500 italic px-4">
                Our dojo has trained over 500 black belts since 2005. Join our legacy.
            </div>
         </div>
      </section>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60 gap-4">
            <div className="flex gap-4">
                <span>Facebook / Gojuryu</span>
                <span>Instagram / @karate</span>
            </div>
            <div className="text-center">1018.6 New Way, Suite 333 - Karate Center</div>
            <div>Contact: (555) 433-222</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;