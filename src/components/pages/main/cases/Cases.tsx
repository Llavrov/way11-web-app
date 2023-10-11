import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import TagGray from "@/components/common/tags/tagGray";

const CARDS_OF_CASES = [
    {
        tags: [ 'Buy Now', 'E-commercial'],
        photo: '/cases/image4.png',
        background: '#DD622D',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    {
        tags: [ 'ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: '#7C7AFE',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    {
        tags: [ 'Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: '#007FE0',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    }
];

export default function Cases() {
    return (
        <div className="w-full flex justify-between flex-wrap px-[50px] sm:p-3 ">
            <div className="flex flex-col gap-1">
                <div className="flex">
                    <TagGray title="что уже сделали" />
                </div>
                <h2 className="text-6xl font-bold text-white my-0">проекты</h2>
            </div>

            <div className="flex flex-col sm:w-full gap-6">
                {
                    CARDS_OF_CASES.map((cardObj) => (
                        <CardCase key={cardObj.background} {...cardObj} />
                    ))
                }

                <Link className="pt-[6px]" href="/cases">
                    <EmptyButton title="смотреть все" onClick={() => {}}/>
                </Link>
            </div>

            
        </div>
    )
}