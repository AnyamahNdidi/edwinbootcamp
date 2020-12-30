import React, { useState } from 'react'





const quote = [
  {
    "proverbs": "it  is not of his that willth nor of his that runth but of God showth mercy",
    "author": "Gideon"
  },
  {
    "proverbs": "the more you deep into wisdom the more danger you bring upon yourself",
    "author": "joshua"
  },
  {
    "proverbs": "live and let live",
    "author": "lakun"
  },
  {
    "proverbs": "it  is not of his that willth nor of his that runth but of God showth mercy",
    "author": "Gideon"
  }
]



function QuoteModel() {

  const [counter, setCounter] = useState(1)
  return (
    <div>
      <center>
        <div>The Quote Holder</div>
        <div>{quote.length}</div>
      </center>
      <hr />
      <section
        onClick={
          () => {

            setCounter(counter + 1);
            console.log("im click")
            console.log(counter)
          }
        }

      >
        <div>
          <h3>{quote[counter % quote.length].proverbs}</h3>
          <p
            style={{
              // background: "red",
              with: "100%",
              display: "flex",
              justifyContent: "flex-end"

            }}

          >....{quote[counter % quote.length].author}</p>
        </div>
      </section>
    </div>
  )
}

export default QuoteModel
