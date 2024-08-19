import { Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import "./App.css";
import AppHero from "./component/AppHero";
import Home from "./bodyComponent/Home";
import About from "./bodyComponent/About";
import Activities from "./bodyComponent/Activities";
import Events from "./bodyComponent/Events";
import News from "./bodyComponent/News";
import ImageGallery from "./gallaryComponent/ImageGallery";
import VideoGallery from "./gallaryComponent/VideoGallery";
import President from "./membersComponet/President";
import Secretary from "./membersComponet/Secretary";
import ExecutiveMember from "./membersComponet/ExecutiveMember";
import OthersMember from "./membersComponet/OthersMember";
import AkashMoni from "./malignComponent/AkashMoni";
import Mehogony from "./malignComponent/Mehogony";
import RainTree from "./malignComponent/RainTree";
import Shishu from "./malignComponent/Shishu";
import Ukelipotas from "./malignComponent/Ukelipotas";

import Footer from "./fotterComponent/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <AppHero />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/images-gallery" element={<ImageGallery />} />
          <Route path="/videos-gallery" element={<VideoGallery />} />
          <Route path="/fouder-member" element={<President />} />
          <Route path="/executive-member" element={<Secretary />} />
          <Route path="/general-member" element={<ExecutiveMember />} />
          <Route path="/division" element={<OthersMember />} />
          <Route path="/akash-moni" element={<AkashMoni />} />
          <Route path="/mehogony" element={<Mehogony />} />
          <Route path="/rain-tree" element={<RainTree />} />
          <Route path="/shishu" element={<Shishu />} />
          <Route path="/ukelipotas" element={<Ukelipotas />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
