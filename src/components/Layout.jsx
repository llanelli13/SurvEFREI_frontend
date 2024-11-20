import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default Layout;
