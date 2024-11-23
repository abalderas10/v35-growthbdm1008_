import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgenteBD from '@/components/AgenteBD';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AgenteBD />
    </div>
  );
}