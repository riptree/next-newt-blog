import Link from "next/link";
import { client, type Post } from "~/app/_util/newt-client";

export const revalidate = 60

export default async function Home() {
  const posts = await client.getContents<Post>({
    appUid: "blog",
    modelUid: "post",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul className="space-y-2">
        {posts.items.map((post) => (
          <li key={post._id} className="bg-white shadow rounded p-4">
            <Link href={`/post/${post._id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
