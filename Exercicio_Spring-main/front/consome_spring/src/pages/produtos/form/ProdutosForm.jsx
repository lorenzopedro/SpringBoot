import {
  Container,
  Heading,
  Input,
  Stack,
  Button,
  Field,
  NumberInput,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_PRODUTOS } from "../../../constants/api";

const ProdutosForm = () => {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await axios.get(`${API_PRODUTOS}/${id}`);
          const produto = response.data;
          setNome(produto.nome || "");
          setQuantidade(produto.quantidade || 0);
          setPreco(produto.preco || 0.0);
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduto();
  }, [id]);

  const handleSalvar = async () => {
    setLoading(true);
    const produto = {
      nome,
      quantidade,
      preco,
    };

    try {
      if (id) {
        // PUT - Atualizar produto existente
        const response = await axios.put(`${API_PRODUTOS}/${id}`, produto);
        console.log("Produto atualizado com sucesso:", response.data);
      } else {
        // POST - Criar novo produto
        const response = await axios.post(API_PRODUTOS, produto);
        console.log("Produto criado com sucesso:", response.data);
      }
      navigate("/produtos/list");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert(`Erro ao ${id ? "atualizar" : "criar"} produto`);
    } finally {
      console.log(loading);
      setLoading(false);
    }
  };

  return (
    <Flex justify="center" minH="100vh">
      <Container p={8}>
        <Heading size="lg" mb={6}>
          Cadastro de Produto
        </Heading>

        <Stack gap={6}>
          <Field.Root>
            <Field.Label>Nome</Field.Label>
            <Input
              placeholder="Digite o nome do produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              w={"100%"}
              _focus={{ borderColor: "blue.500" }}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Quantidade</Field.Label>
            <NumberInput.Root defaultValue="0" w={"100%"}>
              <NumberInput.Control />
              <NumberInput.Input
                placeholder="Digite a quantidade do produto"
                value={quantidade}
                onChange={(e) => {
                  const value = parseFloat(e.target.value, 10);
                  setQuantidade(isNaN(value) ? 0 : value);
                }}
                _focus={{ borderColor: "blue.500" }}
              />
            </NumberInput.Root>
          </Field.Root>

          <Field.Root>
            <Field.Label>Preço</Field.Label>
            <NumberInput.Root defaultValue="0" w={"100%"}>
              <NumberInput.Control />
              <NumberInput.Input
                value={preco}
                onChange={(e) => {
                  const value = parseFloat(e.target.value, 10);
                  setPreco(isNaN(value) ? 0 : value);
                }}
                placeholder="Digite o preço do produto"
                _focus={{ borderColor: "blue.500" }}
              />
            </NumberInput.Root>
          </Field.Root>

          <Button
            disabled={loading}
            colorPalette="blue"
            size="lg"
            mt={4}
            onClick={handleSalvar}
          >
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </Stack>
      </Container>
    </Flex>
  );
};

export default ProdutosForm;
