import deleteFile from "./deleteFile.js";
async function deleteFiles(filename, executable) {
    await deleteFile(filename);
    await deleteFile(executable);
}
export default deleteFiles;