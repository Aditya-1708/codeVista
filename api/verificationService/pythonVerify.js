import execute from "./execute.js";
async function pythonVerify(usr,fn){
    const fileName=usr+".py";
    const executeCommand="python3 "+fileName;
    let response=await execute(fileName,null,fn,null,executeCommand);
    return response;
};
export default pythonVerify;