const alarm = process.argv.splice(2);
for (interval of alarm) {
  if(!isNaN(interval) && interval > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval * 1000)
  }
}