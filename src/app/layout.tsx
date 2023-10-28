import './globals.css'
import 'swiper/css';
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

export const metadata = {
    title: 'Way11 - IT решения для любого бизнеса',
    description: 'Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.',
    og: {
        title: 'Way11 - IT решения для любого бизнеса',
        description: 'Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.',
        image: '/favicon.ico',
    },
    keywords: ['Аналитика', 'мобильная разработка', 'разработка', 'IT-безопасность', 'UI/UX дизайн', 'поддержка проектов'],
    icon: '/favicon.ico',
    image: '/favicon.ico',

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />

                <>
                    {children}
                </>

                <Footer />
            </body>
        </html>
    )
}
