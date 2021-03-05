import React, { useState, useEffect } from "react";
import axios from "axios";
import "../BlogSpot/index.css";
export default function Index() {
  const [getApi, setGetApi] = useState({
    host: [],
  });
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setGetApi({
    //     host: res.data,
    //   });
    //   console.log(res.data);
    // });

    alert("anjeng bikin pusing");
  }, []);
  let mounted = true;
  return (
    <div>
      <p className="title-blogspot">BlogSpot</p>
      {/* {mounted
        ? getApi.host.map((data, index) => {
            <ol key={index}>
              <li>{data.title}</li>
              <li>{data.body}</li>
            </ol>;
          })
        : console.log("kontol")} */}
      {/* 
<div className="post" key={index}>
          <div className="img-thumb">
            <img src="https://placeimg.com/200/150/tech" alt="img-tech" />
          </div>
          <div className="content">
            <p className="title-content">{res.title}</p>
            <p className="title-desc">{res.body}</p>
          </div>
        </div>; */}
    </div>
  );
}
