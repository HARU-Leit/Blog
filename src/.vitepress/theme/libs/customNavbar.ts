export const CustomSidebar = () => {
	return {
		// アーカイブページ用のサイドバー
		"/archives/": [],
		// タグページ用のサイドバー
		"/tags/": [
			{
				text: "タグ",
				items: [
					{ text: "プログラミング", link: "/tags/programming/" },
					{ text: "デザイン", link: "/tags/design/" },
				],
			},
		],
		"/profile/": [],
		// 他のパスに対するデフォルトのサイドバー
		"/": [
			{
				text: "関連タグ",
				items: [
					{ text: "プログラミング", link: "/tags/programming/" },
					{ text: "デザイン", link: "/tags/design/" },
				],
			},
		],
	};
};
