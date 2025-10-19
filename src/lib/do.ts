// This file is special, it is included in worker, so DO declares here.
import { DurableObject } from "cloudflare:workers";

export class DurableObjectClass extends DurableObject {
	async getCounterValue() {
		let value = (await this.ctx.storage.get("value")) || 0;
		return value;
	}

	async increment(amount = 1) {
		let value: number = (await this.ctx.storage.get("value")) || 0;
		value += amount;
		// You do not have to worry about a concurrent request having modified the value in storage.
		// "input gates" will automatically protect against unwanted concurrency.
		// Read-modify-write is safe.
		await this.ctx.storage.put("value", value);
		return value;
	}

	async decrement(amount = 1) {
		let value: number = (await this.ctx.storage.get("value")) || 0;
		value -= amount;
		await this.ctx.storage.put("value", value);
		return value;
	}
}


export class Zabor extends DurableObject {
	async getZabor() {
		let value = (await this.ctx.storage.get("zabor")) || [];
		return value;
	}

	async add(text: string) {
		text = text.trim().slice(0, 26)
		let value: Array<String> = (await this.ctx.storage.get("zabor")) || [];

		if (value.length > 50) {
			value.shift();
		}
		value.push(text);
		// You do not have to worry about a concurrent request having modified the value in storage.
		// "input gates" will automatically protect against unwanted concurrency.
		// Read-modify-write is safe.
		await this.ctx.storage.put("zabor", value);
	}
}