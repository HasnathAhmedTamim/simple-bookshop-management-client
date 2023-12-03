const Contact = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/book-4986.svg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">CP BOOK MANAGEMENT SYSTEM!</h1>
          <p className="py-6">Feel free to contact us</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns, feel free to reach out to us:
          </p>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 111111111</li>
            <li>Address: 123 Main Street, Cityville, Country</li>
          </ul>
          <p>
            Alternatively, you can fill out the form below, and we Will get back
            to you:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
