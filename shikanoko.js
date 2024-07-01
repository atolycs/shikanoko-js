const rundate = new Date()

const shikanoko = ["しか", "のこ", "こし", "たん"]

let count = 0;

let string_length = ""

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
  text += shikanoko[rand]
  console.log(text)

  if (isCheck(text)) {
    count++
  }
  string_length = text.length
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

console.log("Text Length: ", string_length)
