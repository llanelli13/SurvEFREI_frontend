import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Surveys from "./Surveys";


const Home = () => {
  return (
    <Layout>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="surveys" element={<Surveys />} />
      </Routes>
    </Layout>
  );
};

export default Home;
