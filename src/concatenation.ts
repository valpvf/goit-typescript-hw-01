function concatenation(firstWord: string, secondWord: string) {
  // console.log(`${firstWord} ${secondWord}`);
  const root = document.querySelector(".root");
  if (root) {
    root.innerHTML = `${firstWord} ${secondWord}`;
  }
}

export { concatenation };
