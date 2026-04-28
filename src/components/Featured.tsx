export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ab70e00f-93fc-4eda-b128-1eb3eb785470/files/08f601b2-fff1-43fc-b3c9-e6c5a8f13ef3.jpg"
          alt="Пушистый котик"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Пушистые и неотразимые</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Котики — это не просто питомцы. Это тепло, уют и бесконечная любовь.
          Каждый взгляд, каждое мурчание наполняет жизнь радостью и смыслом.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}