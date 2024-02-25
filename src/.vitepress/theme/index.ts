// types import
import type { EnhanceAppContext, Theme } from "vitepress";
import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { createMediumZoomProvider } from "./libs/useMediumZoom";

import Posts from "./components/Posts.vue";
import DocHeader from "./layouts/DocHeader.vue";

// css import
import "./styles/index.scss";

export default {
	extends: DefaultTheme,
	setup() {
		const { frontmatter } = useData();
		const route = useRoute();

		// TODO: 自分のリポジトリの情報を入れる
		giscusTalk(
			{
				repo: "https://github.com/HARU-Leit/Blog",
				repoId: "R_kgDOLXmZpg",
				category: "Announcements",
				categoryId: "DIC_kwDOLXmZps4Cdfxz",
				mapping: "pathname",
				inputPosition: "bottom",
				lang: "ja-JP",
				loading: "lazy",
			},
			{
				frontmatter,
				route,
			},
			true,
		);
	},
	enhanceApp({ app, router }: EnhanceAppContext) {
		createMediumZoomProvider(app, router);
		app.component("Posts", Posts);
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"doc-before": () => h(DocHeader),
		});
	},
} satisfies Theme;
