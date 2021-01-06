const Markdown = ({ text, handleChange, handleClick }) => {

  return (
    <div id="editor-win" className="col">
      <div className="card tx-dark bg-light">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div className="dots d-flex">
            <div className="dot" id="red"></div>
            <div className="dot" id="orange"></div>
            <div className="dot" id="green"></div>
          </div>
          <div className="title d-flex">
            <h1 className="card-title text-center"><i className="fas fa-pen-square"></i> Editor</h1>
          </div>
          <div className="button">
            <button id="editor-btn" className="btn btn-light" onClick={handleClick}>
            <i className="fas size-button fa-expand-arrows-alt"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <textarea id="editor" className="form-control" value={ text } onChange={handleChange}>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Markdown;