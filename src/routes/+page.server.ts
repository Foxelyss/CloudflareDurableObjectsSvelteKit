import type { Zabor } from '$lib/do.js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
/** @type {import('./$types').PageLoad} */

export async function load({ platform }) {

	// await platform!.env.EXAMPLE_KV.put("my_key", "Hello");
	// const kv_value_before = await platform?.env?.EXAMPLE_KV.get("my_key");

	const myDo = platform!.env.MY_DO;

	const doId = myDo.idFromName('my-do-name');
	const doObj = myDo.get(doId);
	const doRespText = await doObj.increment();


	const myDo_zabor = platform!.env.ZABOR;

	const doId_zabor = myDo_zabor.idFromName('my-do-name');
	const doObj_zabor = myDo_zabor.get(doId_zabor);
	const doRespText_zabor = await doObj_zabor.getZabor();

	// const kv_value_after = await platform?.env?.EXAMPLE_KV.get("my_key");

	// const doRespText = platform!.env;
	return {
		text: doRespText,
		zabor: doRespText_zabor
		// kv_value_before,
		// kv_value_after
	};
}


export const actions = {
	default: async ({cookies, request, url ,platform}) => {
		const myDo_zabor = platform!.env.ZABOR;

		const doId_zabor = myDo_zabor.idFromName('my-do-name');
		const doObj_zabor:Zabor = myDo_zabor.get(doId_zabor);
		const data = await request.formData();
		const email = data.get('text');
		
		if (!email) {
			return fail(400, { email, missing: true });
		}
		const text: string = email!.toString().toLowerCase()
		if(text.includes("hitl")||text.includes("gun")||text.includes("nigg")||text.includes("ass")){
			return fail(400, { email, missing: true });
		}

		const doRespText_zabor = await doObj_zabor.add(text);
	}
} satisfies Actions;
