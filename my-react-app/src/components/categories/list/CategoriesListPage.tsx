import React, {useEffect, useState} from "react";
import {ICategoryItem} from "./types.ts";
import type {ColumnsType} from "antd/es/table";
import {Button, Table} from "antd";
import http_common from "../../../http_common.ts";
import { APP_ENV } from "../../../env/index.ts";
import { Link } from "react-router-dom";

const CategoriesListPage : React.FC = () => {
    const [list, setList] = useState<ICategoryItem[]>([]);

    const imagePath = `${APP_ENV.BASE_URL}/upload/150_`;
    
    const columns : ColumnsType<ICategoryItem> = [
        {
            title: "#",
            dataIndex: "id"
        },
        {
            title: "Назва",
            dataIndex: "name",
        },
        {
            title: "Фото",
            dataIndex: "image",
            render: (imageName: string) => {
                return (
                    <img src={`${imagePath}${imageName}`} alt="фото" width={100}/>
                );
            }
        }
    ];

    
    useEffect(()=>{
        http_common.get<ICategoryItem[]>("/api/categories")
            .then(resp => {
                setList(resp.data);
            });
    },[]);
        

    return (
        <>
            <h1>Список категорій</h1>
            <Link to="/create">
                <Button type="primary">
                    Додати категорію
                </Button>
            </Link>
            <Table columns={columns} rowKey={"id"} dataSource={list} size={"middle"} />
        </>
    )
}

export default CategoriesListPage;