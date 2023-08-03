import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";

interface ProfileCardProps {
  name: string;
  bio: string;
  website: string;
  imgurl: string;
}

const ProfileCard = ({ name, bio, website, imgurl }: ProfileCardProps) => {
  const [websiteVisible, setWebsiteVisible] = useState(false);

  useEffect(() => {
    if (website) {
      setWebsiteVisible(true);
    }
  }, [website]);

  return (
    <div className="flex flex-col items-center gap-5 p-5 w-[20%] shadow-lg bg-gray-100">
      <div>
        <Avatar imgurl={imgurl} />
      </div>
      <div className="items-center flex flex-col">
        <h2>{name}</h2>
        <p>{bio}</p>
        {websiteVisible && <a href={website}>Website</a>}
      </div>
    </div>
  );
};
export default ProfileCard;
