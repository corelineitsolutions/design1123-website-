import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function LegalPageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#faf8fc] via-white to-brand-plum/[0.04] pt-28 pb-20">
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -left-20 bottom-40 h-72 w-72 rounded-full bg-brand-flame/8 blur-3xl" />
        </div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
