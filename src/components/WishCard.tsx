interface WishCardProps {
  title: string;
  description: string;
}

export default function WishCard({ title, description }: WishCardProps) {
  return (
    <div className="p-6 bg-rose-50 rounded-lg border border-gold-200 hover:shadow-lg transition-shadow duration-300">
      <h4 className="font-semibold text-xl mb-2 text-rose-500">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}