import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/CMS/BlogList";
import BlogDetails from "./pages/CMS/BlogDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
