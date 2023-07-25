"use client";
import React, { useEffect, useState } from "react";
import style from "./repository-list.module.css";
import RepositoryCart from "../repository-cart/repository-cart";
import Sort from "../sort/sort";
import { usePathname } from "next/navigation";
import Search from "@/components/popular-most/search/search";
import { dateFormater } from "../../../functions/dateFormater";

type TypeRepositoryList = {
  repos: Array<{
    forks_count: number;
    name: string;
    updated_at: string;
    stargazers_count: number;
  }>;
};

function RepositoryList({ repos }: TypeRepositoryList) {
  const [searchLoading, setSearchLoading] = useState(false);
  const [sort, setSort] = useState<string>("none");
  const [respositoryList, setRespositoryList] = useState<
    Array<{
      forks_count: number;
      name: string;
      updated_at: string;
      stargazers_count: number;
    }>
  >(repos);

  const pathname = usePathname();
  let arr = [...respositoryList];
  useEffect(() => {
    if (sort == "stargazers_count") {
      arr.sort(function (a, b) {
        return -(a.stargazers_count - b.stargazers_count);
      });
      setRespositoryList(arr);
    } else if (sort == "forks_count") {
      arr.sort(function (a, b) {
        return -(a.forks_count - b.forks_count);
      });
      setRespositoryList(arr);
    } else if (sort == "updated_at") {
      arr.sort(function (a, b) {
        return (
          dateFormater(b.updated_at).getTime() -
          dateFormater(a.updated_at).getTime()
        );
      });
      setRespositoryList(arr);
    } else {
      setRespositoryList(repos);
    }
  }, [sort]);

  return (
    <div
      className={
        pathname == "/popular-most" ? style.popularContainer : style.container
      }
    >
      {repos?.length == 0 ? (
        <div className={style.emptyContainer}>
          <p className={style.error}>its empty!!!!!</p>
        </div>
      ) : (
        <div className={style.columnContainer}>
          {pathname == "/popular-most" ? (
            <Search
              repos={respositoryList}
              setRepos={setRespositoryList}
              setSearchLoading={setSearchLoading}
              pureRepos={repos}
            />
          ) : (
            <Sort setSort={setSort} />
          )}
          <div
            className={
              pathname == "/popular-most"
                ? style.cartsContainerPopular
                : style.cartsContainer
            }
          >
            {searchLoading == true ? (
              <div id={style.loader}></div>
            ) : (
              respositoryList?.map((val: object, index: number) => (
                <RepositoryCart key={index} data={val} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RepositoryList;
