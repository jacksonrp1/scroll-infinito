<div style="display: inline">
  <a href="https://www.jacksondev.com.br/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Website&message=JacksonDev&color=red&style=for-the-badge&logo=webflow"/>
  </a>
  <a href="https://pt-br.reactjs.org/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=React Js&color=202124&style=flat-square&logo=react"/>
  </a>
</div>

# Projeto Scroll Infinito

### <a href="https://jacksonrp1.github.io/scroll-infinito/build/">Clique aqui</a> para visualizar o projeto concluído.

#### Scripts Disponíveis

```
git clone https://github.com/jacksonrp1/scroll-infinito.git
```

#### Dentro do projeto recém-clonado, você pode executar:

```
npm install
```

No diretório do projeto, execute:

```
npm start
```

Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

# Modo de usar :

![image](https://user-images.githubusercontent.com/83042566/214996980-6e6966df-0e5b-4c98-ba36-e9b48a77053a.png)

Crie um useState para guardar os dados da requisição para a api (Linha 10).

Crie um useState para percorrer o dados da api com ele (Linha 11).

Use o map conforme (Linha 32 a 44).

### Ao chamar o component :
<!--ts-->
  * Informe
    * ArrayDados: - Array com todos os dados .
    * setDadosArrayMap: - Set do useState do Array novo que vai ser usado no .map .
    * QtdItemPorScroll: - Quantidade de itens para cada renderização do scroll .
<!--te-->


## Abaixo do map, chame o componente.
Exemplo:
```javascript
  <ScrollInfinito
    ArrayDados={api}
    setDadosArrayMap={setPostApi}
    QtdItemPorScroll={postPorPg}
  />
```


Você também pode ver erros no console.
```
npm test
```
Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre como executar testes para obter mais informações.
```
npm run build
```
Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!
