import {ENDPOINT, TOKEN} from "@/consts/fetch";

export function getProjects() {
    return fetch(`${ENDPOINT}/projects`, {
        headers: {
            "Content-Type": "application/json;charset-utf-8",
            authorization: TOKEN,
        },
    })
        .then(resolve => resolve.json())
}
