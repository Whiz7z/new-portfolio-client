window.addEventListener("DOMContentLoaded", () => {
  const blockContainer = document.getElementById("blocks");
  const blockSize = 50;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const numCols = Math.ceil(screenWidth / blockSize);
  const numRows = Math.ceil(screenHeight / blockSize);
  const numBlocks = numCols * numRows;

  function createBlocks() {
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      block.addEventListener("mouseover", highlightRandomNeighbors);
      blockContainer.appendChild(block);
    }
  }

  function highlightRandomNeighbors() {
    const index = parseInt(this.dataset.index);
    const neighbors = [
      index - 1,
      index + 1,
      index + numCols,
      index - numCols,
      index - numCols - 1,
      index - numCols + 1,
      index + numCols - 1,
      index + numCols + 1,
    ].filter((i)=> i >= 0 && i < numBlocks && Math.abs((i % numCols)- (index % numCols)) <= 1);

    this.classList.add("highlight");
    setTimeout(()=>{
      this.classList.remove("highlight");
    }, 500)

    shuffleArray(neighbors)
      .slice(0, 1)
      .forEach((index) => {
        const neighbor = blockContainer.children[index];
        if (neighbor) {
          neighbor.classList.add("highlight");
          setTimeout(() => {
            neighbor.classList.remove("highlight");
          }, 500);
        }
      });
    // const randomNeighborIndex = Math.floor(Math.random() * neighbors.length);
    // const randomNeighbor = neighbors[randomNeighborIndex];
    // if (randomNeighbor >= 0 && randomNeighbor < numBlocks) {
    //   const randomNeighborBlock = document.querySelector(
    //     `[data-index="${randomNeighbor}"]`
    //   );
    //   randomNeighborBlock.classList.add("highlight");
    // }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createBlocks();
});
