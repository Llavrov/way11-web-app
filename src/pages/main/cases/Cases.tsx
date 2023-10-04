import Link from "next/link";
import CardCase from "./CardCase";

const CARDS_OF_CASES = [
    {
        tags: [ 'Buy Now', 'E-commercial'],
        photo: '/cases/image4.png',
        background: '#DD622D'
    },
    {
        tags: [ 'ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: '#7C7AFE'
    },
    {
        tags: [ 'Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: '#007FE0'
    }
];

export default function Cases() {
    return (
        <div className="flex justify-between p-24 w-full">
            <div>
                <span className="text-lg rounded-full border-white border border-solid  p-3 px-5 text-white font-medium">что уже сделали</span>
                <h2 className="text-6xl font-bold text-white my-7">ПРОЕКТЫ</h2>
            </div>

            <div className="">
                {
                    CARDS_OF_CASES.map((cardObj) => (
                        <CardCase key={cardObj.background} {...cardObj} />
                    ))
                }
                
                <Link href="/cases">смотреть все</Link>
            </div>

            
        </div>
    )
}