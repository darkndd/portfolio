import Sidebar from "../components/Sidebar";
import TabContainer from "../components/TabContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] py-8 pb-24 md:py-12 lg:py-20 px-4 md:px-8 max-w-[1200px] mx-auto">
      {/* vCard Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        {/* Active Content Window (Client Component) */}
        <TabContainer />

      </div>
    </main>
  );
}
