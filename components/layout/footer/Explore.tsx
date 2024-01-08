const Explore = () => {
  return (
    <>
      <div className="text-white">
        <ul
          style={{
            textAlign: "left",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            fontWeight: "600",
            paddingRight: "10px",
            marginTop: "7px",
          }}
        >
          {/* <li class="list-group-item">
            <a href="/company">Company</a>
          </li> */}

          <li className="list-group-item">
            <a
              className="text-white"
              style={{ textDecoration: "none" }}
              href="/faq"
            >
              FAQ
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="text-white"
              style={{ textDecoration: "none" }}
              href="/blogs"
            >
              Blog
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="text-white"
              style={{ textDecoration: "none" }}
              href="/jobs"
            >
              Jobs
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="text-white"
              style={{ textDecoration: "none" }}
              href="/about-us"
            >
              About
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="text-white"
              style={{ textDecoration: "none" }}
              href="/sitemap"
            >
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Explore;
