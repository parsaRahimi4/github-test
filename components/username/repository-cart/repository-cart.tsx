import React from "react";
import style from "./repository-cart.module.css";
import Image from "next/image";
import { RepositoryCartTypes } from "@/types/username";
import { dateToPersian } from "../../../functions/dateToPersian";

type TypeRepositoryCart = {
  data: RepositoryCartTypes;
};

function RepositoryCart({ data }: TypeRepositoryCart) {
  return (
    <div className={style.container}>
      <div className={style.topPart}>
        <p>{data?.name}</p>
        <span>{data?.visibility}</span>
      </div>
      <div className={style.bottomPart}>
        {/* <p className={style.language}>{data?.language}</p> */}
        <div className={style.star}>
          <Image
            alt="location"
            src={"/imgs/username/star.svg"}
            width={30}
            height={30}
          />
          <p>{data?.stargazers_count}</p>
        </div>
        <div className={style.fork}>
          <Image
            alt="location"
            src={"/imgs/username/fork.svg"}
            width={30}
            height={30}
          />
          <p>{data?.forks_count}</p>
        </div>
        <div className={style.dateContainer}>
          <span>update at : </span>
          <p>{dateToPersian(data?.updated_at).toString()}</p>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCart;
