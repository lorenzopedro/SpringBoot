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
import { API_PESSOAS } from "../../../constants/api";

const PessoasForm = () => {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPessoas = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await axios.get(`${API_PESSOAS}/${id}`);
          const pessoa = response.data;
          setNome(pessoa.nome || "");
          setIdade(pessoa.idade || 0);
        } catch (error) {
          console.error("Erro ao buscar pessoa:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPessoas();
  }, [id]);

  const handleSalvar = async () => {
    setLoading(true);
    const pessoa = {
      nome,
      idade
    };

    try {
      if (id) {
        // PUT - Atualizar pessoa existente
        const response = await axios.put(`${API_PESSOAS}/${id}`, pessoa);
        console.log("Pessoa atualizada com sucesso:", response.data);
      } else {
        // POST - Criar nova pessoa
        const response = await axios.post(API_PESSOAS, pessoa);
        console.log("Pessoa criada com sucesso:", response.data);
      }
      navigate("/pessoas/list");
    } catch (error) {
      console.error("Erro ao salvar pessoa:", error);
      alert(`Erro ao ${id ? "atualizar" : "criar"} pessoa`);
    } finally {
      console.log(loading);
      setLoading(false);
    }
  };

  return (
    <Flex justify="center" minH="100vh">
      <Container p={8}>
        <Heading size="lg" mb={6}>
          Cadastro de Pessoa
        </Heading>

        <Stack gap={6}>
          <Field.Root>
            <Field.Label>Nome</Field.Label>
            <Input
              placeholder="Digite o nome da pessoa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              w={"100%"}
              _focus={{ borderColor: "blue.500" }}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Idade</Field.Label>
            <NumberInput.Root defaultValue="0" w={"100%"}>
              <NumberInput.Control />
              <NumberInput.Input
                placeholder="Digite a idade da pessoa"
                value={idade}
                onChange={(e) => {
                  const value = parseFloat(e.target.value, 10);
                  setIdade(isNaN(value) ? 0 : value);
                }}
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

export default PessoasForm;
