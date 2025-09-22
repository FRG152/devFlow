import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import SidebarLeft from "@/components/navigation/sidebarLeft";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="flex justify-between">
        <SidebarLeft />
        {children}
        <RightSidebar />
      </section>
    </main>
  );
};

export default RootLayout;
