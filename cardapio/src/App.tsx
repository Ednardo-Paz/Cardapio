import './App.css'
import Botao from './components/Botao';
import Formulario from './components/Formulario';
import FormularioUsuario from './components/FormularioUsuario';
import TabelaProdutos from './components/TabelaProdutos';
import useProdutos from './hooks/useProdutos';



function App() {
  const { carregando, visivel, produtoNovo, produtoExcluido, produtoSelecionado, produtos, salvarProduto, produto, setVisivel, changeHandler, error, file } = useProdutos();

  return (
    <div>
      {carregando ? <h1> Carregando </h1> : (
        <>
          {visivel === "tabela" ? (
            <>
              <Botao onClick={produtoNovo}>Novo Produto</Botao>
              <TabelaProdutos produtoExcluido={produtoExcluido} produtoSelecionado={produtoSelecionado} produtos={produtos} />
            </>
          ) :
            <>
              <FormularioUsuario />
              <Formulario file={file} onChange={changeHandler} produtoMudou={salvarProduto} produto={produto} cancelado={() => setVisivel("tabela")} />
              {error && <div>{error}</div>}
            </>
          }
        </>
      )}
    </div>
  )
}

export default App
