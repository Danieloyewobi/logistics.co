import React from 'react';
import Navbar from './Navbar';

// Team Member Component
function TeamMember({ name, role, bio, image }) {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      <p className="text-gray-500 mt-2">{bio}</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Learn more about our company, our mission, and the team behind the services.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
        <p className="text-lg text-gray-700">
          At LogisticsCo, we strive to provide efficient, reliable, and secure logistics solutions
          that meet the diverse needs of our clients. Our vision is to revolutionize the logistics
          industry with innovative technologies and customer-first approaches.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Example Team Members */}
            <TeamMember
              name="John Doe"
              role="CEO"
              bio="John is the founder and CEO of LogisticsCo, with over 15 years of experience in the logistics industry."
              image="/path/to/john.jpg"
            />
            <TeamMember
              name="Jane Smith"
              role="CTO"
              bio="Jane is responsible for overseeing all technological operations at LogisticsCo."
              image="/path/to/jane.jpg"
            />
            <TeamMember
              name="Mark Johnson"
              role="COO"
              bio="Mark manages the day-to-day operations of LogisticsCo to ensure everything runs smoothly."
              image="/path/to/mark.jpg"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
        <ul className="text-lg text-gray-700">
          <li>Reliability: We ensure our services are dependable and timely.</li>
          <li>Innovation: We embrace technology to improve the logistics experience.</li>
          <li>Customer Satisfaction: Our clients are at the center of everything we do.</li>
          <li>Transparency: We believe in clear communication at all stages of the process.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch with Us</h2>
          <p className="mb-6">Have questions? Want to work with us? Reach out today!</p>
          <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-brown-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
