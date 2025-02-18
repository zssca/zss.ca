import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
      quote: "The logo designed by Zenith completely transformed our brand identity! It perfectly captures our restaurant's fusion concept and has become instantly recognizable in our community.",
      name: "Priya Patel",
      designation: "Owner, Spice Fusion Bistro",
      src: "/testimonials/Priya-Patel.webp",
      rating: 5,
    },
    {
      quote: "Our tech startup needed a modern, scalable logo. Zenith delivered an iconic mark that works perfectly across all platforms - from app icons to billboards!",
      name: "Ahmed Khan",
      designation: "CEO, NovaTech Solutions",
      src: "/testimonials/Ahmed-Khan.webp",
      rating: 5,
    },
    {
      quote: "Zenith created a stunning vintage-inspired logo for our tea house that honors tradition while feeling contemporary. The brand style guide helped us maintain consistency across all touchpoints.",
      name: "Mei Chen",
      designation: "Owner, Imperial Tea Co.",
      src: "/testimonials/Mei-Chen.webp",
      rating: 5,
    },
    {
      quote: "The minimalist logo design perfectly represents our beauty studio's ethos. Zenith's attention to detail in the vector files ensures perfect reproduction every time.",
      name: "Anjali Sharma",
      designation: "Creative Director, Lumière Beauty",
      src: "/testimonials/Anjali-Sharma.webp",
      rating: 5,
    },
    {
      quote: "Our new logo has become a powerful marketing tool. Zenith's strategic approach to color psychology and shape meaning resulted in a mark that truly communicates our values.",
      name: "Michael Thompson",
      designation: "Marketing Manager, EcoFuture",
      src: "/testimonials/Michael-Thompson.webp",
      rating: 5,
    },
    {
      quote: "Zenith's logo redesign gave our 50-year-old brand a fresh, modern look while maintaining our heritage. The 3D mockups helped visualize the new identity perfectly.",
      name: "Emily Davis",
      designation: "VP, Heritage Manufacturing",
      src: "/testimonials/Emily-Davis.webp",
      rating: 5,
    },
    {
      quote: "The responsive logo system Zenith created works flawlessly across digital and print media. The multiple lockups and color variations are incredibly useful.",
      name: "Kofi Adjei",
      designation: "Brand Manager, Urban Brew",
      src: "/testimonials/Kofi-Adjei.webp",
      rating: 5,
    },
    {
      quote: "Our bakery's whimsical logo perfectly captures our personality. Zenith's packaging integration service made our brand cohesive across all touchpoints.",
      name: "Sarah Johnson",
      designation: "Owner, Whisk & Roll Bakery",
      src: "/testimonials/Sarah-Johnson.webp",
      rating: 5,
    },
    {
      quote: "The trademark-ready logo and comprehensive brand guidelines have been invaluable as we expand internationally. Zenith thought of every detail!",
      name: "Omar Al-Sayed",
      designation: "CEO, Global Ventures",
      src: "/testimonials/Omar-Al-Sayed.webp",
      rating: 5,
    },
    {
      quote: "Zenith's logo design process was collaborative and insightful. The multiple concepts they presented made it easy to find the perfect direction for our brand.",
      name: "Rachel Wilson",
      designation: "Founder, Terra Home",
      src: "/testimonials/Rachel-Wilson.webp",
      rating: 5,
    },
    {
      quote: "Our new dynamic logo system allows seasonal variations while maintaining brand recognition. Zenith's innovative approach exceeded our expectations!",
      name: "Linda Green",
      designation: "CMO, Seasons Resort",
      src: "/testimonials/Linda-Green.webp",
      rating: 5,
    },
    {
      quote: "The animated logo version Zenith created has taken our digital presence to the next level. It's become the centerpiece of all our marketing materials.",
      name: "Sita Desai",
      designation: "Digital Director, Pulse Media",
      src: "/testimonials/Sita-Desai.webp",
      rating: 5,
    },
    {
      quote: "Zenith's cultural sensitivity in creating our global nonprofit logo was impressive. They incorporated multiple symbolic elements seamlessly.",
      name: "Maya Gupta",
      designation: "Director, Unity Foundation",
      src: "/testimonials/Maya-Gupta.webp",
      rating: 5,
    },
    {
      quote: "The brand audit and logo redesign helped us position as market leaders. Zenith's strategic approach to visual identity transformed our business.",
      name: "David Lee",
      designation: "CEO, Apex Fitness",
      src: "/testimonials/David-Lee.webp",
      rating: 5,
    },
    {
      quote: "Our iconic wordmark has become synonymous with quality. Zenith's typography expertise made all the difference in creating a distinctive brand identity.",
      name: "Thomas Brown",
      designation: "Owner, Brown & Co. Law",
      src: "/testimonials/Thomas-Brown.webp",
      rating: 5,
    },
  ];

  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance && navigationPrevRef.current && navigationNextRef.current) {
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
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper as SwiperInstance)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setCurrentIndex(swiper.activeIndex);
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
          <div className="flex justify-center my-1 text-gray-500 tracking-wide text-sm">
            {`${currentIndex + 1}/${testimonials.length}`}
          </div>
          <button
            ref={navigationNextRef}
            disabled={isEnd}
            className={`px-4 ${
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