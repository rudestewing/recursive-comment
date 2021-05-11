import styles from "./Comment.module.scss";

const Comment = ({ data }) => {
  return (
    <div className={styles.comment}>
      <div className="flex">
        <div className="p-2">
          <div class="avatar block w-10 h-10 bg-gray-500 rounded-full"></div>
        </div>
        <div>
          <div class="flex mb-2 flex-wrap">
            <div class="w-full font-semibold mr-3">{data.user}</div>
            <div className="text-gray-700 font-lighter">{data.time}</div>
          </div>
          <p className="text-sm mb-3">{data.body}</p>
          <div className="flex flex-wrap mb-3">
            <div className="flex items-center mr-3">
              <div class="mx-1">
                <img src="/assets/Up.svg" alt="up" />
              </div>
              <div class="mx-1 font-bold">{data.clap}</div>
              <div class="mx-1">
                <img src="/assets/Down.svg" alt="down" />
              </div>
            </div>
            <div className="mr-3">Reply</div>
            <div className="mr-3">Share</div>
          </div>
          {data.replies ? (
            data.replies.map((replyComment) => {
              return <Comment key={replyComment.id} data={replyComment} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
