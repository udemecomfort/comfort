const Footer = () => {
  return (
    <footer className="bg-black text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Comfort. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
