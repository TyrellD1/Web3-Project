import Card from "../components/infinte-scroll/Card"

export default function Mint() {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div>
            {array.map((val, i) => <Card key={i}/>)}
        </div>
    )
}