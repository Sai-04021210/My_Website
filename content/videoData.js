/**
 * @typedef {'youtube' | 'vimeo'} VideoPlatform
 */

/**
 * @typedef {Object} VideoData
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {VideoPlatform} platform
 * @property {string} embedId
 * @property {string} [thumbnailUrl]
 */

/** @type {VideoData[]} */
export const videos = [
  {
    id: 'yt-sai-video-1',
    title: 'My Tech Showcase Video', // You can update this title
    description: 'A video from my YouTube channel. More details can be added here.', // You can update this description
    platform: 'youtube',
    embedId: 'z6nCAKYANlw',
    thumbnailUrl: 'https://img.youtube.com/vi/z6nCAKYANlw/hqdefault.jpg',
  },
  {
    id: 'yt-placeholder-2',
    title: 'Placeholder Video 2: Nature Timelapse',
    description: 'A beautiful nature timelapse. Imagine your own amazing video content here!',
    platform: 'youtube',
    embedId: 'rokGy0huYEA', // Example: Jellyfish Universe
    thumbnailUrl: 'https://img.youtube.com/vi/rokGy0huYEA/hqdefault.jpg',
  },
  // Add more video objects here as you create videos
  // Example structure for a Vimeo video (if you use Vimeo):
  // {
  //   id: 'vm-placeholder-3',
  //   title: 'Placeholder Video 3: Creative Short Film',
  //   description: 'An example of a creative short film hosted on Vimeo.',
  //   platform: 'vimeo',
  //   embedId: '123456789', // Replace with an actual Vimeo ID
  //   thumbnailUrl: 'https://i.vimeocdn.com/video/YOUR_VIMEO_THUMBNAIL_ID_HERE_0.webp?mw=900&mh=506&q=70',
  // },
];
