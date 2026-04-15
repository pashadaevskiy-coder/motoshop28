const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Алексей Петров',
      avatar: null,
      rating: 5,
      text: 'Отличный мотоцикл! Купил KEWS NB300, очень доволен. Мощный, надежный, отлично справляется с бездорожьем. Менеджер помог с выбором, доставили быстро.',
      date: '15.03.2024'
    },
    {
      id: 2,
      name: 'Иван Сидоров',
      avatar: null,
      rating: 5,
      text: 'STN G9 YBS300 PRO - просто топ! Регулируемая подвеска делает огромную разницу. Качество сборки на высоте. Рекомендую всем серьезным райдерам.',
      date: '02.02.2024'
    },
    {
      id: 3,
      name: 'Дмитрий Кузнецов',
      avatar: null,
      rating: 5,
      text: 'BRZ Z7 PR300 - отличный вариант для своего ценового сегмента. Карбюратор NIBBI работает идеально. Спасибо за консультацию и помощь в настройке!',
      date: '20.01.2024'
    },
    {
      id: 4,
      name: 'Сергей Волков',
      avatar: null,
      rating: 5,
      text: 'Покупал OXO Lite 250 X в подарок сыну. Он в восторге! Мотоцикл простой в управлении, очень маневренный. Отличный выбор для начинающих.',
      date: '10.12.2023'
    },
    {
      id: 5,
      name: 'Михаил Новиков',
      avatar: null,
      rating: 5,
      text: 'PROMAX Daikon - премиум класс за разумные деньги. Подвеска WP Suspension стоит своих денег. На трассе и бездорожье чувствуешь себя как чемпион.',
      date: '05.11.2023'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-section bg-darker">
      <div className="container mx-auto px-container">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-display text-section font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Что говорят наши клиенты о покупке эндуро мотоциклов
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 border border-gray-800 hover:border-accent-orange/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Аватар и имя */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-orange to-accent-red flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Текст отзыва */}
              <p className="text-secondary text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Дата */}
              <div className="text-muted text-xs">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials