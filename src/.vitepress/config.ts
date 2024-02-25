import dotenv from "dotenv";
import { defineConfig } from "vitepress";
import { feed } from "./theme/libs/feedRss";
import { CustomSidebar } from "./theme/libs/customNavbar";

dotenv.config();

export default defineConfig({
	title: "Haru's Blog",
	base: "/",
	description: "A VitePress Site",
	lang: "ja-JP",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		[
			"link",
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		],
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+JP:wght@100..900&display=swap",
			},
		],
		[
			"script",
			{
				async: "",
				src: "https://www.googletagmanager.com/gtag/js?id=G-Y3TZ46VM28",
			},
		],
		[
			"script",
			{},
			`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y3TZ46VM28');`,
		],
	],

	cleanUrls: true,
	lastUpdated: true,
	appearance: "dark",
	markdown: {
		image: {
			lazyLoading: true,
		},
	},
	// buildEnd: feed,
	themeConfig: {
		nav: [
			{ text: "ホーム", link: "/" },
			{ text: "アーカイブ", link: "/archives/" },
			{ text: "タグ", link: "/tags/" },
			{ text: "私について", link: "/profile/" },
		],
		sidebar: {
			...CustomSidebar(),
		},
		logo: "/favicon.ico",
		darkModeSwitchLabel: "外観",
		returnToTopLabel: "トップへ戻る",
		outline: {
			label: "目次",
			level: [2, 3],
		},
		search: {
			provider: "local",
		},
		lastUpdated: {
			text: "最終更新日",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium",
			},
		},
		docFooter: {
			prev: "前のページ",
			next: "次のページ",
		},
		//TODO:カスタムフッターに変更する可能性がある
		footer: {
			copyright: "Copyright © 2024-present Haru",
			message: "VitePressで制作",
		},
		socialLinks: [
			// TODO:自分のソーシャルリンクに変更する
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
				},
				link: "https://github.com/vuejs/vitepress",
				ariaLabel: "GitHub",
			},
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
				},
				link: "https://twitter.com/vite_js",
				ariaLabel: "Twitter",
			},
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
				},
				link: "/feed.xml",
				ariaLabel: "RSS",
			},
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`,
				},
				link: "https://www.buymeacoffee.com/haru0609",
				ariaLabel: "コーヒーを買ってくれると嬉しいです",
			},
		],
	},
	// sitemap: {
	// 	hostname: "/",
	// 	lastmodDateOnly: true,
	// 	transformItems: (items) => {
	// 		return items.map((item) => {
	// 			if (item.url.includes("/posts/")) {
	// 				return { ...item, changefreq: "weekly", priority: 0.8 };
	// 			}
	// 			return item;
	// 		});
	// 	},
	// },
});
