import { useState, useEffect } from 'react';

export default function WeddingImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-200 min-h-[200px] bg-rose-50">
        {!imageError ? (
          <img
            src="/farah-wedding.jpg"
            alt="Farah and her partner in traditional wedding attire, wearing beautiful floral garlands"
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-64 text-rose-400">
            Image could not be loaded
          </div>
        )}
      </div>
      {imageLoaded && (
        <p className="text-center text-rose-400 mt-4 italic font-serif">
          A beautiful moment captured in time - Farah and her partner in their traditional wedding attire
        </p>
      )}
    </div>
  );
}