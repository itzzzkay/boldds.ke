import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Sophie M.",
    role: "Small Business Owner",
    text: "BOLDDS handled our entire merch drop — hoodies and mugs came out perfect.",
  },
  {
    name: "Liam K.",
    role: "Club President",
    text: "The custom hoodies for our club were a hit. Great quality and fast delivery.",
  },
  {
    name: "Amara T.",
    role: "Student",
    text: "I ordered a personalized notebook and mug as a gift — they looked so premium.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What customers say</h2>
        <p className="section-subtitle">
          A few words from people who ordered from BOLDDS.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="testimonial-card fade-up">
                <p className="testimonial-text">“{t.text}”</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
