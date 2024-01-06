import type { Actions } from "@sveltejs/kit";

export async function load() {
    return {};
};


export const actions: Actions = {
    updateBook: async({cookies, request}) => {
        console.log();
    }
};