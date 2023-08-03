import ProfileCard from "./ProfileCard";
function App() {
  const user = {
    name: "John Doe",
    bio: "I am a software developer.",
    website: "https://www.johndoe.com",
    imgurl: "https://picsum.photos/200",
  };

  return (
    <div className="flex justify-center mt-20">
      <ProfileCard
        name={user.name}
        bio={user.bio}
        website={user.website}
        imgurl={user.imgurl}
      />
    </div>
  );
}

export default App;
