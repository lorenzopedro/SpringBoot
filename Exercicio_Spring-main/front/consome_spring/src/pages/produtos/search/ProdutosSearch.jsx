import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import BodyText from "../../../components/typography/BodyText";
import DataCard from "../../../components/card/DataCard";
import TextDescribed from "../../../components/typography/TextDescribed";
import FloatButton from "../../../components/button/FloatButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_PRODUTOS } from "../../../constants/api";

const ProdutosSearch = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProdutos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_PRODUTOS);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const deleteProduto = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_PRODUTOS}/${id}`);
      await fetchProdutos();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto");
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
                edit={() => navigate(`/produtos/update/${item.id}`)}
                deletion={() => deleteProduto(item.id)}
                key={item.id}
              >
                <SimpleGrid gap={2}>
                  <TextDescribed description="Id" value={item.id} />
                  <TextDescribed description="Nome" value={item.nome} />
                  <TextDescribed
                    description="Quantidade"
                    value={item.quantidade}
                  />
                  <TextDescribed description="Preço" value={item.preco} />
                </SimpleGrid>
              </DataCard>
            ))}
          </Stack>
        )}
      </Flex>
      <FloatButton
        onClick={() => {
          navigate("/produtos/create");
        }}
      />
    </>
  );
};

export default ProdutosSearch;
