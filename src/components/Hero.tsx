const  Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://i.pinimg.com/736x/4f/26/ce/4f26ce669e1c6d95c7f3a6f4b94a2599.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
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
