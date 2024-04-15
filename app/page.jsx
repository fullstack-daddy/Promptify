import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="description text-center pt-5">
        Promptify is an open-source platform that harnesses the power of AI to
        empower users in the modern world to explore, generate, and collaborate
        on imaginative prompts.
      </p>

      <Feed />
    </section>
  );
}
