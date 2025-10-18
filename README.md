# SvelteKit Durable Objects

Yeah, you can make these work together, through some black magic!

Prerequisites: any Unix system, vite, npm, wrangler

Just `npm run build` and deploy it through `wrangler deploy` to your worker instance to check out!

## How this black magic even works?

It's just `cat` command appending classes from `src/lib/do.ts` to main file of worker, so it should work in any CI/CD environment.