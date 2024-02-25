import { type ContentData, createContentLoader } from "vitepress";

interface Post {
	title: string;
	url: string;
	date: string;
}

type Dictionary = Record<string, Post[]>;

declare const data: Dictionary;
export { data };

const extractTitle = (markdown: string): string => {
	const match = markdown.match(/^# (.*)$/m);
	return match ? match[1] : "マークダウン内のタイトルが見つかりません";
};

const formatURL = (url: string): string => url.replace(/\/\d+\./, "/");

const transformRawPosts = (rawPosts: ContentData[]): Dictionary => {
	const posts: Post[] = rawPosts
		.filter(
			({ frontmatter }) => frontmatter.published !== false && frontmatter.date,
		)
		.map(({ src = "", url, frontmatter }) => {
			let date: Date;
			if (typeof frontmatter.date === "string") {
				const [year, month, day] = frontmatter.date
					.split("-")
					.map((num) => parseInt(num, 10));
				date = new Date(Date.UTC(year, month - 1, day));
			} else if (frontmatter.date instanceof Date) {
				date = frontmatter.date;
			} else {
				throw new Error("ポストの日付が無効です");
			}
			return {
				title: extractTitle(src),
				url: formatURL(url),
				date: date.toISOString().slice(0, 10),
			};
		})
		.sort((a, b) => b.date.localeCompare(a.date));

	return posts.reduce<Dictionary>((acc, post) => {
		const year = post.date.slice(0, 4);
		acc[year] = acc[year] || [];
		acc[year].push(post);
		return acc;
	}, {});
};

export default createContentLoader("posts/*.md", {
	includeSrc: true,
	transform: transformRawPosts,
});
