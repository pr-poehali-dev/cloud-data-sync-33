import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "-8vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "8vh"]);

  const leftImages = [
    "https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/08f601b2-fff1-43fc-b3c9-e6c5a8f13ef3.jpg",
    "https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/f8202c21-1121-4c38-b24d-a57bb56b9478.jpg",
  ];
  const rightImages = [
    "https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/f538f9a4-8e7c-4ab0-8068-0060ce7a7eda.jpg",
    "https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/2932abdd-43c7-4d72-9846-db5cb82a8cc9.jpg",
  ];

  return (
    <div ref={container} className="bg-neutral-900 py-24 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Галерея</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Котики во всей<br />красе
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 lg:gap-6">
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 lg:gap-6">
          {leftImages.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt={`Котик ${i + 1}`}
                className="w-full h-[220px] lg:h-[360px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 lg:gap-6 mt-12">
          {rightImages.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt={`Котик ${i + 3}`}
                className="w-full h-[220px] lg:h-[360px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
