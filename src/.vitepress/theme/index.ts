// types import
import type { EnhanceAppContext, Theme } from "vitepress";
import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { createMediumZoomProvider } from "./libs/useMediumZoom";

// component import
import Home from "./components/home.vue";
import Archives from "./components/archives.vue";
import DocHeader from "./layouts/DocHeader.vue";

// css import
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
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"doc-before": () => h(DocHeader),
		});
	},
} satisfies Theme;
