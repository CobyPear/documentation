const path = require("path")
const fs = require("fs-extra")

const newPath = path.resolve("source", "decoupled-kit")
const currentPath = path.resolve(
  ".cache",
  "gatsby-source-git",
  "decoupled-kit-js",
  "web",
  "docs"
)

if (fs.existsSync(currentPath)) {
  fs.rmdirSync(newPath, { force: true, recursive: true })
  fs.moveSync(currentPath, newPath, { force: true })
  fs.rmdirSync(currentPath, { force: true, recursive: true })
}
