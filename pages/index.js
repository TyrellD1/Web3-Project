import FunctionalComponent from "../components/FunctionalComponent.jsx";
import Cards from "../components/Cards.jsx";

export default function Home() {
  return (
    <div className="test">  
      <p>Testing</p>
      <FunctionalComponent />
      <Cards title="test" description="test description" />
      <Cards title="test 2" description="test description 2" />
      <style jsx>{`
        p {
          color: green;
        }
        .test {
          p {
            font-size: 45px;
            color: red;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  )
}
