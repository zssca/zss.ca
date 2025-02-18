"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = Array.from({ length: 13 }, (_, i) => `/websites-projects/website-${String(i + 1).padStart(4, "0")}.webp`);

export default function SwiperShaderSlider() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="rounded-xl overflow-hidden"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
                            <Image
                                src={src}
                                alt={`Recent project ${index + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover rounded-xl"
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
