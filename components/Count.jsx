const Count = () => {
  return (
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="100"
              data-purecounter-duration="1"
              className="purecounter"
            >100</span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="11"
              data-purecounter-duration="1"
              className="purecounter"
            >11</span>
            <p>Programs</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="22"
              data-purecounter-duration="1"
              className="purecounter"
            >22</span>
            <p>Events</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="15"
              data-purecounter-duration="1"
              className="purecounter"
            >15</span>
            <p>Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
