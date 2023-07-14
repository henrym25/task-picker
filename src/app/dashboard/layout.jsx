const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="border-2 border-red-50 h-24">
        <div className="border-2 border-blue-200 w-1/5 inline-block h-full">
          Logo
        </div>
        <div className="border-2 border-green-200 w-1/5 inline-block float-right h-full">
          <button className="border-2">Sign Up</button>
          <button className="border-2">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
