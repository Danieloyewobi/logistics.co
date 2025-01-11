// Reusable Button Component
function Button({ children }) {
    return (
      <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-gray-200">
        {children}
      </button>
    );
  }
  
  // Heroone Component
  function Heroone() {
    return (
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to LogisticsCo
          </h1>
          <p className="text-base md:text-lg mb-6 text-blue-200">
            Reliable, secure, and fast logistics solutions tailored to your needs.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    );
  }
  
  export default Heroone;
  