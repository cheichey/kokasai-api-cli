import { getGroupUserList as apiGetGroupUserList } from "../api/api"

const getGroupUserList = (options) => {
    const { groupName, sessionId } = options;
    apiGetGroupUserList(groupName, sessionId).then(
        (response) => {
            console.log("owner: ", response.data.owner);
            console.log("member: ", response.data.member);
        }
    )
}

export default getGroupUserList;