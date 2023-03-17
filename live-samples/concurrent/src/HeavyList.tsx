import { memo, useDeferredValue, useState } from "react";

const Item = ({ i }: { i: number }) => {
  const start = performance.now();
  while (performance.now() - start < 3) {}

  return <div>{i}</div>;
};

export const HeavyList = ({
  withSearch,
  search = "",
}: {
  withSearch?: boolean;
  search?: string;
}) => {
  let items: [number, JSX.Element][] = [];
  for (let i = 0; i < (withSearch ? 100000 : 500); i++) {
    items.push([
      i,
      withSearch ? <div key={i}>{i}</div> : <Item key={i} i={i} />,
    ]);
  }
  const filtered =
    search.length > 0
      ? items.filter(([i]) => i.toString().includes(search))
      : items;

  return (
    <>
      <h1>Page 2</h1>
      {search.length > 0 && <p>Value used for filtering: {search}</p>}
      <div>{filtered.map(([, jsx]) => jsx)}</div>
    </>
  );
};

export const WithSearch = memo(() => {
  const [search, setSearch] = useState("");
  const searchDeferred = useDeferredValue(search);
  console.dir("render input");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <HeavyList withSearch search={searchDeferred} />
    </>
  );
});
