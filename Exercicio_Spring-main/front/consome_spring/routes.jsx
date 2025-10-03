import Home from "./src/pages/home/Home";
import PessoasForm from "./src/pages/pessoas/form/PessoasForm";
import PessoasSearch from "./src/pages/pessoas/search/PessoasSearch";
import ProdutosForm from "./src/pages/produtos/form/ProdutosForm";
import ProdutosSearch from "./src/pages/produtos/search/ProdutosSearch";

const routes = [
  { name: "Inicio", path: "/", component: <Home />, listed: true },
  { name: "Produtos", path: "/produtos/list", component: <ProdutosSearch />, listed: true },
  { name: "Adicionar Produtos", path: "/produtos/create", component: <ProdutosForm />, listed: false },
  { name: "Atualizar Produto", path: "/produtos/update/:id", component: <ProdutosForm />, listed: false },
  { name: "Pessoas", path: "/pessoas/list", component: <PessoasSearch />, listed: true },
  { name: "Adicionar Pessoas", path: "/pessoas/create", component: <PessoasForm />, listed: false },
  { name: "Atualizar pessoa", path: "/pessoas/update/:id", component: <PessoasForm />, listed: false },
];

export default routes;
