export class DurableObjectClass {
	state: DurableObjectState;
	count: number;
  
	constructor(state: DurableObjectState) {
	  this.state = state;
	  this.count = 0;
	}
  
	async fetch(request: Request) {
	  this.count++;
	  await this.state.storage.put('count', this.count);
	  return new Response(`Counter: ${this.count}`);
	}
  }
  