import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CoursesIndex from "./pages/CoursesIndex";
import CourseDetail from "./pages/CourseDetail";
import TeachersIndex from "./pages/TeachersIndex";
import TeachersMale from "./pages/TeachersMale";
import TeachersFemale from "./pages/TeachersFemale";
import FeeStructure from "./pages/FeeStructure";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<CoursesIndex />} />
          <Route path="courses/:slug" element={<CourseDetail />} />
          <Route path="teachers" element={<TeachersIndex />} />
          <Route path="teachers/male" element={<TeachersMale />} />
          <Route path="teachers/female" element={<TeachersFemale />} />
          <Route path="fee-structure" element={<FeeStructure />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
