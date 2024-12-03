import Header from './components/Header';
import Quote from './components/Quote';
import WeddingImage from './components/WeddingImage';
import Letter from './components/Letter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Quote />
      <WeddingImage />
      <Letter />
      
      <footer className="text-center py-8 text-rose-400 bg-rose-50">
        <p>Created with love for Farah ♥</p>
      </footer>
    </div>
  );
}