import type { Zabor } from '$lib/do.js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
/** @type {import('./$types').PageLoad} */

export async function load({ platform }) {
	const myDo = platform!.env.MY_DO;

	const doId = myDo.idFromName('my-do-name');
	const doObj = myDo.get(doId);
	const doRespText = await doObj.increment();


	const myDo_zabor = platform!.env.ZABOR;

	const doId_zabor = myDo_zabor.idFromName('my-do-name');
	const doObj_zabor = myDo_zabor.get(doId_zabor);
	const doRespText_zabor = await doObj_zabor.getZabor();

	return {
		text: doRespText,
		zabor: doRespText_zabor
	};
}


export const actions = {
	default: async ({ cookies, request, url, platform }) => {
		const myDo_zabor = platform!.env.ZABOR;

		const doId_zabor = myDo_zabor.idFromName('my-do-name');
		const doObj_zabor: Zabor = myDo_zabor.get(doId_zabor);

		const data = await request.formData();
		const custom_message = data.get('text');

		if (!custom_message) {
			return fail(400, { text: custom_message, missing: true });
		}

		const text: string = custom_message!.toString().toLowerCase();

		if (text.includes("hit") || text.includes("gun") || text.includes("nig")) {
			return fail(400, { text: custom_message, missing: true });
		}

		const doRespText_zabor = await doObj_zabor.add(text);
	}
} satisfies Actions;
