export default function Footer() {
  return (
    <footer style={{
      borderTopColor: 'var(--border-color, #e4e4e7)',
      color: 'var(--foreground)',
    }} className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm opacity-70">
        © {new Date().getFullYear()} Thabang Ramathe • Built with Next.js
      </div>
    </footer>
  );
}
