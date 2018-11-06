process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd  = data.toString().trim();
    if(cmd === 'pwd'){
        const pwd = process.cwd();
        process.stdout.write(pwd);
    }
    else{
        process.stdout.write('You typed: ' + cmd);
    }
  process.stdout.write('\nprompt > ');
});
