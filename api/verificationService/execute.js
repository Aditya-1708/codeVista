import deleteFile from '../deletionService/deleteFile.js';
import deleteFiles from '../deletionService/deleteFiles.js';
import path from 'path';
import fs from 'fs';
import util from 'util';
const writeFileAsync = util.promisify(fs.writeFile);
import { exec } from 'child_process';
const execAsync = util.promisify(exec);
async function execute(fileName, executable, prog, compileCommand, executeCommand) {
    try {
        await Promise.all([
            writeFileAsync(fileName, prog, { encoding: 'utf8' }),
            compileCommand !== null ? execAsync(compileCommand) : Promise.resolve(),
        ]);
        const response =await execAsync(executeCommand);
        return response;
    } catch (error) {
        return error;
    } finally {
        if (compileCommand !== null) {
            deleteFiles(fileName, executable);
        } else {
            deleteFile(fileName);
        }
    }
}

export default execute;