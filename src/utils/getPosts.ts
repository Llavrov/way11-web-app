import { ENDPOINT, TOKEN } from "@/consts/fetch";

export function getPosts() {
    return fetch(`${ENDPOINT}/posts`, {
        headers: {
            "Content-Type": "application/json;charset-utf-8",
            authorization: TOKEN,
        },
    })
        .then(resolve => resolve.json())
}
