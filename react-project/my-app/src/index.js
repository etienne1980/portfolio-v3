import React from "react"
import ReactDOM from "react-dom/client"
import "./css/index.css"

let podcast = [
  {
    title: "madame a paname",
    language: "french",
    price: 5,
    img: "./img/ice-cream.jpg",
    id: 1,
  },
  {
    title: "welcome paris",
    language: "french",
    price: 3,
    img: "./img/img.jpg",
    id: 2,
  },
]

let BookList = () => {
  return (
    <section className='booklist'>
      {podcast.map((item) => {
        // console.log(item)

        let { title, language, price, img, id } = item

        return (
          <Book
            img={img}
            title={title}
            language={language}
            price={price}
            key={id}
          />
        )
      })}
    </section>
  )
}

let Book = (props) => {
  //   console.log(props)

  let { title, language, price, img } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{language}</h3>
      <h4>{price}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)

const friends = ["john", "peter", "anna"]
const newFriends = [...friends, "susan"]
console.log(friends)
console.log(newFriends)
const someObject = {
  name: "john",
  job: "developer",
}

// COPY NOT A REFERENCE !!!!
const newObject = { ...someObject, location: "florida" }
console.log(someObject)
console.log(newObject)
