import FunctionalComponent from "../components/FunctionalComponent.jsx";

export default function Home() {
  return (
    <div className="test">  
      <p>Test</p>
      <FunctionalComponent />
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
