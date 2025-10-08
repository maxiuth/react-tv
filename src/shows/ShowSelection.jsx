import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  showData,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      <ul className="show">
        {showData.map((show) => (
          <li
            key={show.name}
            className={"show" + (show === selectedShow ? " selected" : "")}
            onClick={() => setSelectedShow(show)}
          >
            {show.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
