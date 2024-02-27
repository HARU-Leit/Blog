export const tagsToArray = (tags: string | undefined): string[] => {
	if (typeof tags !== "string") {
		return [];
	}
	return tags.split(",").map((tag) => tag.trim());
};

export const formatDate = (date: string): string => {
	const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
	const articleDate = new Date(year, month - 1, day);
	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	articleDate.setHours(0, 0, 0, 0);
	const differenceInDays =
		(currentDate.getTime() - articleDate.getTime()) / (1000 * 3600 * 24);

	if (differenceInDays < 1) {
		return "今日";
	}
	if (differenceInDays < 8) {
		return `${Math.floor(differenceInDays)}日前`;
	}
	const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
		day,
	).padStart(2, "0")}`;
	return formattedDate;
};
