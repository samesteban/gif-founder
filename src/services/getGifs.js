export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=xfUUA4SUtgrieHLx6sThBQ2DjzaYfp9P&q=${category}&limit=12`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.preview_webp.url,
	}));

	return gifs;
};
