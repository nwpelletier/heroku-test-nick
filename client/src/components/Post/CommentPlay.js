import PostComments from "./PostComments";
import { BASE_API_URL } from '../../utils/constants';
function CommentPlay(){

const newOrder = "new"
    return (
        <PostComments
        order={newOrder}
        postId={3}
        display={true}
         />
    )

}
export default CommentPlay;