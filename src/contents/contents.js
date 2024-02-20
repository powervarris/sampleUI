import "./contents.css";
import calendar from "../images/calendar.jpg";
import { data } from "../data.js";
function Contents(props) {
  return (
    <div className="contentalign">
      <section className="home">
        <div className="category">
          <h3>Anime</h3>
          <ul style={{ marginLeft: "20px" }} className="categorylist">
            <li>
              <a className="a" href="#">
                Trending
              </a>
            </li>
            <li>
              <a className="a" href="#">
                TUE
              </a>
            </li>
            <li>
              <a className="a" href="#">
                WED
              </a>
            </li>
            <li>
              <a className="a" href="#">
                THU
              </a>
            </li>
            <li>
              <a className="a" href="#">
                FRI
              </a>
            </li>
            <li>
              <a className="a" href="#">
                SAT
              </a>
            </li>
            <li>
              <a className="a" href="#">
                SUN
              </a>
            </li>
            <li>
              <a className="a" href="#">
                MON
              </a>
            </li>
          </ul>
          <img
            style={{ paddingTop: "10px", height: "100%", marginLeft: "49%" }}
            src={calendar}
          ></img>
        </div>
      </section>
      <section className="home">
        <h3 style={{ fontSize: "18px", color: "#333" }}>Recommended For You</h3>
        <div className="grid">
          {data.map((item) => {
            return (
              <div className="flex" style={{ flexDirection: "column" }}>
                <div>
                  {item.year >= 2019 ? (
                    <img
                      className="vidimage"
                      style={{ borderRadius: "10px" }}
                      src={item.videoimage}
                    ></img>
                  ) : (
                    <img
                      className="vidimagegray"
                      style={{ borderRadius: "10px" }}
                      src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-time-expired-stamp-concept-miscellaneous-vector-png-image_15042010.png"
                    ></img>
                  )}
                </div>
                <div
                  className="flex"
                  style={{ marginBottom: "15px", marginTop: "5px" }}
                >
                  <div>
                    {item.year >= 2019 ? (
                      <img
                        className="contentpicture"
                        style={{ borderRadius: "100%" }}
                        src={item.uploaderimage}
                      ></img>
                    ) : (
                      <img
                        className="contentpicturegray"
                        style={{ borderRadius: "100%" }}
                        src={item.uploaderimage}
                      ></img>
                    )}
                  </div>
                  <div className="flex" style={{ flexDirection: "column" }}>
                    {item.year >= 2019 ? (
                      <h1>{item.title}</h1>
                    ) : (
                      <del>{item.title}</del>
                    )}
                    {item.year >= 2019 ? (
                      <h1 className="graytext">{item.description}</h1>
                    ) : (
                      <del className="graytext">{item.description}</del>
                    )}
                    {item.year >= 2019 ? (
                      <h1>{item.status}</h1>
                    ) : (
                      <del>Unavailable for Viewing</del>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Contents;
