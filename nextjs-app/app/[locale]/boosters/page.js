import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Newsletter from "@/components/Newsletter";

function page({ params: { locale } }) {
  return (
    <main>
      <div className="h-screen w-full bg-slate-900"></div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
