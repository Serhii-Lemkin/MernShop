import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="text-center mb-1">
      Serhii Lemkin, the CEO of SHCPI (Serhii's Home Coutch Potato Industries).
      <br /> All Rights Reserved © 2023
      <br />
      <Link to="/contact-info">Contact us!</Link>
    </div>
  );
}
export default Footer;
