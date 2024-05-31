import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full sm:pt-40 overflow-x-hidden pt-[8rem] custom-scrollbar max-sm:scrollbar-hidden">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
