import { List } from "lucide-react";
import { ArticleCard } from "./article-card";

const articles = [
  {
    id: 1,
    title: "How the Euro 2024 Took Everyone By Surprise",
    author: "James Wilkins",
    content: `<div class='article'>
      <p>In one of the most unpredictable tournaments in recent memory, several underdog teams advanced past the group stage and into the semifinals. Analysts were stunned as traditional powerhouses like Germany and Spain exited earlier than expected. It’s a reminder that strategy, heart, and cohesion can still trump star-studded rosters.</p>
      <p>Coaches who emphasized discipline and counter-attacking football found surprising success. A mix of fresh talent and tactical flexibility gave underdogs a winning edge. The tournament also highlighted the importance of mental strength, as several matches were decided by late goals and dramatic penalty shootouts.</p>
      <p>Fans across the continent embraced the chaos, making Euro 2024 one of the most talked-about editions in history. The legacy of this year’s competition may well influence how national teams build their squads for future tournaments.</p></div>`,
    views: 15234,
    shares: 634,
  },
  {
    id: 2,
    title: "Unity vs Unreal in 2025: The Indie Developer's Perspective",
    author: "Lena Chen",
    content: `<div class='article'>
      <p>As Unity adjusts its monetization strategy and Unreal expands its Blueprint system, indie developers are reevaluating their tools of choice. While Unreal offers stunning visuals and performance, Unity still dominates when it comes to flexibility and ease of use for smaller teams.</p>
      <p>With Unity's asset store and strong community support, many indies find the transition between prototyping and production more intuitive. However, Unreal’s recent enhancements in C++ tooling and visual scripting have narrowed the usability gap significantly.</p>
      <p>For developers building multiplayer or VR experiences, the choice is more nuanced than ever. New platforms like Godot and Bevy also introduce alternatives, forcing devs to consider long-term maintenance, publishing pipelines, and community support as critical factors.</p></div>`,
    views: 8932,
    shares: 421,
  },
  {
    id: 3,
    title: "Why TypeScript is Dominating Modern Web Dev",
    author: "Diego Navarro",
    content: `<div class='article'>
      <p>TypeScript has evolved from a niche JavaScript superset into a foundational tool for large-scale applications. Its ability to catch bugs early, offer intelligent autocompletion, and enforce consistent code has made it a go-to choice for teams seeking both speed and safety.</p>
      <p>Libraries like tsup and frameworks like Next.js integrate deeply with TypeScript, making the onboarding experience smoother than ever. Even smaller teams now prefer TypeScript for side projects and open source contributions due to the productivity gains.</p>
      <p>As the frontend and backend worlds continue to converge via fullstack TypeScript frameworks like tRPC and Remix, its relevance will only grow. In fact, TypeScript is now seen not just as a safer JavaScript, but as the standard language for the modern web stack.</p></div>`,
    views: 11789,
    shares: 513,
  },
  {
    id: 4,
    title: "The Rise of Women in Esports. The future of competitive gaming",
    author: "Mina Rojas",
    content: `<div class='article'>
      <p>Women are not just participating—they're leading and winning in games like Valorant, League of Legends, and CS2. Recent tournaments have seen all-women teams place among the top finishers, and mixed-gender teams are becoming more common and accepted by the community.</p>
      <p>Organizations are responding by launching dedicated women's divisions and mentorship programs aimed at fostering new talent. Streamers and content creators are also playing a major role, using their platforms to raise awareness and inspire the next generation of gamers.</p>
      <p>This movement is more than representation—it's about rewriting the culture of competitive gaming. The continued push for inclusivity, combined with clear success stories, signals that the industry is slowly but surely becoming a level playing field.</p></div>`,
    views: 12450,
    shares: 674,
  },
  {
    id: 5,
    title: "React Server Components Are Changing Everything",
    author: "Diego Navarro",
    content: `<div class='article'>
      <p>React Server Components (RSC) are shifting how developers architect web applications by moving rendering logic to the server. This allows for leaner client bundles and faster load times without sacrificing interactivity. Frameworks like Next.js are already leveraging RSC to offer hybrid rendering approaches.</p>
      <p>RSC introduces new design patterns for state management and data fetching, reducing the need for heavy client-side logic. Developers report performance improvements across the board, especially in content-heavy apps such as blogs, e-commerce platforms, and dashboards.</p>
      <p>While adoption is still early, the ecosystem is evolving quickly. Tools like Vercel and Remix are already testing RSC features, signaling a trend toward server-first thinking in modern frontend development.</p></div>`,
    views: 9984,
    shares: 382,
  },
  {
    id: 6,
    title: "Wimbledon 2025: New Stars Take the Court",
    author: "Claire Bennett",
    content: `<div class='article'>
      <p>Wimbledon 2025 has proven to be a turning point in professional tennis, with new faces rising to international prominence. Injuries and retirements among legacy players opened the field for a fresh crop of contenders, many of whom had never appeared on a major stage before.</p>
      <p>The fans embraced the shift with enthusiasm, filling Centre Court to watch upstarts go toe-to-toe with seasoned veterans. This new generation brings a more aggressive, dynamic style of play that reflects broader changes in athletic training and sports science.</p>
      <p>Commentators suggest we're witnessing the beginning of a new era, one that will redefine the aesthetics and competitive dynamics of the sport for the next decade.</p></div>`,
    views: 13876,
    shares: 712,
  },
  {
    id: 7,
    title: "Dark Souls 4: What we know so far about this masterpiece",
    author: "Jules F.",
    content: `<div class='article'>
      <p>FromSoftware has remained tight-lipped about Dark Souls 4, but fans are already dissecting every frame of teaser footage. Early glimpses suggest a return to the series’ gothic roots, with even more verticality and environmental storytelling than before.</p>
      <p>The combat system appears refined rather than reinvented, leaning on familiar stamina management and parry mechanics. However, new magical systems and lore artifacts hint at a deeper integration between gameplay and narrative progression.</p>
      <p>Rumors also swirl about a co-op overhaul and improved netcode, which could bring the game in line with modern multiplayer expectations. If even half the leaks prove true, this may be FromSoftware’s most ambitious Souls game yet.</p></div>`,
    views: 21045,
    shares: 1234,
  },
  {
    id: 8,
    title: "Why Rust is Becoming the Go-To for Backend Devs",
    author: "Omar Idris",
    content: `<div class='article'>
      <p>Rust has gained traction among backend developers for its memory safety, concurrency model, and lack of a garbage collector. In performance-critical environments, Rust offers near-C++ speed with much safer abstractions, reducing crashes and memory leaks significantly.</p>
      <p>Modern web frameworks like Axum and Rocket have made Rust more accessible, even for developers without systems programming backgrounds. The language's strict compiler and strong type system encourage better architectural decisions from the start.</p>
      <p>Enterprises and startups alike are now using Rust for building APIs, microservices, and CLI tools. With community momentum and increasing library support, Rust is on track to become a backend standard.</p></div>`,
    views: 8720,
    shares: 499,
  },
  {
    id: 9,
    title: "The NBA's New Global Draft: A Game-Changer?",
    author: "James Wilkins",
    content: `<div class='article'>
      <p>The NBA’s new global draft initiative aims to expand the league's talent pipeline by tapping into underrepresented regions. Prospects from Africa, Southeast Asia, and Latin America are getting more visibility and structured development opportunities than ever before.</p>
      <p>While some critics argue it may dilute the talent pool, others see it as a necessary evolution. Scouts have already identified several standout players who could shake up next year’s roster predictions.</p>
      <p>This could also be a huge step toward globalizing the NBA brand, both in terms of talent and viewership. Expect to see more international tournaments and collaborations as the draft process matures.</p></div>`,
    views: 16327,
    shares: 859,
  },
  {
    id: 10,
    title: "Nintendo's Next Console Leaks: What to Expect?",
    author: "Kenji Okada",
    content: `<div class='article'>
      <p>Leaks from multiple sources suggest Nintendo's next console will build upon the hybrid success of the Switch. Key upgrades include improved battery life, OLED touchscreen, and faster storage for smoother load times and enhanced visuals.</p>
      <p>Developers are reportedly thrilled about backward compatibility and enhanced development tools, which would allow a seamless transition for existing Switch titles. Industry whispers also point to a new Mario Kart and a Metroid sequel at launch.</p>
      <p>Analysts expect the official reveal to happen at Tokyo Game Show 2025, with a potential global launch by March 2026. This could be Nintendo’s most important hardware release since the Wii.</p></div>`,
    views: 19012,
    shares: 1021,
  },
];

export const ArticleList = () => {
  return (
    <section>
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 flex justify-center items-center gap-4">
        <List size={32} /> All our articles
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[90%] mx-auto">
        {articles.map(({ id, title, content, author, views, shares }) => (
          <ArticleCard
            key={id}
            title={title}
            content={content}
            author={author}
            views={views}
            shares={shares}
          />
        ))}
      </div>
    </section>
  );
};
