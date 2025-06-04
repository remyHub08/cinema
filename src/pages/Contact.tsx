import  { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBwb3Bjb3JufGVufDB8fHx8MTc0NzcyMjg5MHww&ixlib=rb-4.1.0&fit=max&w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8"></p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">cinebetty@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">0795824236</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    Rutsiro<br />
                    Rwanda
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <table className="text-gray-400 w-full">
                <tbody>
                  <tr>
                    <td className="py-1 pr-4">Monday - Thursday</td>
                    <td>12:00 PM - 10:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Friday - Saturday</td>
                    <td>11:00 AM - 12:00 AM</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Sunday</td>
                    <td>12:00 PM - 10:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-secondary-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[400px] bg-secondary-light mt-8">
        {/* Google Maps would go here in a real implementation */}
        <div className="w-full h-full flex items-center justify-center bg-secondary-light">
          <p className="text-gray-400">Interactive Map Will Be Displayed Here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
