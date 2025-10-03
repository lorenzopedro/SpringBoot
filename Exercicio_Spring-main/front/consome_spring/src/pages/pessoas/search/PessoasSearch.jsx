import { Flex, InputElement, SimpleGrid, Stack } from "@chakra-ui/react";
import BodyText from "../../../components/typography/BodyText";
import DataCard from "../../../components/card/DataCard";
import TextDescribed from "../../../components/typography/TextDescribed";
import FloatButton from "../../../components/button/FloatButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_PESSOAS } from "../../../constants/api";

const PessoasSearch = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPessoas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_PESSOAS);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const deletePessoa = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_PESSOAS}/${id}`);
      await fetchPessoas();
    } catch (error) {
      console.error("Erro ao deletar pessoa:", error);
      alert("Erro ao deletar pessoa");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Flex direction={"column"} align={"center"}>
        <BodyText my={6}>Consultar Pessoas</BodyText>
        {loading ? (
          <BodyText my={6}>Carregando...</BodyText>
        ) : (
          <Stack px={6} w={"50%"} spacing={4}>
            {data.map((item) => (
              <DataCard
                edit={() => navigate(`/pessoas/update/${item.id}`)}
                deletion={() => deletePessoa(item.id)}
                key={item.id}
              >
                <SimpleGrid gap={2}>
                  <TextDescribed description="Id" value={item.id} />
                  <TextDescribed description="Nome" value={item.nome} />
                  <TextDescribed description="Idade" value={item.idade} />
                </SimpleGrid>
              </DataCard>
            ))}
          </Stack>
        )}
      </Flex>
      <FloatButton
        onClick={() => {
          navigate("/pessoas/create");
        }}
      />
    </>
  );
};

export default PessoasSearch;
