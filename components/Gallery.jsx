import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Gallery() {
  const { galleryImages } = siteData;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
            Visual Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Project Gallery
          </h2>
          <p className="text-gray-300 text-lg">
            Take a look at our project site plans, luxury villas, commercial spaces, and available properties in our diverse portfolio.
          </p>
        </div>

        {/* CSS Grid for masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((src, index) => {
            // Make some items span 2 rows or 2 cols to create a more dynamic gallery
            let spanClass = "";
            if (index === 0) spanClass = "md:col-span-2 md:row-span-2";
            else if (index === 3 || index === 7) spanClass = "md:row-span-2";
            else if (index === 6) spanClass = "md:col-span-2";

            return (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${spanClass} bg-gray-800`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-gold/90 text-navy font-semibold text-sm rounded shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
