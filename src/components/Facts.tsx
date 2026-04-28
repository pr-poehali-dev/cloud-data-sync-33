const facts = [
  {
    emoji: "😴",
    title: "Спят до 16 часов",
    text: "Котики — настоящие чемпионы по сну. В среднем они спят 12–16 часов в сутки, набираясь сил для новых приключений.",
  },
  {
    emoji: "👂",
    title: "Слышат ультразвук",
    text: "Уши кошки могут поворачиваться на 180°, а слух улавливает частоты до 65 000 Гц — в 3 раза лучше, чем у человека.",
  },
  {
    emoji: "🐾",
    title: "Мурчание лечит",
    text: "Вибрации при мурчании (25–50 Гц) ускоряют заживление костей и снижают стресс — как у кошки, так и у её хозяина.",
  },
  {
    emoji: "🌙",
    title: "Видят в темноте",
    text: "Котики видят при освещении в 6 раз слабее, чем нужно человеку. Их глаза — настоящий природный прибор ночного видения.",
  },
  {
    emoji: "💬",
    title: "Говорят только с людьми",
    text: "Взрослые кошки практически не мяукают друг с другом. Мяуканье — это язык, который они специально выработали для общения с людьми.",
  },
  {
    emoji: "🏃",
    title: "Бегают до 48 км/ч",
    text: "На короткой дистанции домашний кот может разогнаться быстрее олимпийского спринтера. Скорость — в их природе.",
  },
];

export default function Facts() {
  return (
    <div className="bg-neutral-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Интересно знать</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          Удивительные факты<br />о котиках
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, i) => (
            <div key={i} className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">{fact.emoji}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                {fact.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
