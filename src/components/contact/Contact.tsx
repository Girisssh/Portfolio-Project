import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            <ContactForm />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;