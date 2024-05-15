import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Shared/Header";
import TopBar from "../components/Shared/TopBar";
import "../css/Home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const HomePage = () => {
  //Hot Reload
  const handleReload = () => {
    window.location.href = '/design-tool';
  };

  const galleryRef = useRef(null); // Ref for the gallery section
  const [galleryImages, setGalleryImages] = useState([]);
  const firestore = getFirestore();
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
 const handleGalleryClick = () => {
    // Scroll to the gallery section when the link is clicked
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const querySnapshot = await getDocs(collection(firestore, "images"));
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push(doc.data());
      });
      setGalleryImages(images);
    };
    fetchGalleryImages();
  }, [firestore]);
  return (
    <>
      <TopBar />
      <Header />
      {/* Hero  */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-lg-start text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-8 text-lg-start">
              <h1>
                Bienvenue à, <span>Chardin</span>
              </h1>
              <h2>Davao's kind of luxurious and authenticity</h2>

              <div className="btns">
                <a
                  href="#gallery"
                  className="ml-0 btn-hero animated fadeInUp scrollto text-center text-lg-start"
                >
                  Our Gallery
                </a>
                <a
                  href="#designers"
                  className="btn-hero animated fadeInUp scrollto text-center text-lg-start"
                >
                  Our Designers
                </a>
                
              </div>
              
            </div>
            
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              // data-aos="zoom-in"
              // data-aos-delay="200"
            >
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=O6e48PitOIM&ab_channel=ABS-CBNNews"
                className="play-btn"
              ></a>
            </div>
          </div>
          
        </div>
        
      </section>

      <section ref={galleryRef} id="gallery" className="gallery mb-4">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Gallery</h2>
      <p>Check out our gallery</p>
    </div>

 <Slider {...settings}>
  {galleryImages.map((image, index) => (
    <div key={index} style={{ maxWidth: "100%", overflow: "hidden" }}>
      <img src={image.imageUrl} className="carousel-image mb-5" />
    </div>
  ))}
</Slider>
  </div>
</section>

      {/* About */}
      <section className="about">
        <div className="container" data-aos="fade-up">
        <div className="section-title content">
            <h2>About Us</h2>
            <p>Creating Art since 1974</p>
          </div>
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src={require("../assets/img/about.jpg")} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>We are Chardin.</h3>
              <br></br>
              <p>
                The strong identity of Chardin’s brand has evolved over the
                years since it’s creation in 1974, without forgetting its roots
                and staying firmly attached to the ground.
              </p>
              <p>
                An unmistakable style, with which season after season, trusts
                the strong innovation with the touch of culture the city and
                even the country has to offer from its origins. Chardin is a
                brand whose essence lies in its innovative contrasting features
                that goes along with time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}

      {/* Services */}
      <section id="services" className="services bg-noise-dark">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Our services</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Wedding Entourage
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Alteration and Repair
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Consumer Tailoring
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Corporate Tailoring
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Wedding Entourage</h3>
                      <p className="fst-italic">
                        Formal Barongs, Suits, Tuxedos, Coats, Blazers, Long &
                        Short Sleeved Shirts & Office Barongs
                      </p>
                      <p>
                        Elevate your wedding with our finely tailored "Wedding
                        Entourage" collection, featuring timeless elegance in
                        our formal Barongs, classic sophistication with suits,
                        ultimate elegance with tuxedos, refined charm in our
                        coats, smart style with blazers, and stylish comfort
                        with long and short-sleeved shirts. Our office Barongs
                        provide a modern twist on tradition, blending formal and
                        Filipino style seamlessly. At Chardin Davao, we ensure
                        your entourage looks impeccable on your special day.
                        Contact us to discuss your wedding entourage attire and
                        make your celebration unforgettable.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={require("../assets/img/services-1.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Alteration and Repair</h3>
                      <p className="fst-italic">
                        Chardin Davao also offers expert alteration and repair
                        services.
                      </p>
                      <p>
                        We understand the importance of a perfect fit, and our
                        skilled tailors are here to ensure your garments fit you
                        flawlessly. Whether it's a wedding dress, a suit, or
                        everyday attire, our alteration services will have you
                        looking and feeling your best. In addition, we provide
                        meticulous repair services to breathe new life into your
                        favorite clothing items, saving you both money and
                        sentimental pieces. Trust Chardin Davao to provide the
                        professional touch your wardrobe deserves. Contact us
                        today for all your alteration and repair needs.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={require("../assets/img/services-2.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Consumer Tailoring</h3>
                      <p>
                        At Chardin Davao, we take pride in our consumer
                        tailoring services, where your unique style and
                        preferences take center stage. Our skilled tailors are
                        dedicated to crafting garments that are a perfect
                        reflection of your individuality. Whether you're in need
                        of a custom suit, a special occasion dress, or everyday
                        attire tailored to your measurements, we have you
                        covered. From selecting the finest fabrics to the final
                        stitch, our attention to detail ensures that your vision
                        becomes a reality. Experience the luxury of garments
                        made just for you. Contact Chardin Davao to embark on a
                        personalized tailoring journey that will leave you
                        looking and feeling your best.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={require("../assets/img/services-3.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Corporate Tailoring</h3>
                      <p className="fst-italic">
                        At Chardin Davao, we take pride in our consumer
                        tailoring services, where your unique style and
                        preferences take center stage.
                      </p>
                      <p>
                        Our skilled tailors are dedicated to crafting garments
                        that are a perfect reflection of your individuality.
                        Whether you're in need of a custom suit, a special
                        occasion dress, or everyday attire tailored to your
                        measurements, we have you covered. From selecting the
                        finest fabrics to the final stitch, our attention to
                        detail ensures that your vision becomes a reality.
                        Experience the luxury of garments made just for you.
                        Contact Chardin Davao to embark on a personalized
                        tailoring journey that will leave you looking and
                        feeling your best.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={require("../assets/img/services-4.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DCT - CTA */}
      
        <div className="bg-dct pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pb-5">
                <div className="section-title pb-2">
                  <p className="dct-header">create_style.</p>
                </div>
                <p className="text-black pb-3">
                  <span className="fw-bold">Design Tool:</span> Experience the
                  art of personalization with our design tool, where you can
                  create your very own gown. From selecting fabrics to adding
                  intricate details, unleash your creativity and bring your
                  unique vision to life. Design, customize, and craft a gown
                  that's as one-of-a-kind as you are.
                </p>
                <Link to="/design-tool">
                  <button className="btn btn-dct" onClick={handleReload}
                  >Try our Design Tool</button>
                </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-flex align-items-end justify-content-end">
                <img
                  src={require("../assets/img/dct-img-1.png")}
                  alt="Design Tool"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Designers */}
      <section id="designers" className="designers bg-noise-dark">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Designers</h2>
            <p>Our Professional Designers</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <img
                  src={require("../assets/img/designers/dsgr - aris.jpg")}
                  className="img-fluid aris-img"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Aris Escarilla</h4>
                    <span>Ladies' Line Designer</span>
                  </div>
                  <div className="social">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/arislee04"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/arislee83?igsh=ZDluOXM3bW81ZnEz"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src={require("../assets/img/designers/dsgr - chard.jpg")}
                  className="img-fluid"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Richard Pulatche</h4>
                    <span>Mens' Line Designer</span>
                  </div>
                  <div className="social">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/richard.pulatche"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/richardpulatche?igsh=MW9kZzc0eGc2NnZnZg=="
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <img
                  src={require("../assets/img/designers/dsgr - rob.jpg")}
                  className="img-fluid"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Robert Castillo</h4>
                    <span>Ladies' Line Designer</span>
                  </div>
                  <div className="social">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100063053810566"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/bbcastillo63?igsh=a292dGRwZmIyM2tk"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact bg-noise-dark">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <iframe
            className="gmap-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4928097834545!2d125.60546007512545!3d7.068716992933924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d82d0269f91%3A0x93c055f40842adc8!2sChardin%20Davao!5e0!3m2!1sen!2sph!4v1697884706259!5m2!1sen!2sph"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="row mt-5 info">
            <div className="col-lg-3 mt-2">
              <i className="bi bi-geo-alt"></i>
              <h4>Location</h4>
              <p>1st Floor, Florentine Building, Bonifacio St., Davao City</p>
            </div>
            <div className="col-lg-3 mt-2">
              <i className="bi bi-clock"></i>
              <h4>Open Hours</h4>
              <p>
                Monday-Saturday:
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>
            <div className="col-lg-3 mt-2">
              <i className="bi bi-envelope"></i>
              <h4>Email</h4>
              <p>info@chardindavao.com</p>
            </div>
            <div className="col-lg-3 mt-2">
              <i className="bi bi-phone"></i>
              <h4>Call</h4>
              <p>+639 18 936 6089</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-noise-dark">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Chardin</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
