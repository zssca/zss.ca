import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';

// Define a type for the Swiper instance
type SwiperInstance = {
  params: {
    navigation: {
      prevEl: HTMLElement | null;
      nextEl: HTMLElement | null;
    };
  };
  navigation: {
    destroy: () => void;
    init: () => void;
    update: () => void;
  };
  isBeginning: boolean;
  isEnd: boolean;
  activeIndex: number;
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="mt-1" aria-label={`Rating: ${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, idx) => (
      <FaStar
        key={idx}
        className={`h-5 w-5 inline-block mr-1 transition-transform duration-200 ${
          idx < rating ? 'text-yellow-400 scale-100' : 'text-gray-300 scale-95'
        }`}
      />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Zenith's brand strategy completely redefined our market position. Our brand recognition increased by 150% within the first year of implementing their identity system.",
      name: "Priya Patel",
      designation: "Brand Manager, Spice Culture Co.", 
      src: "/testimonials/Priya-Patel.webp",
      rating: 5,
    },
    {
      quote:
        "The comprehensive brand guidelines created by Zenith brought unprecedented consistency to our global operations. Every touchpoint now communicates our core values effectively.",
      name: "Ahmed Khan",
      designation: "Marketing Director, Eastern Markets Group",
      src: "/testimonials/Ahmed-Khan.webp",
      rating: 5,
    },
    {
      quote:
        "Our rebranding campaign led by Zenith resulted in a 300% increase in social media engagement and 40% growth in premium customer acquisition.",
      name: "Mei Chen",
      designation: "CEO, Tea Heritage Collective",
      src: "/testimonials/Mei-Chen.webp",
      rating: 5,
    },
    {
      quote:
        "Zenith's brand architecture work simplified our product ecosystem while increasing cross-selling opportunities by 25%. A true transformation!",
      name: "Anjali Sharma",
      designation: "Product Director, Beauty Innovations Ltd",
      src: "/testimonials/Anjali-Sharma.webp",
      rating: 5,
    },
    {
      quote:
        "The cultural branding approach by Zenith helped us authentically connect with new demographics, expanding our market share by 18% in Q1 alone.",
      name: "Michael Thompson",
      designation: "CMO, TechSolutions Group",
      src: "/testimonials/Michael-Thompson.webp",
      rating: 5,
    },
    {
      quote:
        "Our brand audit revealed untapped equity that became the foundation for a successful market expansion strategy. Zenith's insights were invaluable.",
      name: "Emily Davis",
      designation: "Brand Strategist, EcoStyle Collective",
      src: "/testimonials/Emily-Davis.webp",
      rating: 5,
    },
    {
      quote:
        "Zenith's employer branding transformation reduced our recruitment costs by 30% while attracting higher quality candidates across all departments.",
      name: "Kofi Adjei",
      designation: "HR Director, Creative Enterprises",
      src: "/testimonials/Kofi-Adjei.webp",
      rating: 5,
    },
    {
      quote:
        "The brand extension strategy developed by Zenith added $2M in annual revenue to our legacy products through strategic visual modernization.",
      name: "Sarah Johnson",
      designation: "Brand Director, Artisan Foods Inc",
      src: "/testimonials/Sarah-Johnson.webp",
      rating: 5,
    },
    {
      quote:
        "Zenith's sensory branding implementation increased customer dwell time by 40% and boosted brand recall metrics to industry-leading levels.",
      name: "Omar Al-Sayed",
      designation: "Retail Experience Manager",
      src: "/testimonials/Omar-Al-Sayed.webp",
      rating: 5,
    },
    {
      quote:
        "Our brand positioning framework created by Zenith helped secure $5M in venture funding by clearly articulating our unique market value proposition.",
      name: "Rachel Wilson",
      designation: "Founder, HomeStyle Ventures",
      src: "/testimonials/Rachel-Wilson.webp",
      rating: 5,
    },
    {
      quote:
        "The brand ecosystem design by Zenith unified our physical and digital experiences, increasing customer satisfaction scores by 35%.",
      name: "Linda Green",
      designation: "CXO, GreenSpace Initiatives",
      src: "/testimonials/Linda-Green.webp",
      rating: 5,
    },
    {
      quote:
        "Zenith's brand refresh strategy modernized our visual identity while preserving 90% of existing brand equity - a perfect balance of innovation and continuity.",
      name: "Sita Desai",
      designation: "Brand Guardian, Yoga Traditions",
      src: "/testimonials/Sita-Desai.webp",
      rating: 5,
    },
    {
      quote:
        "The brand measurement system implemented by Zenith provides real-time tracking of brand health metrics, enabling data-driven marketing decisions.",
      name: "Maya Gupta",
      designation: "Digital Marketing Director",
      src: "/testimonials/Maya-Gupta.webp",
      rating: 5,
    },
    {
      quote:
        "Zenith's co-branding strategy for our partnerships increased perceived value by 60% while maintaining clear brand differentiation.",
      name: "David Lee",
      designation: "Partnerships Manager",
      src: "/testimonials/David-Lee.webp",
      rating: 5,
    },
    {
      quote:
        "The brand storytelling framework developed by Zenith tripled our content engagement rates and improved message consistency across all channels.",
      name: "Thomas Brown",
      designation: "Content Director",
      src: "/testimonials/Thomas-Brown.webp",
      rating: 5,
    },
];
  

  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  useEffect(() => {
    if (
      swiperInstance &&
      navigationPrevRef.current &&
      navigationNextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="max-w-full h-auto relative">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]} // Add Autoplay to modules
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper as SwiperInstance)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setCurrentIndex(swiper.activeIndex); // Update the current index
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          className="h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 h-full flex flex-col">
                <div className="flex items-start space-x-5">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-4 border-gray-200"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-gray-300 animate-ping-slow" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.designation}</p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <hr className="my-2 border-gray-100 opacity-50" />
                <p className="text-gray-700 text-md leading-relaxed italic relative flex-1">
                  {testimonial.quote}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            ref={navigationPrevRef}
            disabled={isBeginning}
            className={`p-4 transition-transform ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous testimonials"
          >
            <FaArrowLeft className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </button>
        {/* Review Count */}
        <div className="flex justify-center my-1 text-gray-500 tracking-wide text-sm">
          {`${currentIndex + 1}/${testimonials.length}`}
        </div>
          <button
            ref={navigationNextRef}
            disabled={isEnd}
            className={`px-4  ${
              isEnd ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next testimonials"
          >
            <FaArrowRight className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        <style jsx global>{`
          @keyframes ping-slow {
            75%, 100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;