import { Button, Card, Flex } from "antd";
import { Link } from "react-router-dom";
import { ICategory } from "../../ICategory";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryListPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/categories"
        );
        const data: ICategory[] = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (category: ICategory) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/delete/${category.id}`);
      
      setCategories((prevCategories) =>
        prevCategories.filter((c) => c.id !== category.id)
      );
      
      console.log(`Категорія з таким id ${category.id} успішно видалена.`);
    } catch (error) {
      console.error("Помилка при видаленні категорії:", error);
    }
  }

  return (
    <>
      <h1>Список категорій</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/category/create"}>
          <Button size={"large"}>Додати</Button>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {categories.map((category, id) => (
          <Card
            hoverable
            key={id}
            title={category.name}
            style={{ width: "300px", borderWidth: "3px", textAlign: "center" }}
          >
            <p>{category.description}</p>
            <p>{category.dateCreated}</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center"}}>
              <Link to={`/category/edit/${category.id}`}>
                <Button size={"large"}>Змінити</Button>
              </Link>
              <Button onClick={() => deleteItem(category)} size={"large"}>Видалити</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CategoryListPage;
