import marked from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  breaks: true
});

const Previewer = ({ text, handleClick }) => {

  const createMarkup = () => {
    const clean = DOMPurify.sanitize(marked(text));
    return { __html: clean };
  }

  return (
    <div id="preview-win" className="col-md-12 col-lg-6 mb-3">
      <section>
        <div className="card tx-dark bg-light">
          <div className="card-header d-flex align-items-center justify-content-between">
            <div className="dots d-flex">
              <div className="dot" id="red"></div>
              <div className="dot" id="orange"></div>
              <div className="dot" id="green"></div>
            </div>
            <div className="title d-flex">
              <h1 className="card-title text-center"><i className="fas fa-eye"></i> Previewer</h1>
            </div>
            <div className="button">
              <button id="preview-btn" onClick={handleClick} className="btn btn-light">
                <i className="fas size-button fa-expand-arrows-alt"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div id="preview" className="border rounded p-2 bg-white" dangerouslySetInnerHTML={createMarkup()}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Previewer;