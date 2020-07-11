import React from 'react';

const Searchbar = (props) => {
  return (
    <div className="container">
      <div className="card">
        <form onSubmit={props.handleSubmit} className="form s12">
          <div className="input-field col s6">
            <input type="text" placeholder="Placeholder" id="song" />
            <label className="validate" htmlFor="song">
              Song
            </label>

            <input type="submit" className="btn btn-danger m-2"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
