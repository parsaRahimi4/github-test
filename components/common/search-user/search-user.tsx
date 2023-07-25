"use client";
import React, { useEffect, useState } from "react";
import style from "./search-user.module.css";
import { useRouter } from "next/navigation";

function SearchUser() {
  const [userName, setUserName] = useState<string>("");
  const [userNameError, setUserNameError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName == "") {
      setUserNameError(true);
    } else {
      router.push(userName);
    }
  };

  useEffect(() => {
    if (userNameError == true && userName != "") {
      setUserNameError(false);
    } else {
      console.log("check");
    }
  }, [userName]);
  return (
    <form onSubmit={handleSubmit} className={style.formStyle}>
      <div className={style.inputContainer}>
        <input
          id={userNameError == true ? style.Error : ""}
          placeholder="Search for user"
          className={style.search}
          value={userName}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setUserName(e.currentTarget.value);
          }}
        />
        <button className={style.sendComment}>Search</button>
      </div>
    </form>
  );
}

export default SearchUser;
