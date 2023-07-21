"use client";
import React, { useState } from "react";
import style from "./sort.module.css";

type TypeRepositoryCart = {
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

function Sort({ setSort }: TypeRepositoryCart) {
  const [dropDown, setDropDown] = useState(false);
  const list = [
    { id: 1, title: "star", slug: "stargazers_count" },
    { id: 2, title: "fork", slug: "forks_count" },
    { id: 3, title: "last update", slug: "updated_at" },
    { id: 4, title: "clear filter", slug: "clear" },
  ];
  return (
    <>
      <div
        className={style.container}
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <p>sort</p>
      </div>
      {dropDown == true ? (
        <div className={style.dropDownPosition}>
          <div className={style.dropDownContainer}>
            {list?.map((val, index) => (
              <p
                className={style.Items}
                key={index}
                onClick={() => {
                  setSort(val?.slug);
                }}
              >
                {val?.title}
              </p>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Sort;
