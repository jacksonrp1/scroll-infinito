import './styles.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import ScrollInfinito from './Components/scroll-infinito.js'
// COMPONENTS END

function App() {
  const [api, setApi] = useState([])
  const [postApi, setPostApi] = useState([])
  const postPorPg = 10

  const requestApi = async () => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const req = await fetch(url)
    const res = await req.json()
    if (res.length) {
      setApi(res)
    }
  }

  // REQUEST API PARA TESTE
  useEffect(() => {
    requestApi()
  }, [])

  return (
    <div className="Scroll-Infinito">
      <div className="Scroll-Infinito-Container">
        {postApi.map((post, index) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            key={index}
            className="Scroll-Infinito-Item"
          >
            <img src={post.image} alt={post.id} />
            <p>{post.name}</p>
          </motion.div>
        ))}
      </div>
      <ScrollInfinito
        ArrayDados={api}
        setDadosArrayMap={setPostApi}
        QtdItemPorScroll={postPorPg}
      />
    </div>
  )
}

export default App
