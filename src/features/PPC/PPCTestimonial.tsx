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
        "Zenith's PPC strategies tripled our conversion rates within 3 months! Their targeted ad campaigns and continuous optimization helped us dominate our local market while reducing cost-per-acquisition by 40%.",
      name: "Sarah Johnson", 
      designation: "Marketing Director, TechGadgets Inc", 
      src: "/testimonials/sarah-johnson.webp", 
      rating: 5,
    },
    {
      quote:
        "Our ROI increased by 250% after switching to Zenith's PPC management. Their data-driven approach to keyword bidding and ad copy optimization transformed our digital advertising results.",
      name: "Michael Chen", 
      designation: "E-Commerce Manager, UrbanFashion Co", 
      src: "/testimonials/michael-chen.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith's remarketing strategies helped us recover 30% of abandoned carts. Their sophisticated audience segmentation and dynamic ad creatives significantly boosted our conversion rates.",
      name: "Emily Rodriguez", 
      designation: "Digital Director, HomeEssentials Store", 
      src: "/testimonials/emily-rodriguez.webp", 
      rating: 5,
    },
    {
      quote:
        "Within 60 days, Zenith's Google Ads management decreased our CPA by 55% while increasing qualified leads by 120%. Their weekly optimizations and reporting are exceptional.",
      name: "David Kim", 
      designation: "Owner, AutoCare Solutions", 
      src: "/testimonials/david-kim.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith's Facebook Ad strategies helped us scale profitably. They tripled our ROAS through advanced pixel tracking and lookalike audience targeting that we never would have discovered.",
      name: "Priya Patel", 
      designation: "CMO, HealthBoost Supplements", 
      src: "/testimonials/priya-patel.webp", 
      rating: 5,
    },
    {
      quote:
        "Their competitive analysis and bid strategy adjustments helped us outrank industry giants. We're now getting 3x more clicks at half our previous budget!",
      name: "James Wilson", 
      designation: "PPC Manager, OfficePro Supplies", 
      src: "/testimonials/james-wilson.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith's shopping campaigns optimization increased our product sales by 400%. Their product feed management and campaign structuring are truly next-level.",
      name: "Linda Nguyen", 
      designation: "E-Commerce Director, StyleHub", 
      src: "/testimonials/linda-nguyen.webp", 
      rating: 5,
    },
    {
      quote:
        "The conversion rate optimization strategies implemented by Zenith doubled our lead quality while reducing wasted ad spend. Their landing page testing framework is brilliant.",
      name: "Robert Davis", 
      designation: "Digital Strategist, EduTech Pro", 
      src: "/testimonials/robert-davis.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith's automated bid strategies and AI-powered optimizations helped us scale our Amazon Ads profitably. Our ACOS decreased by 35% while maintaining sales volume.",
      name: "Maria Garcia", 
      designation: "Head of E-Commerce, KitchenWise", 
      src: "/testimonials/maria-garcia.webp", 
      rating: 5,
    },
    {
      quote:
        "Their multi-channel PPC approach combining Search and Display ads increased our brand visibility by 300%. We're now dominating our market category!",
      name: "Ahmed Khan", 
      designation: "Digital Marketing Manager, FitnessPro", 
      src: "/testimonials/ahmed-khan.webp", 
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