export const CustomSidebar = () => {
	return {
		// アーカイブページ用のサイドバー
		"/archives/": [
			{
				text: "アーカイブ",
				items: [
					{ text: "2023年", link: "/archives/2023/" },
					{ text: "2022年", link: "/archives/2022/" },
					// 他の年...
				],
			},
		],
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
