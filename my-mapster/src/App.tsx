import { Routes, Route } from "react-router-dom";
import CategoryCreatePage from "./category/create/CategoryCreatePage.tsx";
import CategoryEditPage from "./category/edit/CategoryEditPage.tsx";
import CategoryListPage from "./category/list/CategoryListPage.tsx";
import AdminLayout from "./containers/admin/AdminLayout.tsx";
import DefaultLayout from "./containers/default/DefaultLayout.tsx";
import Login from "./views/Login/index.tsx";
import Register from "./views/Register/index.tsx";

const App : React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<CategoryListPage/>}/>
                    <Route path={"category"}>
                        <Route path={"create"} element={<CategoryCreatePage/>}/>
                        <Route path={"edit/:id"} element={<CategoryEditPage/>}/>
                    </Route>


                    <Route path={"login"} element={<Login/>}/>
                    <Route path={"register"} element={<Register/>}/>

                    <Route path={"test"} element={<TestPage/>}/>
                </Route>

                <Route path={"/admin"} element={<AdminLayout/>}>
                    <Route path={"category"}>
                        <Route index element={<CategoryListPage/>}/>
                        <Route path={"create"} element={<CategoryCreatePage/>}/>
                        <Route path={"edit/:id"} element={<CategoryEditPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;