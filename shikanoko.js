const rundate = new Date()

const shikanoko = {
  str: ["しか", "のこ", "こし", "たん"],
  request: () => {
    return
  }
}

let count = 0;

function isCheck(str) {
  if (str.includes("しかのこのこのここしたんたん")) {
    console.log("check")
    return true
  } else {
    return false
  }
}

let text = ""

console.log("ぬん")

while (count < 4) {
  const rand = Math.floor(Math.random() * 4);
  text += shikanoko.str[rand]
  console.log(text)

  if (isCheck(text)) {
    count++
  }
}
console.log("🦌🦌🦌")

console.log("StartDate: ", rundate)
console.log(
  "EndDate: ",
  new Date(),
  "Time: ",
  new Date() - rundate,
  "ms"
)
