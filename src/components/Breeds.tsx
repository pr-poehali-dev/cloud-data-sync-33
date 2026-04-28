import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const breeds = [
  { name: "Мейн-кун", trait: "Крупный и дружелюбный", desc: "Самая большая домашняя порода. Игривы, умны и очень преданны хозяевам." },
  { name: "Сиамская", trait: "Голубоглазая красавица", desc: "Одна из древнейших пород. Общительны, любят разговаривать и обожают внимание." },
  { name: "Британская", trait: "Спокойный аристократ", desc: "Плюшевая шёрстка и невозмутимый характер. Идеальны для семей с детьми." },
  { name: "Сфинкс", trait: "Тёплый и нежный", desc: "Несмотря на необычный вид, сфинксы — самые ласковые и теплолюбивые котики." },
];

export default function Breeds() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div ref={container} className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Разнообразие</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
          Популярные породы
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <img
          src="https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/f8202c21-1121-4c38-b24d-a57bb56b9478.jpg"
          alt="Породы кошек"
          className="w-full h-[400px] lg:h-[560px] object-cover"
        />
      </div>

      <motion.div style={{ x }} className="flex gap-6 max-w-none">
        {breeds.map((breed, i) => (
          <div
            key={i}
            className="min-w-[280px] lg:min-w-[320px] border border-neutral-200 p-8 flex-shrink-0"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-3 block">
              Порода {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{breed.name}</h3>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mb-4">{breed.trait}</p>
            <p className="text-neutral-700 leading-relaxed">{breed.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
