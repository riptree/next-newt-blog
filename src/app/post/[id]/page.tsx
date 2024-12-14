import { client, type Post } from "~/app/_util/newt-client";
import parse from 'html-react-parser';

export default async function Page({ params }: { params: { id: string } }) {
  const post = await client.getContent<Post>({
    appUid: "blog",
    modelUid: "post",
    contentId: params.id
  });

  return (
    <article className="bg-white shadow rounded p-6 prose prose-sm">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      {parse(post.body)}
    </article>
  );
}
