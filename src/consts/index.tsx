type PageContent = {
    title: string;
    tag: string;
    description: string;
    image: string;
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
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка',
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
        tag: '',
        description: '',
        image: '',
        imageBackground: '',
        taskAndSolution: '',
        solution: [],
    },
    'erp': {
        title: 'ERP',
        tag: '',
        description: '',
        image: '',
        imageBackground: '',
        taskAndSolution: '',
        solution: [],
    },
    'sgmk': {
        title: 'SGMK',
        tag: '',
        description: '',
        image: '/cases/sgmk.png',
        imageBackground: '',
        taskAndSolution: '',
        solution: [],
    },
    'about-education': {
        title: 'ПРоОбразование',
        tag: '',
        description: '',
        image: '',
        imageBackground: '',
        taskAndSolution: '',
        solution: [],
    },
};

export const EXPERTS = [
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Жудиниллсон Армандо-Мучачо',
        role: 'Global teamlead',
        image: '/about-us-01.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Валентин Макаров',
        role: 'Teamlead',
        image: '/about-us-02.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Николай Коновалов',
        role: 'Senior UI/UX-дизайнер',
        image: '/about-us-03.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Никита Подгорный',
        role: 'Коммерческий директор',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Форрест Гудлак',
        role: 'Руководитель отдела маркетинга',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
]