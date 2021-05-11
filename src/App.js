import { useState } from "react";
import "./styles.css";
import Comment from "../components/Comment";

const dataComments = [
  {
    id: 1,
    user: "adamsdavid",
    time: "20 hours ago",
    clap: 2,
    body:
      "A comment box with nested replies. Perfect for practicing positioning. Intermediate level.",
    replies: [
      {
        id: 11,
        user: "saramay",
        time: "16 hours ago",
        clap: 5,
        body:
          "A comment box with nested replies. Perfect for practicing positioning. Intermediate level.",
        replies: [
          {
            id: 111,
            user: "jessica21",
            time: "16 hours ago",
            clap: 5,
            body:
              "A comment box with nested replies. Perfect for practicing positioning. Intermediate level."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    user: "andrew231",
    time: "20 hours ago",
    clap: 2,
    body:
      "A comment box with nested replies. Perfect for practicing positioning. Intermediate level.",
    replies: []
  }
];

export default function App() {
  const [comments, setComments] = useState([...dataComments]);

  console.log(comments);

  return (
    <div className="p-3">
      {comments.map((item) => {
        return <Comment key={item.id} data={item} />;
      })}
    </div>
  );
}
