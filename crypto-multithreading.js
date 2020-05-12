process.env.UV_THREADPOOL_SIZE=1;

const crypto = require("crypto");
const os = require("os");
const cluster = require("cluster");

const start = Date.now();

for(let i = 0; i < os.cpus().length; i++){
    if(cluster.isMaster){
        cluster.fork();
    }
}

crypto.pbkdf2("a", "b", 100000 ,512, "sha512", () => {
    console.log(Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000 ,512, "sha512", () => {
    console.log(Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000 ,512, "sha512", () => {
    console.log(Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000 ,512, "sha512", () => {
    console.log(Date.now() - start);
});
