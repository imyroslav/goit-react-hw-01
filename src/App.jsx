import Profile from "./componets/profile/Profile";
import userData from "./userData.json";
// import "modern-normalize";
import friends from "./Friends.json";
import FriendList from "./componets/frendlist/FrendList";
import transactions from "./transactions.json";
import TransactionHistory from "./componets/transactionHistory/TransactionHistory";

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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
