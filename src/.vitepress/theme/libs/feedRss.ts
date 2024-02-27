import { writeFileSync } from "fs";
import path from "path";
import { Feed } from "feed";
import {
	type ContentData,
	type SiteConfig,
	createContentLoader,
} from "vitepress";

const id: string = "Haru";
const baseUrl: string = "https://vitepress-haru-blog.vercel.app";
type RssGenerator = (config: SiteConfig) => Promise<void>;
export const feed: RssGenerator = async (config) => {
	const feed: Feed = new Feed({
		id: baseUrl,
		title: `${id}'s blog`,
		language: "ja-JP",
		link: baseUrl,
		description: "A VitePress Site",
		image: `${baseUrl}/favicon.ico`,
		favicon: `${baseUrl}/favicon.ico`,
		copyright: `Copyright (c) 2024-present ${id}`,
	});

	const posts: ContentData[] = await createContentLoader("posts/*.md", {
		excerpt: true,
		render: true,
		transform: (rawData) => {
			return rawData
				.filter((post) => post.frontmatter.published !== false)
				.sort((a, b) => {
					return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
				});
		},
	}).load();

	for (const { url, frontmatter, html } of posts) {
		feed.addItem({
			title: frontmatter.title,
			id: `${baseUrl}${url.replace(/\/\d+\./, "/")}`,
			link: `${baseUrl}${url.replace(/\/\d+\./, "/")}`,
			date: new Date(frontmatter.date),
			content: html ?? "",
			author: [
				{
					name: `${id}`,
					email: "haru.leit@gmail.com",
					link: "https://github.com/HARU-Leit/Blog",
				},
			],
		});
	}

	writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2());
};
