import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center py-16 bg-gradient-to-b from-rose-50 to-white">
      <Heart className="w-12 h-12 mx-auto mb-6 text-rose-400 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
        Celebrating Farah
      </h1>
      <p className="text-xl md:text-2xl text-gold-500 italic">
        A Friend, A Guide, A Light
      </p>
    </header>
  );
}