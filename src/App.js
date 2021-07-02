import "./styles.css";

function compiled(str, param) {
  let name = /<%=name%>/;
  let location = /<%=location%>/;
  return `'${str
    .replace(name, param?.name)
    .replace(location, param?.location)}'`;
}

export default function App() {
  const str = "hello, i am <%=name%>, from <%=location%>";
  let result = compiled(str, { name: "jack", location: "USA" });

  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}
