import CasePage from "@/components/pages/case";
import {PAGES_CONTENT} from "@/consts";

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
