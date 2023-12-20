import execute from "./execute.js";
async function cppVerify(usr,fn){
    const fileName=usr+".cpp";
    const executable=usr+".exe";
    const prog=fn;
    const compileCommand="g++ "+fileName+" -o "+usr; 
    const executeCommand=".\\"+executable;
    let response=await execute(fileName,executable,prog,compileCommand,executeCommand);
    return response;
}
export default cppVerify;