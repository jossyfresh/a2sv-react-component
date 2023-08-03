import React from "react";

interface Props {
  imgurl: String;
}

const Avatar = ({ imgurl }: Props) => {
  return (
    <div>
      <img
        className="rounded-full w-[90px] h-[90px]"
        src={imgurl.toString()}
        alt=""
      />
    </div>
  );
};

export default Avatar;
