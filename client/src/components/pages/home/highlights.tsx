import { Eye, Share, Star } from "lucide-react";

import { HighlightCard } from "./highlight-card";

const mostShared = {
  id: 7,
  title: "Dark Souls 4: What we know so far about this masterpiece",
  author: "Jules F.",
  content: `<div class='article'>
      <p>FromSoftware has remained tight-lipped about Dark Souls 4, but fans are already dissecting every frame of teaser footage. Early glimpses suggest a return to the series’ gothic roots, with even more verticality and environmental storytelling than before.</p>
      <p>The combat system appears refined rather than reinvented, leaning on familiar stamina management and parry mechanics. However, new magical systems and lore artifacts hint at a deeper integration between gameplay and narrative progression.</p>
      <p>Rumors also swirl about a co-op overhaul and improved netcode, which could bring the game in line with modern multiplayer expectations. If even half the leaks prove true, this may be FromSoftware’s most ambitious Souls game yet.</p></div>`,
  views: 21045,
  shares: 1234,
};

const mostViewed = {
  id: 1,
  title: "How the Euro 2024 Took Everyone By Surprise",
  author: "James Wilkins",
  content: `<div class='article'>
      <p>In one of the most unpredictable tournaments in recent memory, several underdog teams advanced past the group stage and into the semifinals. Analysts were stunned as traditional powerhouses like Germany and Spain exited earlier than expected. It’s a reminder that strategy, heart, and cohesion can still trump star-studded rosters.</p>
      <p>Coaches who emphasized discipline and counter-attacking football found surprising success. A mix of fresh talent and tactical flexibility gave underdogs a winning edge. The tournament also highlighted the importance of mental strength, as several matches were decided by late goals and dramatic penalty shootouts.</p>
      <p>Fans across the continent embraced the chaos, making Euro 2024 one of the most talked-about editions in history. The legacy of this year’s competition may well influence how national teams build their squads for future tournaments.</p></div>`,
  views: 15234,
  shares: 634,
};

export const Highlights = () => (
  <section>
    <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight text-balance mb-8 flex justify-center items-center gap-4">
      <Star size={32} />
      Our highlighted articles
    </h2>

    <div className="flex flex-row flex-wrap gap-8 justify-center">
      <HighlightCard
        hightlightTitle="Our most shared"
        HighlightTitleIcon={<Share />}
        hightlight="most-shared"
        title={mostShared.title}
        content={mostShared.content}
        author={mostShared.author}
        views={mostShared.views}
        shares={mostShared.shares}
      />

      <HighlightCard
        hightlightTitle="Our most viewed"
        HighlightTitleIcon={<Eye />}
        hightlight="most-viewed"
        title={mostViewed.title}
        content={mostViewed.content}
        author={mostViewed.author}
        views={mostViewed.views}
        shares={mostViewed.shares}
      />
    </div>
  </section>
);
