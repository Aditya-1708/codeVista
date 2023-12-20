import execute from "./execute.js";
async function jsVerify(usr,fn){
    const fileName=usr+".js";
    const prog=fn;
    const executeCommand="node "+fileName;
    let response=await execute(fileName,null,prog,null,executeCommand);
    console.log(response);
    return response;
}
export default jsVerify;