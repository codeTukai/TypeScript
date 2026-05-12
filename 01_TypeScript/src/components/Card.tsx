export function Card({name, price, isSpecial = false}) {
  return (
    <article>
        <h2>
            {name} {isSpecial && <span>**</span>}
        </h2>
        <p>{price}</p>
    </article>
  )
}

export default Card