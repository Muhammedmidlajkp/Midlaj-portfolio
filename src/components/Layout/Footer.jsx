import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Muhammed Midlaj</p>
      <a href="#hero">Back to top</a>
    </div>
  </footer>
);

export default Footer;
