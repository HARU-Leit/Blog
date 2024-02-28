import { type ContentData, createContentLoader } from "vitepress";

interface Post {
	title: string;
	url: string;
	date: string;
	description: string;
	tags: string;
}

type Dictionary = Record<string, Post[]>;

declare const data: Dictionary;
export { data };

const formatURL = (url: string): string => url.replace(/\/\d+\./, "/");

const transformRawPosts = (rawPosts: ContentData[]): Dictionary => {
	return rawPosts.reduce<Dictionary>((acc, { url, frontmatter }) => {
		if (frontmatter.published !== false && frontmatter.date) {
			const date = new Date(frontmatter.date).toISOString().slice(0, 10);
			const year = date.slice(0, 4);
			const post = {
				title: frontmatter.title,
				url: formatURL(url),
				date,
				description: frontmatter.description,
				tags: frontmatter.tags,
			};
			if (!acc[year]) {
				acc[year] = [post];
			} else {
				const index = acc[year].findIndex((p) => p.date < post.date);
				if (index === -1) {
					acc[year].push(post);
				} else {
					acc[year].splice(index, 0, post);
				}
			}
		}
		return acc;
	}, {});
};

export default createContentLoader("posts/*.md", {
	includeSrc: true,
	transform: transformRawPosts,
});
