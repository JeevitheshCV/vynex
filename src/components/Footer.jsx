export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)', padding: '2rem 0', textAlign: 'center' }}>
      <p style={{ color: 'var(--color-muted)' }}>
        &copy; {new Date().getFullYear()} VYNEX. All rights reserved.
      </p>
    </footer>
  );
}
