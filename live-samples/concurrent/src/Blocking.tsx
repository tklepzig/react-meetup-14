import { useState } from "react";
import { HeavyList } from "./HeavyList";
import { MenuItem } from "./MenuItem";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "start",
      }}
    >
      <nav style={{ display: "grid", gridAutoFlow: "row" }}>
        <MenuItem active={page === 1} onClick={() => setPage(1)}>
          Page 1
        </MenuItem>
        <MenuItem active={page === 2} onClick={() => setPage(2)}>
          Page 2
        </MenuItem>
        <MenuItem active={page === 3} onClick={() => setPage(3)}>
          Page 3
        </MenuItem>
      </nav>
      <article>
        {page === 1 && <h1>Page 1</h1>}
        {page === 2 && <HeavyList />}
        {page === 3 && <h1>Page 3</h1>}
      </article>
    </div>
  );
};

export default App;
