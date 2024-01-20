import {Route, Routes} from "react-router-dom";
import ContainerDefault from "./components/containers/default/ContainerDefault.tsx";
import NoMatch from "./components/pages/NoMatch.tsx";
import CategoriesListPage from "./components/categories/list/CategoriesListPage.tsx";
import CategoryCreatePage from "./components/categories/create/CategoryCreatePage.tsx";
import CategoryEditPage from "./components/categories/edit/CategoryEditPage.tsx";
import RegisterPage from "./components/auth/register/RegisterPage.tsx";
import ProductsListPage from "./components/products/list/ProductsListPage.tsx";
import ProductCreatePage from "./components/products/create/ProductCreatePage.tsx";

const App: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<ContainerDefault />}>
                    <Route index element={<CategoriesListPage />} />
                    <Route path={'create'} element={<CategoryCreatePage />} />
                    <Route path={'register'} element={<RegisterPage />} />
                    <Route path={'edit/:id'} element={<CategoryEditPage />} />
                    <Route path={'products'} element={<ProductsListPage />} />
                    <Route path={'product/create'} element={<ProductCreatePage />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;