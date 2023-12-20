import execute from "./execute.js";
async function javaVerify(usr,fn){
    const fileName=usr+".java";
    const executable=usr+".class";
    const prog=fn;
    const compileCommand="javac "+fileName;
    const executeCommand="java "+fileName;
    let response=execute(fileName,executable,prog,compileCommand,executeCommand);
    return response;
}
export default javaVerify;