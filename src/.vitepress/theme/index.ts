import { h } from "vue";
import type { EnhanceAppContext, Theme } from "vitepress";
import { useData, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

import { createMediumZoomProvider } from "./libs/useMediumZoom";

import Home from "./components/home.vue";
import Archives from "./components/archives.vue";
import DocHeader from "./layouts/DocHeader.vue";
import Tags from "./components/tags.vue";

import "./styles/index.scss";

export default {
	extends: DefaultTheme,
	setup() {
		const { frontmatter } = useData();
		const route = useRoute();
		giscusTalk(
			{
				repo: "HARU-Leit/Blog",
				repoId: "R_kgDOLXmZpg",
				category: "Announcements",
				categoryId: "DIC_kwDOLXmZps4Cdfxz",
				mapping: "pathname",
				inputPosition: "bottom",
				lang: "ja",
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
		app.component("Home", Home);
		app.component("Archives", Archives);
		app.component("Tags", Tags);
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"doc-before": () => h(DocHeader),
		});
	},
} satisfies Theme;
