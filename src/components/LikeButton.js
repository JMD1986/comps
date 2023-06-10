import React from "react";
import axios from "axios";
import "./styles.css";

import { HeartIcon, SpinnerIcon } from "../icons/icons";
import { useState } from "react";
function LikeButton() {
  const [response, setResponse] = useState("");
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function likeUnlikeAction() {
    try {
      setIsPending(true);
      setErrorMessage(null);

      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (!response.ok) {
        const res = await response.json();
        setErrorMessage(res.error);
        return;
      }

      setLiked(!liked);
    } finally {
      setIsPending(false);
    }
  }
  const onClick = () => {
    console.log("click");

    likeUnlikeAction();
  }; // URL: https://www.greatfrontend.com/api/questions/like-button
  // HTTP Method: POST
  // Content Type: json

  function classNames(...args) {
    return args.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="button-container">
        <button
          className={classNames(
            "like-button",
            liked ? "like-button--liked" : "like-button--default"
          )}
          disabled={isPending}
          onClick={() => {
            likeUnlikeAction();
          }}
        >
          {isPending ? <SpinnerIcon /> : <HeartIcon />}
          {liked ? "Liked" : "Like"}
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default LikeButton;
