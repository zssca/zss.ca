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
      'Zenith Strategic Solutions completely transformed our social media strategy. Within months, our engagement rates skyrocketed. Highly recommend their services!',
    name: 'Amelia Nguyen',
    designation: 'Founder, Radiant Beauty Spa',
    src: '/testimonials/images/Amelia_Nguyen_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Zenith’s branding solutions helped us create a powerful identity. The logo and design were spot-on. Fantastic experience working with their team!',
    name: 'Amrit Dhillon',
    designation: 'Founder, BlissYoga Studio',
    src: '/testimonials/images/Amrit_Dhillon_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Their e-commerce solutions doubled our online sales. The team’s expertise is unmatched. Zenith is our go-to for all web development needs!',
    name: 'James MacDonald',
    designation: 'Owner, O’Neil’s Bakery',
    src: '/testimonials/images/James_MacDonald_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Zenith’s marketing strategies gave our small business the visibility we needed. They truly care about their clients’ success!',
    name: 'Victor Tremblay',
    designation: 'CEO, TechNova',
    src: '/testimonials/images/Victor_Tremblay_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'The team at Zenith helped us craft a cohesive social media presence that resonates with our target audience. They’re incredible collaborators!',
    name: 'Ava White',
    designation: 'Marketing Manager, Creative Hub',
    src: '/testimonials/images/Ava_White_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Zenith’s expertise in digital marketing gave our startup the boost we needed. Couldn’t have asked for a better partner!',
    name: 'Isabella Lopez',
    designation: 'Co-Founder, GreenScape Solutions',
    src: '/testimonials/images/Isabella_Lopez_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Our website redesign with Zenith exceeded our expectations. It’s sleek, fast, and user-friendly. Their team was a delight to work with!',
    name: 'Liam Murphy',
    designation: 'Director, Murphy Analytics',
    src: '/testimonials/images/Liam_Murphy_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'From branding to web development, Zenith has been a one-stop solution for all our needs. Their dedication is unmatched!',
    name: 'Liam Smith',
    designation: 'Owner, Smith Enterprises',
    src: '/testimonials/images/Liam_Smith_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'Zenith brought our vision to life with their exceptional branding expertise. We’ve received nothing but compliments on our new identity!',
    name: 'Marc Dufresne',
    designation: 'CEO, Dufresne Corp',
    src: '/testimonials/images/Marc_Dufresne_Profile.webp',
    rating: 5,
  },
  {
    quote:
      'The level of professionalism and creativity Zenith brings to the table is outstanding. We’ve achieved incredible results through their services!',
    name: 'Anjali Patel',
    designation: 'Founder, Artisan Creations',
    src: '/testimonials/images/Anjali_Patel_Profile.webp',
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
          className="h-full pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="px-8 pt-8 h-full flex flex-col">
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
                <hr className="my-6 border-gray-100 opacity-50" />
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
        <div className="flex justify-center text-gray-500 tracking-wide text-sm">
          {`${currentIndex + 1}/${testimonials.length}`}
        </div>
          <button
            ref={navigationNextRef}
            disabled={isEnd}
            className={`p-4  ${
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