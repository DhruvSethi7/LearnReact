import React from "react";
import { Link,NavLink,useParams } from "react-router-dom";

function user() {
    let { input } = useParams();
  return <h1>{input}</h1>
}

export default user