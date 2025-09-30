import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section text-center">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you’re looking for does not exist.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}
