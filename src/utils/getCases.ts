import {ENDPOINT, TOKEN} from "@/consts/fetch";

export type TCasesResolve = {
    name: string;
    backgroundColor: string;
    createdAt: string;
    problem: string;
    publishedAt: string;
    shortDescription: string;
    year: string | number;
    mainImage?: string;
}

export type TCases = {
    title: string;
    background: string;
    createdAt: string;
    problem: string;
    publishedAt: string;
    description: string;
    year: string | number;
    photo?: string;
    tags: string[];
    link?: string;
}

export function getProjects() {
    return fetch(`${ENDPOINT}/projects`, {
        headers: {
            "Content-Type": "application/json;charset-utf-8",
            authorization: TOKEN,
        },
    })
        .then(resolve => resolve.json())
}
