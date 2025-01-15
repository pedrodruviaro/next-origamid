"use client"

import { revalidatePathAction } from "../../actions/revalidate-path"

export default function Update() {
  const handleClick = async () => {
    await revalidatePathAction("/acoes2") // force revalidation
  }

  return <button onClick={handleClick}>Update</button>
}
