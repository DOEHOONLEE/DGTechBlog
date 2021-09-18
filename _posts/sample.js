const { exec } = require('child_process');

const info = {
    pwd: '',
    currentTime: '',
}

exec(`pwd`, (err, stdout) => {
    if (err) console.log(err);
    info.pwd = stdout;

    console.log('pwd stored..!')
});

exec(`date`, (err, stdout) => {
    if (err) console.log(err);
    info.currentTime = stdout;

    console.log('Current Time stored..!')
    console.log(info)
})