import './App.css'
import Botao from './components/Botao';
import Formulario from './components/Formulario';
import FormularioUsuario from './components/FormularioUsuario';
import TabelaProdutos from './components/TabelaProdutos';
import useProdutos from './hooks/useProdutos';

function App() {
  const { carregando, visivel, produtoNovo, produtoExcluido, produtoSelecionado, produtos, salvarProduto, produto, setVisivel } = useProdutos();

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
              <Formulario produtoMudou={salvarProduto} produto={produto} cancelado={() => setVisivel("tabela")} />
            </>
          }
        </>
      )}
    </div>
  )
}

export default App
