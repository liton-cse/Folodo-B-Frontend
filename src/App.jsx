import { Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Header and Slider Import...
import Header from "./component/Header";
import AppHero from "./component/AppHero";

//Main Component....
import Home from "./bodyComponent/Home";
import About from "./bodyComponent/About";
import Activities from "./bodyComponent/Activities";
import SingleActivise from "./bodyComponent/SingleActivitise"
import Events from "./bodyComponent/Events";
import SingleEvent from "././bodyComponent/SingleEvent";
import News from "./bodyComponent/News";
import SingleNews from "./bodyComponent/SingleNews";

// Gallary component...
import ImageGallery from "./gallaryComponent/ImageGallery";
import SearchImage from "./gallaryComponent/SearchImage";
import VideoGallery from "./gallaryComponent/VideoGallery";
import SearchVideo from "./gallaryComponent/SearchVideo";

//Organization component...
import GeneralMember from "./membersComponet/GeneralMember";
import FounderMember from "./membersComponet/FounderMember";
import ExecutiveMember from "./membersComponet/ExecutiveMember";
import SearchMember from "./membersComponet/SearchMember";

//Malign Tree component...
import AkashMoni from "./malignComponent/AkashMoni";
import AkashMoniSingleData from "./malignComponent/AkashMoniSingleData";
import Mehogony from "./malignComponent/Mehogony";
import MehogonySingleCard from "./malignComponent/MehogonySingleData";
import RainTree from "./malignComponent/RainTree";
import RainTreeSingleData from "./malignComponent/RainTreeSingleData";
import Shisham from "./malignComponent/Shisham";
import ShishamTreeSingleData from "./malignComponent/ShishamTreeSingleData";
import Eucalyptus from "./malignComponent/Eucalyptus";
import EucalyptusSingleData from "./malignComponent/EucalyptusSingleData";

//Footer Component...
import Footer from "./fotterComponent/Footer";

// Rendering Full website by this rendering ....

function App() {
  return (
    <div>
      {/* Header Section or navbar component... */}
      <header>
        <Header />
      </header>
      <main>
        {/*Slider Or Carousel Component */}
        <AppHero />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activitise/:id" element={<SingleActivise/>}/>
          <Route path="/event" element={<Events />} />
          <Route path="/event/:id" element={<SingleEvent />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews/>}/>
          {/*Gallary Routing... */}
          <Route path="/images-gallery" element={<ImageGallery />} />
          <Route path="/search-image/:name" element={<SearchImage/>}/>
          <Route path="/videos-gallery" element={<VideoGallery />} />
          <Route path="/search-video/:name" element={<SearchVideo/>}/>
          {/*Organization Routing... */}
          <Route path="/founder-member" element={< FounderMember/>} />
          <Route path="/executive-member" element={<ExecutiveMember />} />
          <Route path="/general-member" element={<GeneralMember />} />
          <Route path = "/search/:name" element={<SearchMember/>}/>
          {/* malign Tree Routing...  */}
          <Route path="/akash-moni" element={<AkashMoni />} />
          <Route path="/akash-moni/:id" element={<AkashMoniSingleData />} />
          <Route path="/mehogony" element={<Mehogony />} />
          <Route path="/mehogony/:id" element={<MehogonySingleCard  />} />
          <Route path="/rain-tree" element={<RainTree />} />
          <Route path="/rain-tree/:id" element={<RainTreeSingleData />} />
          <Route path="/shisham" element={<Shisham />} />
          <Route path="/shisham/:id" element={<ShishamTreeSingleData />} />
          <Route path="/eucalyptus" element={<Eucalyptus />} />
          <Route path="/eucalyptus/:id" element={<EucalyptusSingleData />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
