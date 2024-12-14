import Link from "next/link";
import { client, type Post } from "~/app/_util/newt-client";

export default async function Home() {
  const posts = await client.getContents<Post>({
    appUid: "blog",
    modelUid: "post",
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">記事一覧</h1>
      <ul className="list-inside list-disc">
        {posts.items.map((post) => (
          <li key={post._id}>
            <Link href={`/post/${post._id}`} className="underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
