import { client, type Post } from "~/app/_util/newt-client";
import parse from 'html-react-parser';

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const post = await client.getContent<Post>({
    appUid: "blog",
    modelUid: "post",
    contentId: id
  });

  return (
    <article className="bg-white shadow rounded p-6 prose prose-sm">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      {parse(post.body)}
    </article>
  );
}
