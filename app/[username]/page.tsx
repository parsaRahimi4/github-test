import React from "react";
import style from "./index.module.css";
import Image from "next/image";
import RepositoryList from "@/components/username/repository-list/repository-list";

async function getInformation(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    // cache: "no-store",
    headers: {
      Authorization: "token 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",
    },
  });
  return res.json();
}

async function getUserRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    // cache: "no-store",
    headers: {
      Authorization: "token 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",
    },
  });
  return res.json();
}

export default async function Username({
  params: { username },
}: {
  params: { username: string };
}) {
  const userData = getInformation(username);
  const reposData = getUserRepos(username);
  const [information, repos] = await Promise.all([userData, reposData]);
  return (
    <div className={style.container}>
      <div className={style.leftPart}>
        <Image
          alt={information?.name}
          src={information?.avatar_url}
          width={296}
          height={296}
        />
        <h1>{information?.name}</h1>
        <div className={style.locationContainer}>
          <Image
            alt="location"
            src={"/imgs/username/location.svg"}
            width={30}
            height={30}
          />
          <p className={style.location}>{information?.location}</p>
        </div>
        <div className={style.repoNumber}>
          <p className={style.patterText}>public repo number : </p>
          <p className={style.number}> {information?.public_repos}</p>
        </div>
      </div>
      <RepositoryList repos={repos}/>
    </div>
  );
}
