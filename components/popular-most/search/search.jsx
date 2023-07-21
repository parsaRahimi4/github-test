"use client";
import React, { useRef } from "react";
import style from "./search.module.css";

function Search({ repos, setRepos, setSearchLoading, pureRepos }) {
  const inputRef = useRef(null);

  const handleSearch = (v) => {
    if (v?.target?.value?.length > 2) {
      handleInputRef();
      setSearchLoading(true);
      const value = v.target.value;
      let obj = repos.filter((i) =>
        i.name?.toLowerCase().includes(value?.toLowerCase())
      );
      setRepos(obj);
      setSearchLoading(false);
    } else if (v?.target?.value?.length < 3) {
      setRepos(pureRepos);
    } else {
      console.log("here");
    }
  };

  const handleInputRef = () => {
    const input = document.getElementById("inputId");
    input.focus();
  };

  return (
    <div className={style.container}>
      <input
        id="inputId"
        ref={inputRef}
        placeholder="Search"
        className={style.search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
