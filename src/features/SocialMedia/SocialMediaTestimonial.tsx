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
        "The website designed by Zenith completely transformed our business! Customers can now explore our menu online, place orders, and even book tables with ease. Our reach has expanded beyond our local community!",
      name: "Priya Patel", 
      designation: "Owner, Priya's Spice Garden", 
      src: "/testimonials/Priya-Patel.webp", 
      rating: 5,
    },
    {
      quote:
        "Our Middle Eastern grocery store saw a massive boost in online sales thanks to the website built by Zenith. The user-friendly layout and SEO strategies helped us attract more customers than ever!",
      name: "Ahmed Khan", 
      designation: "Owner, Khan's Market", 
      src: "/testimonials/Ahmed-Khan.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith created a stunning website that reflects the elegance of traditional Chinese tea culture. Our online orders have doubled, and our brand has gained recognition globally!",
      name: "Mei Chen", 
      designation: "Owner, Mei's Tea House", 
      src: "/testimonials/Mei-Chen.webp", 
      rating: 5,
    },
    {
      quote:
        "With the custom website by Zenith, customers can now book henna and makeup appointments online, increasing our bookings significantly! The professional design truly represents our brand!",
      name: "Anjali Sharma", 
      designation: "Owner, Anjali's Beauty Studio", 
      src: "/testimonials/Anjali-Sharma.webp", 
      rating: 5,
    },
    {
      quote:
        "Our repair shop was struggling with visibility. Thanks to Zenith, we now have a well-optimized website that attracts new customers daily! Online inquiries have increased dramatically!",
      name: "Michael Thompson", 
      designation: "Owner, TechFix Solutions", 
      src: "/testimonials/Michael-Thompson.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith helped us create an elegant and functional website for our sustainable fashion boutique. Our online presence is stronger than ever, and sales have skyrocketed!",
      name: "Emily Davis", 
      designation: "Owner, EcoStyle Boutique", 
      src: "/testimonials/Emily-Davis.webp", 
      rating: 5,
    },
    {
      quote:
        "Our music studio's website by Zenith has become a hub for musicians and clients. Online bookings and promotions are now seamless, helping us grow exponentially!",
      name: "Kofi Adjei", 
      designation: "Owner, Adjei Music Studio", 
      src: "/testimonials/Kofi-Adjei.webp", 
      rating: 5,
    },
    {
      quote:
        "Our bakery now has an incredible website where customers can order online and learn about our artisanal breads. We have seen a significant increase in sales and customer engagement!",
      name: "Sarah Johnson", 
      designation: "Owner, Sarah's Artisan Bakery", 
      src: "/testimonials/Sarah-Johnson.webp", 
      rating: 5,
    },
    {
      quote:
        "The website created by Zenith has made it easier for customers to find and book our travel packages online. Our business has expanded beyond what we imagined!",
      name: "Omar Al-Sayed", 
      designation: "Owner, Al-Sayed Travel Agency", 
      src: "/testimonials/Omar-Al-Sayed.webp", 
      rating: 5,
    },
    {
      quote:
        "Thanks to Zenith, our handcrafted home decor store now has a stunning online shop. Our sales have grown significantly since launching our new website!",
      name: "Rachel Wilson", 
      designation: "Owner, Wilson Home Decor", 
      src: "/testimonials/Rachel-Wilson.webp", 
      rating: 5,
    },
    {
      quote:
        "Zenith helped us create a visually appealing and functional website for our gardening center. We now reach gardening enthusiasts far beyond our local community!",
      name: "Linda Green", 
      designation: "Owner, Green Thumb Gardening", 
      src: "/testimonials/Linda-Green.webp", 
      rating: 5,
    },
    {
      quote:
        "Our yoga studio needed a modern, easy-to-use website. Thanks to Zenith, we now attract more students and offer seamless online class bookings!",
      name: "Sita Desai", 
      designation: "Owner, Tranquil Yoga Studio", 
      src: "/testimonials/Sita-Desai.webp", 
      rating: 5,
    },
    {
      quote:
        "The website developed by Zenith has allowed us to offer language courses online and attract students from different parts of the world. It has been a game-changer for our school!",
      name: "Maya Gupta", 
      designation: "Owner, Gupta Language Academy", 
      src: "/testimonials/Maya-Gupta.webp", 
      rating: 5,
    },
    {
      quote:
        "Our fitness center needed an engaging online presence, and Zenith delivered exactly that! New clients can easily sign up and book training sessions online now!",
      name: "David Lee", 
      designation: "Owner, Elite Fitness Center", 
      src: "/testimonials/David-Lee.webp", 
      rating: 5,
    },
    {
      quote:
        "Our rare bookshop now reaches collectors worldwide, thanks to Zenith. The website showcases our collection beautifully and has boosted our online sales!",
      name: "Thomas Brown", 
      designation: "Owner, Brown's Rare Books", 
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