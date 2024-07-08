import React, { useEffect, useState } from "react";
import { Link,NavLink, useLoaderData } from "react-router-dom";

function github() {
  const data=useLoaderData();
  return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
  <img src={data.avatar_url} alt="Git picture" width={300} />
  </div>
}

export default github


export const githubloader=async ()=>{
  let data=await fetch('https://api.github.com/users/DhruvSethi7')
  return data.json();
}

