import "./styles.css";
import { useState } from "react";
export default function App() {
  let [output, setOutput] = useState("");
  let emojiDictionary = {
    "😀": "smiling",
    "😂": "Laughing",
    "🤣": "Laughing hard",
    "😋": "Tasty",
    "😘": "Face Blowing a Kiss",
    "🤗": "Hugging face",
    "🤐": "Zipped Face",
    "😪": "Feeling Sleepy",
    "😛": "face With Tongue",
    "😐": "neutral face",
    "🤔": "Thinking face"
  };

  let emojiList = Object.keys(emojiDictionary);

  function onChangeEventHandler(event) {
    let userEnteredEmoji = event.target.value;
    if (matchEmojiInDictionary(userEnteredEmoji) === true) {
      setOutput(emojiDictionary[userEnteredEmoji]);
    } else {
      setOutput("Sorry 😔😔 Can't Find emoji in database");
    }
  }

  function matchEmojiInDictionary(userEnteredEmoji) {
    if (userEnteredEmoji in emojiDictionary) {
      return true;
    } else {
      return false;
    }
  }
  function onEmojiListItemClick(emoji) {
    if (matchEmojiInDictionary(emoji) === true) {
      setOutput(emojiDictionary[emoji]);
    } else {
      setOutput("Sorry 😔😔 Can't Find emoji in database");
    }
  }

  return (
    <div className="App">
      <h1>Enter the emoji you want the description</h1>
      <input onChange={onChangeEventHandler}></input>
      <div class="output">{output}</div>
      <div class="emoji-list">
        <ul class="list">
          {emojiList.map((emoji) => {
            return (
              <li
                onClick={() => onEmojiListItemClick(emoji)}
                class="list-inline"
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
