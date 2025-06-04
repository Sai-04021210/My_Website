import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'content/blog');

interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

async function getSortedPostsData(): Promise<Post[]> {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      title: matterResult.data.title || 'Untitled Post',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      summary: matterResult.data.summary || '',
    } as Post;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function BlogPage() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Blog</h1>
      
      {allPosts.length === 0 ? (
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center text-gray-500 dark:text-gray-400">
          <p className="text-xl mb-2">No posts yet, but stay tuned!</p>
          <p>I'm working on some exciting content covering IoT, Digital Twins, open-source projects, and my tech explorations.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {allPosts.map(({ slug, title, date, summary }) => (
            <article key={slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <header className="mb-2">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </header>
              <p className="text-gray-700 dark:text-gray-300">
                {summary}
              </p>
              <Link href={`/blog/${slug}`} className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

