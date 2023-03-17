import { useState, useTransition } from "react";
import { HeavyList, WithSearch } from "./HeavyList";
import { MenuItem } from "./MenuItem";

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [page, setPage] = useState(1);

  const setPageAsTransition = (p: number) => {
    startTransition(() => {
      setPage(p);
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "start",
      }}
    >
      <nav style={{ display: "grid", gridAutoFlow: "row" }}>
        <MenuItem active={page === 1} onClick={() => setPageAsTransition(1)}>
          Page 1
        </MenuItem>
        <MenuItem active={page === 2} onClick={() => setPageAsTransition(2)}>
          Page 2
        </MenuItem>
        <MenuItem active={page === 3} onClick={() => setPageAsTransition(3)}>
          Page 3
        </MenuItem>
      </nav>
      <article>
        {isPending ? (
          <p>Pending</p>
        ) : (
          <>
            {page === 1 && <h1>Page 1</h1>}
            {page === 2 && <WithSearch />}
            {page === 3 && <h1>Page 3</h1>}
          </>
        )}
      </article>
    </div>
  );
};

export default App;
