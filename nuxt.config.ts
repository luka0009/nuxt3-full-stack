// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	nitro: {
		plugins: ["~/server/database.ts"],
	},
	runtimeConfig: {
		apiSecret: {
			MONGO_URL: process.env.MONGO_URL,
		},
	},
});
