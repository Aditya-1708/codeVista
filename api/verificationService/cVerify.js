import execute from "./execute.js";
async function cVerify(usr,fn){
    const fileName=usr+".c";
    const executable=usr+".exe"
    const prog=fn;
    const compileCommand="gcc "+fileName+" -o "+usr;
    const executeCommand=".\\"+executable;
    let response=await execute(fileName,executable,prog,compileCommand,executeCommand);
    return response;
}
export default cVerify;