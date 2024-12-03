import WishCard from './WishCard';

export default function Letter() {
  const wishes = [
    { title: 'Laughter', desc: 'The kind that makes your cheeks hurt and your heart swell.' },
    { title: 'Love', desc: 'Deep, unconditional, and ever-growing.' },
    { title: 'Strength', desc: 'To weather life\'s challenges together, knowing you have each other.' }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif text-rose-500 mb-8 text-center">
        To Farah, My Dearest Friend
      </h2>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-6">
          Dear Farah,
        </p>
        <p className="mb-6">
          It's hard to put into words how much you mean to me. You've been more than just a friend—you've been a guide, 
          a mentor, and a source of unwavering support. Your kindness, your laughter, and your belief in me have carried 
          me through some of the toughest moments of my life.
        </p>
        <p className="mb-6">
          You have this incredible gift for making people feel seen, valued, and understood. You've shown me what it means 
          to truly care, to give without expecting anything in return, and to face challenges with grace and courage.
        </p>
        <p className="mb-12">
          Now, as you step into this new chapter with your partner, my heart is filled with joy for you. Marriage is a 
          celebration of love, trust, and shared dreams, and I know that you'll bring the same compassion and light into 
          this journey that you've brought into every aspect of your life.
        </p>

        <h3 className="text-2xl font-serif text-rose-500 mb-6">
          My Wishes for You and Your Partner
        </h3>
        
        <div className="grid gap-6 mb-12">
          {wishes.map((wish) => (
            <WishCard key={wish.title} title={wish.title} description={wish.desc} />
          ))}
        </div>

        <p className="mb-6">
          With all my love and best wishes,
        </p>
        <p className="text-xl font-serif text-gold-500">
          Ram
        </p>
      </div>
    </section>
  );
}