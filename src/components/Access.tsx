import fs from "fs/promises"

export default async function AccessTxt() {
  await fs.appendFile("access.txt", `${Date.now()}\n`, "utf-8")

  const data = fs.readFile("access.txt", "utf-8")

  return <div>{data}</div>
}
