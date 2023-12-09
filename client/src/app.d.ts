// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
					photo: String,
					role: String,
					_id: String,
					name: String,
					email: String,
					id: String
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
