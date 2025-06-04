import { videos } from '../../../content/videoData'; // Adjust path as necessary

interface Video {
  id: string;
  title: string;
  description: string;
  platform: 'youtube' | 'vimeo';
  embedId: string;
  thumbnailUrl?: string;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  let embedUrl = '';
  if (video.platform === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${video.embedId}`;
  } else if (video.platform === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${video.embedId}`;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {embedUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default function VideosPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Video Content</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto">
        Welcome to my video gallery! Here, I share tutorials, project showcases, and discussions related to IoT, Digital Twins, Industry 4.0, and my various tech explorations.
      </p>

      {videos.length === 0 ? (
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center text-gray-500 dark:text-gray-400">
          <p className="text-xl mb-2">No videos yet, but I'm working on it!</p>
          <p>Check back soon for hands-on demos, conceptual explanations, and hobby project showcases.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
