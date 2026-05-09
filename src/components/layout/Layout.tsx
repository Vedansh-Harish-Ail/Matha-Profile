import Header from './Header';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
