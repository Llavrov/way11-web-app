export type PageContent = {
    title: string;
    tag: string;
    description: string;
    image: string;
    imagesOfReadyPages: string[],
    imageBackground: string;
    taskAndSolution: string;
    solution: { number: number; content: string; }[];
};

export const CARDS_OF_CASES = {
    buyNow: {
        tags: [ 'Buy Now', 'E-commercial'],
        photo: '/cases/buy-now-01.png',
        background: '#DD622D',
        description: 'Кейс с созданием более доступной среды для наименее защищенных социальных групп.  Фишка проекта в том, что представленные товары имеют более низкую стоимость, за счет подступающего истечения срока годности.',
        link: '/case/buy-now',
    },
    erp: {
        tags: [ 'ERP', 'промышленность'],
        photo: '/cases/cities-05.png',
        background: '#7C7AFE',
        description: 'К нам обратилась производственная компания «NDA» с запросом провести аналитику их производства и найти слабые места во всех процессах происходящих в компании и предложить улучшения на основе проведенной аналитики.',
        link: '/case/erp',
    },
    lancelot: {
        tags: [ 'Lancelot', 'образование'],
        photo: '/cases/lancelot-01.png',
        background: '#007FE0',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка',
        link: '/case/lancelot',
    },
    aboutEducation: {
        tags: [ 'ПроОбразование', 'образовательные платформы'],
        photo: '/cases/education-02.png',
        background: '#8885FF',
        description: 'Кейс с инновационной курсовой платформой с упором на удобство, стиль и полный функциональный цикл. С четким разделением функционала в зависимости от роли.',
        link: '/case/abouе-education',
    },
    sgmk: {
        tags: [ 'SGMK', 'промышленность'],
        photo: '/cases/sgmk.png',
        background: '#F09D20',
        description: 'Кейс, как наша команда приняла участие в конкурсе на разработку прототипа для предприятия-лидера в сфере горно-добывающей промышленности. В ходе которого: создали дизайн сайта и провели презентацию по проекту и обобщенной аналитике функционала.',
        link: '/case/sgmk',
    }
};


export const PAGES_CONTENT: Record<string, PageContent> = {
    lancelot: {
        title: 'Lancelot',
        tag: 'образовательные платформы',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка',
        image: '/cases/lancelot-01.png',
        imagesOfReadyPages: ['/cases/lancelot-01.png', '/cases/lancelot-02.png', '/cases/lancelot-03.png', '/cases/lancelot-04.png', '/cases/lancelot-05.png'],
        imageBackground: '#007FE0',
        taskAndSolution: 'Пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием. Чтобы создать вебинар понадобится потратить несколько минут: подключить эфир через zoom или YouTube, поставить модератора на эфир и настроить сценарий комментариев. По завершению эфира пользователю предоставляется возможность создать автовебинар с сохранением комментариев, сценария всплывающих окон. Стоимость проведения вебинара списывается с “баланса” пользователя автоматически.',
        solution: [
            {
                number: 1,
                content: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
            },
            {
                number: 2,
                content: 'Разрабатываем приложения для IOS и Android, учитывая архитектуру мобильного приложения и особенности дизайна.'
            },
            {
                number: 3,
                content: 'Создаем цифровые продукты: корпоративные и промо-сайты, платформы и высоко нагруженные системы.'
            },
        ]
    },
    'buy-now': {
        title: 'BuyNow',
        tag: 'e-commercial',
        description: 'Существовала необходимость в закрытие потребности на создание более доступной среды для наименее защищенных социальных групп в Курской области. Выбор пал на разработку маркетплейса с предпросроченной продукцией с большими скидками, как способ win to win, где продавцом выступают крупные сети магазинов, что могут уменьшить часть убытков за счет повышения продаж продукции, чей срок годности подходит к концу, а покупатель получает возможность приобрести товар дешевле, за счет серьезных скидок.',
        image: '/cases/buy-now-01.png',
        imagesOfReadyPages: ['/cases/buy-now-01.png', '/cases/buy-now-02.png', '/cases/buy-now-03.png', '/cases/buy-now-04.png', '/cases/buy-now-05.png'],
        imageBackground: '#DD622D',
        taskAndSolution: 'Разработка маркетплейса с предпросроченной продукцией с большими скидками, как способ win to win, где продавцом выступают крупные сети магазинов, что могут уменьшить часть убытков за счет повышения продаж продукции, чей срок годности подходит к концу, а покупатель получает возможность приобрести товар дешевле, за счет серьезных скидок.',
        solution: [
            {
                number: 1,
                content: 'Мы проводим анализ рынка и заинтересованность продавцов и потребителей. Прорабатываем техническое задание и документацию исходя из запросов нашего клиента.'
            },
            {
                number: 2,
                content: 'Разрабатываем сайт для десктопных операционных систем и приложения для Аndroid и iOS, с учетом потребности клиента и особенностей дизайна.'
            },
            {
                number: 3,
                content: 'Созданием высоконагруженную систему, способную выдержать большой поток потребителей.'
            }
        ],
    },
    'erp': {
        title: 'ERP',
        tag: 'промышленность',
        description: 'К нам обратилась производственная компания «NDA» с запросом провести аналитику их производства и найти слабые места во всех процессах происходящих в компании и предложить улучшения на основе проведенной аналитики.',
        image: '/cases/cities-01.png',
        imagesOfReadyPages: ['/cases/cities-01.png', '/cases/cities-02.png', '/cases/cities-03.png', '/cases/cities-04.png', '/cases/cities-05.png'],
        imageBackground: '#7C7AFE',
        taskAndSolution: 'Масштаб аналитической работы и сжатые сроки, в которые необходимо было успеть провести анализ огромного предприятия с филиалами и контрагентами по всей РФ.\n' +
            'Сложный и запутанный производственный процесс.',
        solution: [
            {
                number: 1,
                content: 'Собираем и анализируем информацию, изучаем требования заказчика к будущей системе. Разбираем процессы, происходящих в офисе и на производстве. Расписываем техническое задание на основе проведенной аналитики и собранных требований.'
            },
            {
                number: 2,
                content: 'Находим проблему на предприятии с нарушением процессов коммуникации из-за которого возникает множество различных сложностей. Закрываем эту часть проблему реализацией таск-трекера и совмещенного с ним документооборота, заточенного под нужды офиса и производства.'
            },
            {
                number: 3,
                content: 'Разрабатываем прототип будущей системы и создаём полноценный дизайн-интерфейс системы.'
            }
        ],
    },
    'sgmk': {
        title: 'SGMK',
        tag: 'промышленность',
        description: ' Сибирской Горно-Добывающей Компании требовалась разработка нового сайта, оптимизированного на всех платформах, и дизайна, соответствующего имиджу компании.  Для этого был проведен конкурс, в котором WAY11 реализовала своё виденье проекта.',
        image: '/cases/sgmk.png',
        imagesOfReadyPages: ['/cases/sgmk.png'],
        imageBackground: '#F09D20',
        taskAndSolution: 'Для этого компания решила провести конкурс, в котором WAY11 реализовала своё виденье проекта.',
        solution: [
            {
                number: 1,
                content: 'Анализировали и разрабатывали ТЗ, где делали акцент на важности компании в её технологической области.'
            },
            {
                number: 2,
                content: 'Разрабатывали макет, где чётко виден упор в сторону престижности и статусности SGMK  и свежий взгляд на компанию для её ЦА.'
            }
        ],
    },
    'about-education': {
        title: 'Про образование',
        tag: 'образовательные платформы',
        description: 'Была необходимость в создании инновационной курсовой платформы, с упором на удобство и упрощения взаимодействия, за счет использования разделения пользователей на роли с отличающимся функционалом.',
        image: '/cases/education-01.png',
        imagesOfReadyPages: ['/cases/education-01.png', '/cases/education-02.png', '/cases/education-03.png', '/cases/education-04.png', '/cases/education-05.png'],
        imageBackground: '#8885FF',
        taskAndSolution: 'Мы решили делать платформу, с упором на удобство и упрощения взаимодействия, за счет использования разделения пользователей на роли с отличающимся функционалом,  отвечающую всем требованиям Минобразования.',
        solution: [
            {
                number: 1,
                content: 'Анализируем конкурентов, создаем техническое задание и документацию, исходя из запросов клиента.'
            },
            {
                number: 2,
                content: 'Создаем платформу, отвечающей всем требованиям Минобразования и стандартам UI/UX-дизайна. Упор был на создание четного разделения функциональности платформы для пользователей, в зависимости от назначенной роли.'
            },
            {
                number: 3,
                content: 'Разработка сайта-воронки, предоставляющая подробную информацию как о компании в целом, так и о самом платформе “ПроОбразование” в частности.'
            },
            {
                number: 4,
                content: 'Создание системы, способной выдержать одновременный поток большого потока пользователей на платформе.'
            }
        ],
    },
};

export const EXPERTS = [
    {
        name: 'Вадим Колесников',
        role: 'ceo',
        image: '/team/vadim.jpeg',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Никита Подгорный',
        role: 'Коммерческий директор',
        image: '/team/nikolay.jpeg',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Форрест Гудлак',
        role: 'Руководитель отдела маркетинга',
        image: '/team/forrest.jpeg',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Жудиниллсон Армандо-Мучачо',
        role: 'Global teamlead',
        image: '/team/ju.jpeg',
    },
    {
        name: 'Валентин Макаров',
        role: 'Teamlead',
        image: '/team/valentin.jpeg',
    },
    {
        name: 'Николай Коновалов',
        role: 'Senior UI/UX-дизайнер',
        image: '/team/nikita.jpeg',
    },
]