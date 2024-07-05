import { Route, Routes } from "react-router-dom"
import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import HomePage from "./pages/HomePage"
import Login from "./components/auth/Login"
import OTP from "./components/auth/OTP"
import Signup from "./components/auth/Signup"
import AboutPage from "./pages/AboutPage"
import ContactUsPage from "./pages/ContactUsPage"
import CommingSoonPage from "./pages/CommingSoonPage"
import ScrollToTop from "./pages/ScrollToTop"


function App() {

  return (
    <>
      <div className="bg-gray-200" >

        <div className="w-11/12 mx-auto">

          <Navbar />
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/courses" element={<CommingSoonPage />} />
            {/* <Route path="/" element={<Signup />}/> */}
            {/* <Route path="*" element={<Error />} /> */}
            <Route />
            <Route />
          </Routes>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
