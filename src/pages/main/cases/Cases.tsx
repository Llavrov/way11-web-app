import Link from "next/link";
import CardCase from "@/components/cards/CardCase";
import EmptyButton from "@/components/emptyButton";

const CARDS_OF_CASES = [
    {
        tags: ['Buy Now', 'E-commercial'],
        photo: '/cases/image4.png',
        background: 'orange'
    },
    {
        tags: ['ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: 'purple'
    },
    {
        tags: ['Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: 'blue'
    }
];

export default function Cases() {
    return (
        <div className="w-full flex justify-between items-start flex-wrap px-[50px] sm:p-3 ">
            <div className="sticky top-0 h-[400px]">
                <span className="text-lg rounded-full border-white border border-solid  p-3 px-5 text-white font-medium">что уже сделали</span>
                <h2 className="text-6xl font-bold text-white my-7">ПРОЕКТЫ</h2>
            </div>

            <div className="flex flex-col w-50 sm:w-full">
                {
                    CARDS_OF_CASES.map((cardObj) => (
                        <CardCase key={cardObj.background} {...cardObj} />
                    ))
                }
                <Link href="/cases">
                    <EmptyButton title="смотреть все" onClick={() => { }} />
                </Link>
            </div>


        </div>
    )
}