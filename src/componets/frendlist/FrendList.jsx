
export const FriendList = () => {
    return (
        <>
            <ul>
                <li>
                    <FriendListItem />
                </li>
                <li>
                    <FriendListItem />
                </li>
                <li>
                    <FriendListItem />
                </li>
            </ul>
        </>
    
    );
};

const FriendListItem = () => {
    <div>
        <img src="" alt="Avatar" width="48" />
        <p>Friend name</p>
        <p>Friend status</p>
    </div>
}

export default FriendList;

