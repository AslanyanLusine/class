debugger;

class Shiritori {
    words = [];
    gameOver = false;
  
    play(word) {
      //
  
      if (this.words.length === 0) {
        this.words = [word];
        return this.words;
      }
  
      if (this.words.includes(word)) {
        this.gameOver = true;
        console.log("game over");
        return;
      }
  
      if (this.words[this.words.length - 1].at(-1) === word[0]) {
        this.words = [...this.words, word];
        return this.words;
      }
  
      this.gameOver = true;
      console.log("gameOver");
    }
  
    restart() {
      this.gameOver = false;
      this.words = [];
    }
  }
  
  const game = new Shiritori();
  
  console.log(game.words);
  
  console.log(game.play("apple")); // ["apple"]
  console.log(game.play("ear")); // ["apple", "ear"]
  console.log(game.play("rhino")); // ["apple", "ear", "rhino"]
  game.play("corn"); // gmae over