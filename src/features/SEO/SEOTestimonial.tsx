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
      quote: "Zenith's SEO strategies tripled our organic traffic in 6 months! Their technical expertise and content optimization helped us dominate first-page rankings for 15+ competitive keywords.",
      name: "Sarah Johnson",
      designation: "Marketing Director, TechTrend Solutions",
      src: "/testimonials/sarah-johnson.webp",
      rating: 5,
    },
    {
      quote: "Our e-commerce site saw a 200% increase in organic sales after implementing Zenith's SEO recommendations. Their product schema optimization and content strategy were game-changers!",
      name: "Michael Chen",
      designation: "E-Commerce Manager, UrbanGadgets",
      src: "/testimonials/michael-chen.webp",
      rating: 5,
    },
    {
      quote: "Zenith's local SEO service filled our clinic with qualified patients. We now rank #1 in 5 key service areas and get 30+ new inquiries monthly from organic search!",
      name: "Emily Rodriguez",
      designation: "Practice Manager, DentalCare Plus",
      src: "/testimonials/emily-rodriguez.webp",
      rating: 5,
    },
    {
      quote: "Their technical SEO audit uncovered critical issues we'd missed. After implementation, our site speed improved by 60% and conversions increased by 45%!",
      name: "David Kim",
      designation: "CTO, FinTech Innovations",
      src: "/testimonials/david-kim.webp",
      rating: 5,
    },
    {
      quote: "Zenith's content optimization strategy helped us rank for 50+ industry keywords. Organic blog traffic now generates 40% of our qualified leads!",
      name: "Priya Patel",
      designation: "Content Director, MarketingPro",
      src: "/testimonials/priya-patel.webp",
      rating: 5,
    },
    {
      quote: "Our SaaS company saw 300% more trial signups after Zenith's SEO overhaul. Their keyword research and technical fixes were worth every penny!",
      name: "James Wilson",
      designation: "CEO, CloudFlow Technologies",
      src: "/testimonials/james-wilson.webp",
      rating: 5,
    },
    {
      quote: "Zenith's international SEO strategy helped us expand to 3 new markets. We now rank top 3 in local searches across Europe and Asia!",
      name: "Linda Nguyen",
      designation: "Global Marketing Head, StyleHub",
      src: "/testimonials/linda-nguyen.webp",
      rating: 5,
    },
    {
      quote: "Their backlink building service improved our domain authority by 25 points. We're now outranking competitors we never thought we could beat!",
      name: "Robert Davis",
      designation: "SEO Manager, EcoLife Products",
      src: "/testimonials/robert-davis.webp",
      rating: 5,
    },
    {
      quote: "Zenith's voice search optimization doubled our mobile traffic. The structured data implementation has been particularly effective for local queries!",
      name: "Maria Garcia",
      designation: "Digital Strategist, FoodieDelight",
      src: "/testimonials/maria-garcia.webp",
      rating: 5,
    },
    {
      quote: "After 8 months with Zenith, our organic visibility score improved from 32 to 78. Their ongoing SEO maintenance keeps us ahead of algorithm updates!",
      name: "Ahmed Khan",
      designation: "CMO, AutoCare Pro",
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