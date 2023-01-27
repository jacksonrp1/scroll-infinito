import { useEffect, useState } from 'react'

export default function ScrollInfinito({
  ArrayDados = [],
  setDadosArrayMap,
  QtdItemPorScroll = 10
}) {
  const [postPaginaAtual, setPostPaginaAtual] = useState(0)

  // PREENCHE O NOVO ARRAY COM A QUANTIDADE DE ITENS POR PÁGINA, E QUANDO O SCROLL CHEGAR AO FINAL DA PAGINA ESSE USEEFFECT ATUALIZA O ARRAY
  useEffect(() => {
    if (ArrayDados.length) {
      const indexUltimoPost = postPaginaAtual * QtdItemPorScroll
      const indexPrimeiroPost = indexUltimoPost - QtdItemPorScroll
      setDadosArrayMap(post => [
        ...post,
        ...ArrayDados.slice(indexPrimeiroPost, indexUltimoPost)
      ])
      console.log('repetiu')
    }
  }, [postPaginaAtual, QtdItemPorScroll, setDadosArrayMap, ArrayDados])

  // VERIFICA SE O SCROLL CHEGOU ATÉ O SINALIZADOR '.Scroll-Infinito-View', SE TIVER CHEGADO ADICIONA MAIS UMA PAGINA PARA CONCATENAR COM O ARRAY ATUAL
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (postPaginaAtual < Math.ceil(ArrayDados.length / QtdItemPorScroll)) {
          setPostPaginaAtual(paginaAtual => paginaAtual + 1)
        }
      }
    })
    const UltimoElemento = document.querySelector('.Scroll-Infinito-View')
    intersectionObserver.observe(UltimoElemento)
    return () => intersectionObserver.disconnect()
  })

  return <div className="Scroll-Infinito-View"></div>
}
