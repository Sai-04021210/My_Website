import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Using RSC version for App Router
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/blog');

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}

async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data,
      content,
      slug,
    };
  } catch (err) {
    return null; // Post not found
  }
}

export async function generateMetadata({ params }: PostProps) {
  const post = await getPostData(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: post.frontmatter.title || 'Blog Post',
    description: post.frontmatter.summary || '',
  };
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Triggers 404 page
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 prose dark:prose-invert lg:prose-xl">
      <header className="mb-8 border-b pb-4 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.date && (
          <p className="text-md text-gray-500 dark:text-gray-400">
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </header>
      
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={post.content} />

      {/* Add styling for MDX content if needed, e.g., via globals.css or Tailwind typography plugin */}
    </article>
  );
}
