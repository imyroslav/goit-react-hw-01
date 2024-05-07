import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import friends from "./Friends.json";
import FriendList from "./components/frendlist/FrendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";

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
