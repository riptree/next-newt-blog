import { client, type Post } from "~/app/_util/newt-client";
import parse from 'html-react-parser';

export default async function Page({ params }: { params: { id: string } }) {
  const post = await client.getContent<Post>({
    appUid: "blog",
    modelUid: "post",
    contentId: params.id
  });

  return (
    <div className="p-4">
      <h1>{post.title}</h1>
      <article className="prose prose-sm">{parse(post.body)}</article>
    </div>
  );
}
