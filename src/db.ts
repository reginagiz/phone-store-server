const db = {
  products: [
    {
      id: 1,
      name: "Смартфон POCO C51 64 ГБ",
      price: 6499,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/256e8ece17c46e683dbe0facd94c5e69/5c108f7da6e5886d4d32d723d0e24ad0151bd790d7941374c56d9d8e9718d9f6.jpg.webp",
      colors: ["black", "blue", "green"],
      popularity: 3,
      desc: `Смартфон POCO C51 64 ГБ предлагает функции, необходимые для разговоров по мобильной связи, общения в социальных сетях и мультимедийных развлечений. Он выполнен в компактном пластиковом корпусе с обтекаемыми гранями и тыловой панелью голубого цвета. Экран IPS диагональю 6.52 дюйма обеспечивает интуитивное управление и реалистичное изображение.
        Высокая производительность системы достигается благодаря 8-ядерному процессору MediaTek Helio G36 и 2 ГБ оперативной памяти. На тыловой панели установлена сдвоенная камера 8+0.3 Мп с автофокусом и светодиодной вспышкой для реалистичной съемки фотографий и видео. Фронтальная камера 5 Мп позволяет делать селфи и общаться по видеосвязи. Встроенный сканер отпечатков пальцев гарантирует простую и безопасную разблокировку устройства. За автономность смартфона POCO C51 отвечает аккумуляторная батарея емкостью 5000 мА*ч.`,
    },
    {
      id: 2,
      name: "Смартфон realme C30s 64 ГБ",
      price: 6999,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/774bc3d792cbcab34769a178c61686f2/cb157601cb15ceac4756053ed94ff8a9b2598f461f86084ca57090724cd9214e.jpg.webp",
      colors: ["black", "blue"],
      popularity: 3,
      desc: `Смартфон realme C30S имеет тонкий корпус черного цвета и вес 186 г, что облегчает эксплуатацию. Для разграничения звонков можно установить две SIM-карты. Модель оснащена мощным производительным 8-ядерным процессором, который обеспечивает бесперебойную и быструю работу. Широкий экран диагональю 6.5 дюймов обеспечивает комфортную игру и просмотр фильмов. IPS-дисплей поддерживает насыщенную и яркую цветопередачу.
        Смартфон realme C30S имеет 64 ГБ памяти, чего достаточно для хранения необходимой информации. Батарея емкостью 5000 мА*ч позволяет долгое время играть или смотреть видео без подзарядки. Даже при остатке 5% можно включить режим энергосбережения, чтобы оставаться на связи. Для быстрой разблокировки экрана на боковой стороне корпуса есть сканер отпечатка пальцев.`,
    },
    {
      id: 3,
      name: "Смартфон Xiaomi Redmi A2+ 64 ГБ",
      price: 7499,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/43aa8e3640bdc253df179db3eecd9cd3/b5926e67b994494fd67cdf8b75d9db0bad7bc5f4bc9839937ffc3daf7053abdc.jpg.webp",
      colors: ["black", "blue", "green"],
      popularity: 5,
      desc: `Смартфон Xiaomi Redmi A2+ в голубом цвете корпуса поддерживает установку двух SIM-карт, чтобы вы могли разграничить личные и деловые звонки. Экран обладает диагональю 6.52” и разрешением 1600x720 для комфортного просмотра любого контента. Закаленное стекло способствует защите дисплея от мелких повреждений: потертостей и царапин. 8-ядерный процессор MediaTek Helio G36 вместе с 3 ГБ оперативной памяти обеспечивает достаточный уровень производительности для запуска мобильных приложений и работы в режиме многозадачности.
        Смартфон Xiaomi Redmi A2+ имеет 64 ГБ встроенной памяти и предусматривает отдельный слот, в который можно установить карту памяти емкостью до 1 ТБ. Тыловая камера представлена двумя модулями 8+0.3 Мп для съемки детализированных и красочных снимков. Двойная светодиодная вспышка позволит проводить фотосъемку в условиях плохой освещенности. Для создания селфи предусмотрена 5-мегапиксельная фронтальная камера. Литий-полимерный аккумулятор емкостью 5000 мАч позволит устройству проработать в режиме разговора до 28 ч.`,
    },
    {
      id: 4,
      name: "Смартфон Infinix SMART 7 HD 64 ГБ",
      price: 6999,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/746f2653ecd116f0b3f5bc3e1ce6040f/8a0c3b832d57c5ea8faae411b3afd708403516a91e448da83efb13ef5d6696bd.jpg.webp",
      colors: ["white", "black", "blue"],
      popularity: 2,
      desc: `Смартфон Infinix Smart 7 HD 64 ГБ выполнен в корпусе белого цвета и оснащен дисплеем 6.6 дюйма. Панель IPS (1612x720 пикселей) воспроизводит реалистичное изображение с насыщенными и яркими цветами. Плавная и бесперебойная работа аппаратной платформы при выполнении различных задач обеспечивается благодаря процессору Unisoc SC9863A и 2 ГБ оперативной памяти.
        Infinix Smart 7 HD оснащен слотами для установки двух карт SIM и карты памяти microSD. Основная камера 8+0.3 Мп предназначена для создания детализированных фотографий и видео. На передней стороне в каплевидном вырезе расположена камера 5 Мп, которая позволяет общаться по видеосвязи и делать селфи. В устройстве реализованы беспроводные интерфейсы Wi-Fi и Bluetooth. Аккумулятор 5000 мА*ч гарантирует до 32 часов работы смартфона без подзарядки в режиме просмотра видео.`,
    },

    {
      id: 5,
      name: "Смартфон Tecno POP 7 64 ГБ",
      price: 8499,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/500/500/8278fc2e0c767175a1bc3fe505284ca7/88c242ac48d30b2977c1802c8ad41f63484c9e2bb3a0976befc7d0bb7caa6c6e.jpg.webp",
      colors: ["black", "blue", "purple"],
      popularity: 4,
      desc: `Смартфон Tecno POP 7 в пластиковом корпусе голубого цвета обладает многоуровневой биометрической защитой. Она запускает идентификацию личности по отпечатку и чертам лица. Процессор с 8 ядрами и 2 ГБ оперативной памяти выступают гарантом быстрого запуска приложений и отклика на пожелания пользователя. Энергия аккумулятора емкостью 5000 мАч рассчитана на длительное использование функционала.
        Смартфон Tecno POP 7 оснащен основной камерой с разрешением матрицы 8 Мп и светодиодной вспышкой. Кадры получатся насыщенными даже в условиях слабого освещения. В 6.6-дюймовый экран интегрирован датчик, который анализирует уровень внешнего освещения. Он автоматически уменьшает или повышает яркость для комфортного просмотра контента.`,
    },
  ],
};

export default db;
