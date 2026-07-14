export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  );
}
