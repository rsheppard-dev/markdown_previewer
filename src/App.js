import { useState } from 'react';
import Markdown from './components/Markdown';
import Previewer from './components/Previewer';

function App() {
  const [text, setText] = useState(`# React Markdown Previewer!
  ## Made by Roy Sheppard
  ### Cheat sheet:

  Inline code: \`<div></div>\`

  \`\`\`
  // sample of multi-line code:

  const displayMarkdown = () => {
    console.log('This is multi-line code');
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](http://www.roy-sheppard.com), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.

  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png)`);

  const handleChange = e => {
    setText(e.target.value);
  }

  const handleClick = e => {
    const editor = document.getElementById('editor-win');
    const preview = document.getElementById('preview-win');
    const sizeButtons = document.querySelectorAll('.size-button');

    sizeButtons.forEach(button => {
      button.classList.toggle('fa-expand-arrows-alt');
      button.classList.toggle('fa-compress-arrows-alt');
    });

    if (e.target.id === "editor-btn" || e.target.parentElement.id === "editor-btn") {
      preview.classList.toggle('d-none');
      editor.classList.toggle('col-6');
      editor.classList.toggle('col-12');
    } else {
      editor.classList.toggle('d-none');
      preview.classList.toggle('col-6');
      preview.classList.toggle('col-12');
    }
  }

  return (
    <main>
      <div className="App container-fluid p-4">

        <div className="row">
          <Markdown text={text} handleChange={handleChange} handleClick={handleClick} />
          <Previewer text={text} handleClick={handleClick} />
        </div>

      </div>
    </main>
  );
}

export default App;
