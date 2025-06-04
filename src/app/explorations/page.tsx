export default function ExplorationsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Lab & Explorations</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Welcome to my personal lab! This is where I document my ongoing experiments, hobby projects, and learnings across a range of interests – from Docker and Raspberry Pi to electronics, gardening, hydroponics, and tinkering with old tech. It's a space for curiosity-driven development and sharing the joy of making.
      </p>
      
      <div className="space-y-10">
        {/* Example Placeholder - We can make this dynamic later */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Upcoming Content</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'll be sharing updates on my latest projects here soon. Topics might include:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
            <li>Setting up a home hydroponics system</li>
            <li>Building custom Raspberry Pi sensors</li>
            <li>Reviving old laptops with Linux</li>
            <li>Exploring new Docker orchestration tools</li>
            <li>Adventures in 3D printing for electronics enclosures</li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">Check back soon for more updates!</p>
        </div>
      </div>
    </div>
  );
}
