const  About = () => {
  return (
    <div>
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445510861639-5651173bc5d5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaW5lbWElMjB0aGVhdGVyJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzQ3NzIzNTYwfDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About CineBetty</h1>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-6">
            CineBetty was founded in 2008 with a simple mission: to create the ultimate movie-going experience. What started as a single screen in downtown New York has grown into a beloved chain of premium cinemas across the country.
          </p>
          <p className="text-gray-300 mb-10">
            We believe that movies are meant to be experienced on the big screen, with state-of-the-art technology and unparalleled comfort. Each of our theaters is designed to immerse you in the magic of cinema, from the moment you step through our doors to the final credits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjaW5lbWElMjB0aGVhdGVyJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzQ3NzIzNTYwfDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800"
              alt="Cinema auditorium" 
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                At CineBetty, we're passionate about preserving and enhancing the theatrical experience in an age of streaming and home entertainment. We believe that nothing compares to the shared experience of watching a film in a theater, surrounded by fellow movie lovers.
              </p>
              <p className="text-gray-300">
                Our vision is to continue innovating and elevating the cinema experience, while honoring the timeless traditions that make movie-going special.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-secondary-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
              <p className="text-gray-400">
                We showcase a careful balance of blockbusters, independent films, classics, and special events to cater to all movie lovers.
              </p>
            </div>
            
            <div className="bg-secondary-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-gray-400">
                Our staff is passionate about movies and committed to making your visit memorable, from the box office to the concession stand.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-300 mb-10">
            CineBetty is powered by a dedicated team of film enthusiasts who are committed to delivering exceptional experiences. From our projectionists to our concessions staff, every member of our team plays a vital role in bringing the magic of cinema to life.
          </p>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team. If you love movies and providing exceptional service, we'd love to hear from you.
            </p>
            <button className="btn btn-primary">View Careers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
