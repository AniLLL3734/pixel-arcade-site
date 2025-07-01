import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

// YENİ: Dikey reklamları gösterecek bir bileşen (component) oluşturuyoruz.
const SkyscraperAd: React.FC = () => {
  const adCode = `
    <script type="text/javascript">
      atOptions = {
        'key' : 'bb5da6242a0c4d8cc0f9a63b915bc35a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bb5da6242a0c4d8cc0f9a63b915bc35a/invoke.js"></script>
  `;

  // React'in script kodunu güvenli bir şekilde render etmesini sağlıyoruz.
  return <div dangerouslySetInnerHTML={{ __html: adCode }} />;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-charcoal min-h-screen text-gray-200 font-nunito flex flex-col">
        <Header />
        
        {/* === YENİ YAPI: Ana İçerik ve Kenar Reklamları === */}
        <div className="flex-grow w-full max-w-screen-2xl mx-auto flex justify-center">
        
          {/* Sol Kenar Reklamı */}
          <aside className="hidden xl:block w-40 flex-shrink-0 pt-8">
            <div className="sticky top-20">
              <SkyscraperAd />
            </div>
          </aside>

          {/* Ana İçerik Alanı */}
          <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games/:slug" element={<GamePage />} />
            </Routes>
          </main>

          {/* Sağ Kenar Reklamı */}
          <aside className="hidden xl:block w-40 flex-shrink-0 pt-8">
             <div className="sticky top-20">
               <SkyscraperAd />
             </div>
          </aside>
          
        </div>
        {/* === YENİ YAPI BİTİŞİ === */}

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;