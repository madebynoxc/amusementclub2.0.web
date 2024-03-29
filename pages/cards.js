import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import CardView from '../components/cardview'
import getHost from '../utils/get-host'
import Footer from '../components/footer'

const Cards = props => {
  const cards = props.cards.filter(x => x)

  return (
      <Layout>
        <div style={{height: '75px'}}></div>

        <h2>{props.type === 'claim'? "Your claimed cards:" : "Cards featured in the bot"}</h2>

        <div style={{height: '25px'}}></div>
        <CardView cards={cards} cols={props.cols} />
        <div style={{paddingTop: '30px'}}><b>...and 20,000+ more</b></div>
        <Footer/>
      </Layout>
  )
}

Cards.getInitialProps = async ctx => {
  const apiUrl = getHost(ctx.req) + '/api/cards'

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Data: JSON.stringify({ ids: ctx.query.ids })
      },
    })

    if (response.ok) {
      const js = await response.json()
      js.type = ctx.query.type
      return js

    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.error(error)
    return {}
  }
}

export default Cards
