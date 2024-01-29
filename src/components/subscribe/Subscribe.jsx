import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="bg-wrapper">
      <div className="container">
        <div className="flex-container">
          <div className="mb-6">
            <h5 className="heading">Become part of our community</h5>
            <p className="paragraph">
              Subscribe for exclusive updates, fresh insights, special offers,
              and the latest news delivered directly to your inbox
            </p>
          </div>
          <div className="form-container">
            <input className="input" placeholder="Your email" />
            <button type="submit" className="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
