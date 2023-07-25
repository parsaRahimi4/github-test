import React from "react";
import style from "./index.module.css";
import Image from "next/image";
import RepositoryList from "@/components/username/repository-list/repository-list";
import SearchUser from "@/components/common/search-user/search-user";

async function getInformation(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    // headers: {
    //   Authorization: "token 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",
    // },
    // cache: "no-store",
    // headers: {
    //   Authorization: "token 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",
    // },
  });
  return res.json();
}

async function getUserRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    // headers: {
    //   Authorization: "token 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",
    // },
    // cache: "no-store",
    // headers: {
    //   Authorization: "token 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",
    // },
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
        <div className={style.contentPart}>
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
          <SearchUser />
        </div>
        {/* <h1>{information?.name}</h1>
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
        <SearchUser /> */}
      </div>
      <RepositoryList repos={repos} />
    </div>
  );
}
