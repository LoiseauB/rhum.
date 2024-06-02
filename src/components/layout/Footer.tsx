import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-secondary p-3 flex justify-center gap-2">
    <Link to="#">Contact</Link>
    <Link to="#">Plan du site</Link>
    <Link to="/legals">Mentions légales</Link>
  </footer>
);

export default Footer;
