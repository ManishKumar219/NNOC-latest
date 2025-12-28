import { useEffect, useState } from "react";

export function ImageSlider() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const fetchImages = async () => {
    try {
      const res = await fetch("https://r2-worker.photoslisting.workers.dev");
      const data = await res.json();
      const imageFiles = data.filter(item =>
        /\.(jpg|jpeg|png|webp|gif)$/i.test(item.url)
      );
      setImages(imageFiles);
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
  };

  if (!images.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="">


      <div className="relative w-full max-w-6xl mx-auto my-10 ">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
            Built by Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Our
            <span className="text-emerald-600"> Projects</span>
          </h2>

        </div>


        {/* Slides */}
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.name || `Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow"
          >
            ❯
          </button>
        </div>



        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-emerald-600" : "bg-white/70"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
