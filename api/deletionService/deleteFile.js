import fs from 'fs';
async function deleteFile(filename) {
    if(fs.existsSync(filename)){
        try{
            return new Promise((resolve, reject) => {
                fs.unlink(filename, (err) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }
        catch(error){
            console.log(error);
        }
    }
}
export default deleteFile;