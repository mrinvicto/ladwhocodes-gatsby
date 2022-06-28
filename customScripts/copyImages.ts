import path from "path"
import fs from "fs"

const getArticlesDirectory = () => {
  return path.join(__dirname, "../content/blog")
}

const iterateAllDirectories = (directoryPath: string) => {
  fs.readdir(directoryPath, (err1, files) => {
    console.log({ err1 })
    files.forEach(file => {
      fs.stat(`${directoryPath}/${file}`, (err2, stats) => {
        console.log({ err2 })
        if (stats.isDirectory()) {
          iterateAllDirectories(`${directoryPath}/${file}`)
        } else if (file === "og.png") {
          copyFile(`${directoryPath}`, file, "../static/images/og")
        } else if (file.indexOf("png") > -1) {
          copyFile(`${directoryPath}`, file, "../static/images/featured")
        }
      })
    })
  })
}

const copyFile = (
  directoryPath: string,
  file: string,
  destinationFolder: string
) => {
  // console.log({ directoryPath, file })
  const directoryPaths = directoryPath.split("/")
  const postId = directoryPaths[directoryPaths.length - 1]
  const destinationPath = path.join(
    __dirname,
    `${destinationFolder}/${postId}_${file}`
  )
  fs.copyFile(`${directoryPath}/${file}`, destinationPath, err3 => {
    console.log({ err3 })
  })
}

export const copyImages = () => {
  return iterateAllDirectories(getArticlesDirectory())
}

copyImages()
