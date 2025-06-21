import { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    'https://i.pinimg.com/736x/4f/26/ce/4f26ce669e1c6d95c7f3a6f4b94a2599.jpg',
    'https://image.tmdb.org/t/p/original/qhHXBt9y24YHJOkmtfsmB7JtTBp.jpg',
    'https://image.tmdb.org/t/p/original/r0xS36paHndFpSlXKXMFNO1Fpv4.jpg'
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] min-h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Movies Like Never Before remybetty</h1>
                     welcome in cinebetty      <p className="text-xl text-gray-200 mb-8"></p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Watch now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
