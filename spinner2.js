const spinner = (rotations) => {
  const spinSyms = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  delay = 100;
  for (let i = 0; i < rotations * 2; i++) {
    for (const sym of spinSyms) {
      setTimeout(() => {
        process.stdout.write(sym);
        if (i === (rotations * 2) - 1) {
          process.stdout.write('\r|   ');
        }
      }, delay)
      delay += 200;
    }
  }
}

spinner(4);
