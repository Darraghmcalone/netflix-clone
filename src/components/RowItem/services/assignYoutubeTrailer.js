const assignYoutubeTrailer = (videos) => {
    const YOUTUBE_URLBASE = 'https://www.youtube.com/embed/';

    if (videos.length === 0) {
        return '';
    }

    const validVideos = videos.filter(video => video.site.toLowerCase() === 'youtube');
    const trailers = validVideos.filter(video => video.type.toLowerCase() === 'trailer');
    const teasers = validVideos.filter(video => video.type.toLowerCase() === 'teaser');

    if (trailers.length !== 0) {
        return YOUTUBE_URLBASE + trailers[0].key;
    }

    if (teasers.length !== 0) {
        return YOUTUBE_URLBASE + teasers[0].key;
    }

    return '';
};
export default assignYoutubeTrailer