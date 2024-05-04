import Profile from "./profile/Profile"
import userData from "../userData.json"

import FriendList from "./frendlist/FrendList";


export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FrienList />


    </>
  );
};
export default App;
