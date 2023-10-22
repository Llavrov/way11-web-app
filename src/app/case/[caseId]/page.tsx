import CasePage from "@/components/pages/case";

type PageContent = {
    title: string;
    tag: string;
    description: string;
    image: string;
    imageBackground: string;
    taskAndSolution: string;
    solution: { number: number; content: string; }[];
};

const PAGES_CONTENT: Record<string, PageContent> = {
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


export default function Page({ params }: { params: { caseId: string }}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {
                Object.keys(PAGES_CONTENT).some((key) => params.caseId === key)
                    ? (<CasePage {...PAGES_CONTENT[params.caseId]} />)
                    : null
            }
        </main>
    )
}
