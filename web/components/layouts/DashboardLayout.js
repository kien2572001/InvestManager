import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-secondary dark:bg-gray-900">
      <div className="w-[249px] h-screen border-r-[1px] border-[#e3ebf6]">
        <Sidebar />
      </div>
      <div className="w-full  flex flex-col items-center ">
        <div className="z-50 h-[71px] flex item-center bg-white w-full border-b-[1px] border-[#e3ebf6]">
          <Navbar />
        </div>
        <div className="w-full flex flex-col items-center ">
          {children}
        </div>
      </div>
    </div>
  );
}
