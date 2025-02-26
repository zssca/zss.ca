import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      quote: "The Google Reviews service from this team boosted our restaurant’s visibility overnight! Customers trust us more, and our bookings have soared.",
      name: "Priya Patel",
      designation: "Owner, Priya's Spice Garden",
      address: "123 Curry Lane, Toronto, ON",
      src: "/testimonials/Priya-Patel.webp",
      rating: 5,
    },
    {
      quote: "Our grocery store’s online presence exploded after adding reviews through this service. It’s simple, fast, and brought us tons of new customers!",
      name: "Ahmed Khan",
      designation: "Owner, Khan's Market",
      address: "456 Olive St, Vancouver, BC",
      src: "/testimonials/Ahmed-Khan.webp",
      rating: 5,
    },
    {
      quote: "This service gave our tea house a 5-star boost on Google Maps. Our online orders doubled, and we’re now a local favorite!",
      name: "Mei Chen",
      designation: "Owner, Mei's Tea House",
      address: "789 Tea Rd, Calgary, AB",
      src: "/testimonials/Mei-Chen.webp",
      rating: 5,
    },
    {
      quote: "Thanks to these Google Reviews, our beauty studio’s reputation soared. Online bookings are up, and clients love our credibility!",
      name: "Anjali Sharma",
      designation: "Owner, Anjali's Beauty Studio",
      address: "321 Henna Ave, Montreal, QC",
      src: "/testimonials/Anjali-Sharma.webp",
      rating: 5,
    },
    {
      quote: "Our repair shop went from unnoticed to top-rated on Google Maps with this service. Inquiries are through the roof!",
      name: "Michael Thompson",
      designation: "Owner, TechFix Solutions",
      address: "654 Fixit Dr, Ottawa, ON",
      src: "/testimonials/Michael-Thompson.webp",
      rating: 5,
    },
    {
      quote: "This review service made our boutique a go-to spot online. Sales are up, and our Google ranking is unbeatable!",
      name: "Emily Davis",
      designation: "Owner, EcoStyle Boutique",
      address: "987 Green St, Halifax, NS",
      src: "/testimonials/Emily-Davis.webp",
      rating: 5,
    },
    {
      quote: "Our music studio’s Google Reviews jumped, thanks to this service. Bookings are seamless, and we’re growing fast!",
      name: "Kofi Adjei",
      designation: "Owner, Adjei Music Studio",
      address: "147 Rhythm Ln, Winnipeg, MB",
      src: "/testimonials/Kofi-Adjei.webp",
      rating: 5,
    },
    {
      quote: "With this service, our bakery’s Google profile shines. Online orders are booming, and customers keep coming back!",
      name: "Sarah Johnson",
      designation: "Owner, Sarah's Artisan Bakery",
      address: "258 Bread St, Edmonton, AB",
      src: "/testimonials/Sarah-Johnson.webp",
      rating: 5,
    },
    {
      quote: "Our travel agency’s visibility skyrocketed with these Google Reviews. Booking online is easier, and we’re reaching new clients!",
      name: "Omar Al-Sayed",
      designation: "Owner, Al-Sayed Travel Agency",
      address: "369 Travel Rd, Regina, SK",
      src: "/testimonials/Omar-Al-Sayed.webp",
      rating: 5,
    },
    {
      quote: "This service gave our decor store a huge online lift. Google Reviews brought in more sales than we ever expected!",
      name: "Rachel Wilson",
      designation: "Owner, Wilson Home Decor",
      address: "741 Decor Ave, Victoria, BC",
      src: "/testimonials/Rachel-Wilson.webp",
      rating: 5,
    },
    {
      quote: "Our gardening center’s Google ranking soared with this review service. We’re connecting with more plant lovers every day!",
      name: "Linda Green",
      designation: "Owner, Green Thumb Gardening",
      address: "852 Plant St, Saskatoon, SK",
      src: "/testimonials/Linda-Green.webp",
      rating: 5,
    },
    {
      quote: "The reviews we got through this service made our yoga studio a local hit. Online class bookings are at an all-time high!",
      name: "Sita Desai",
      designation: "Owner, Tranquil Yoga Studio",
      address: "963 Zen Rd, Quebec City, QC",
      src: "/testimonials/Sita-Desai.webp",
      rating: 5,
    },
    {
      quote: "Our language school’s online reputation grew fast with these Google Reviews. Students from everywhere are signing up!",
      name: "Maya Gupta",
      designation: "Owner, Gupta Language Academy",
      address: "159 Word Ln, Hamilton, ON",
      src: "/testimonials/Maya-Gupta.webp",
      rating: 5,
    },
    {
      quote: "This service turned our fitness center into a Google Maps star. New clients are signing up daily thanks to the reviews!",
      name: "David Lee",
      designation: "Owner, Elite Fitness Center",
      address: "357 Fit St, London, ON",
      src: "/testimonials/David-Lee.webp",
      rating: 5,
    },
    {
      quote: "Our bookshop’s Google Reviews from this service brought collectors to us. Online sales have never been better!",
      name: "Thomas Brown",
      designation: "Owner, Brown's Rare Books",
      address: "486 Book Dr, St. John’s, NL",
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
                    <p className="text-xs text-gray-500">{testimonial.address}</p>
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
            75%,
            100% {
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

export default Testimonial;