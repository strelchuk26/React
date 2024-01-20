import React, { useEffect, useState } from "react";
import { IProductItem } from "./types.ts";
import { Card, List} from "antd";
import http_common from "../../../http_common.ts";
import { APP_ENV } from "../../../env/index.ts";
import Meta from "antd/es/card/Meta";

const ProductsListPage: React.FC = () => {
    const [list, setList] = useState<IProductItem[]>([]);
    const imagePath = `${APP_ENV.BASE_URL}/upload/600_`;

    useEffect(() => {
        http_common.get<IProductItem[]>("/api/products")
            .then(resp => {
                setList(resp.data);
            });
    }, []);

    return (
        <>
            <List
                grid={{ gutter: 16, column: 6 }}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="image" src={`${imagePath}${item.product_images[0].name}`} />}
                        >
                            <Meta title={item.name} description={item.price}/>
                        </Card>
                    </List.Item>
                )}
            />
        </>
    );
}

export default ProductsListPage;