import Header from "./Header";
import Footer from "./Footer";
import Hero10 from "../hero/hero-10";
import JobFeatured7 from "../job-featured/JobFeatured7";
import RecentJobs from "../job-featured/RecentJobs";
import BrowseUsaJobs from "../job-categories/BrowseUsaJobs";
import Blog3 from "../blog/Blog3";
import Candidates from "../candidates/Candidates";
import TopsJobs from "../job-featured/TopsJobs";
import FunFact from "../fun-fact-counter/Funfact";
import Testimonial5 from "../testimonial/Testimonial5";
import RegBanner2 from "../block/RegBanner2";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero10 />
      {/* <!-- End Banner Section--> */}

      <div className="fun-fact-section">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <FunFact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> */}


      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}


        <section className="job-section-five style-two">
            <div className="auto-container">
                <div className="row" data-aos="fade-up">
                    <div className="featured-column col-xl-9 col-lg-12 col-md-12 col-sm-12">
                        <div className="sec-title">
                            <h2>Featured Jobs</h2>
                            <div className="text">
                                Know your worth and find the job that qualify your life
                            </div>
                        </div>
                        {/* En .sect-title */}

                        <div className="outer-box">
                            <JobFeatured7 />
                        </div>
                        {/* En outer box */}
                    </div>
                    {/* End .featured-column */}


                </div>
                {/* End .row */}
            </div>
        </section>
        {/* <!-- End Job Section --> */}


      <section className="candidates-section alternate">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End .sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel home10">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
