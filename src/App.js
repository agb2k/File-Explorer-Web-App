import React, { useState } from 'react'

function App() {
  return (

    <div className="Container" style={{ marginLeft: '30px' }}>
      <h3 style={{ color: '#966f02', marginBottom: '6px' }}>File Explorer:</h3>
      <Folder name='Computer'>
        <Folder name='Desktop'>
          <File name="Test.txt" />
        </Folder>
        <Folder name='Documents'>
          <File name='cw.txt' />
        </Folder>
        <Folder name='Projects'>
          <File name='SE_Game_Python.txt' />
        </Folder>
        <Folder name='Pictures'>
          <File name='Bali.jpeg' />
          <File name='India_2.jpeg' />
        </Folder>
        <Folder name='Songs'>
          <File name='Bohemian Rhapsody.mp3' />
          <File name='Mama Mia.mp3' />

        </Folder>
        <Folder name='Movies'>
          <File name='Forrest Gump.mp4' />
        </Folder>
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const { name, children } = props;
  const [isOpen, setIsOpen] = useState(false)
  const arrow = isOpen ? 'down' : 'right'

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div style={{ color: '#6AA84F' }}>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${arrow} icon`}></i>
      {name}
    </span>
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const extension = name.split('.')[1];
  const fileIcons = {
    mp4: "file video icon",
    txt: "file alternate icon",
    mp3: "headphones icon",
    jpeg: "file image icon",


  }
  return <div style={{ color: '#127D5E' }}>
    <i className={`${fileIcons[extension]}`}></i>
    {name}

  </div>
};
export default App;
