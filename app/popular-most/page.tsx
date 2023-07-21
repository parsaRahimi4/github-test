import React from "react";
import style from "./index.module.css";
import RepositoryList from "@/components/username/repository-list/repository-list";

async function getPopularRepos() {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=10`,
    {
      // cache: "no-store",
      headers: {
        Authorization: "token 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",
      },
    }
  );
  return res.json();
}

export default async function Popular() {
  const popularData = getPopularRepos();
  const [popularRepos] = await Promise.all([popularData]);

  return (
    <div className={style.container}>
      <h1>Most popular repositories in github!!!!</h1>
      <RepositoryList repos={popularRepos?.items} />
    </div>
  );
}
