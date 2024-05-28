import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/CMS/BlogList";
import BlogDetails from "./pages/CMS/BlogDetails";
import Consultation from "./pages/Services/Consultation";
import Procurement from "./pages/Services/Procurement";
import Installation from "./pages/Services/Installation";
import Support from "./pages/Services/Support";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Layout>
  );
}

export default App;
