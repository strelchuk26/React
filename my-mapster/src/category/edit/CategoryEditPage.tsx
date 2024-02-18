import {useNavigate, useParams} from "react-router-dom";
import {ICategoryEdit, IUploadedFile} from "./types.ts";
import {Button, Form, Input, Row, Upload} from "antd";
import {Link} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import {UploadChangeParam} from "antd/es/upload";
import { PlusOutlined } from '@ant-design/icons';
import http_common from "../../http_common.ts";
import { useEffect, useState } from "react";
import { ICategory } from "../../ICategory.ts";
import axios from "axios";

const CategoryEditPage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm<ICategoryEdit>();
    const [category, setCategory] = useState<ICategory>();
    const itemId = useParams();

    useEffect(() => {
        console.log(itemId);
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/api/categories/${itemId.id}`
            );
            const data: ICategory = response.data;
            console.log(data);
            setCategory(data);
          } catch (error) {
            console.error("Помилка при отриманні даних:", error);
          }
        };
    
        fetchData();
      }, []);

    const onHandlerSubmit = async (values: ICategoryEdit) => {
        try {
            await http_common.put(`http://localhost:8080/api/categories/edit/${itemId.id}`, values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/');
        }
        catch(ex) {
            console.log("Exception create category", ex);
        }
    }

    return (
        <>
            <h1>Змінити категорію</h1>
            <Row gutter={16}>
                <Form form={form}
                      onFinish={onHandlerSubmit}
                      layout={"vertical"}
                      style={{
                          minWidth: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          padding: 20,
                      }}
                >

                    <Form.Item
                        label={"Назва"}
                        name={"name"}
                        htmlFor={"name"}
                        rules={[
                            {required: true, message: "Це поле є обов'язковим!"},
                            {min: 3, message: "Довжина поля 3 символи"}
                        ]}
                    >
                        <Input autoComplete="name" placeholder={category?.name} value={category?.name}/>
                    </Form.Item>

                    <Form.Item
                        label={"Опис"}
                        name={"description"}
                        htmlFor={"description"}
                        rules={[
                            {required: true, message: "Це поле є обов'язковим!"},
                            {min: 10, message: "Довжина поля 10 символи"}
                        ]}
                    >
                        <TextArea placeholder={category?.description} value={category?.description}/>
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Фото"
                        valuePropName="image"
                        getValueFromEvent={(e: UploadChangeParam) => {
                            const image = e?.fileList[0] as IUploadedFile;
                            return image?.originFileObj;
                        }}
                        rules={[{required: true, message: 'Оберіть фото категорії!'}]}
                    >
                        <Upload
                            showUploadList={{showPreviewIcon: false}}
                            beforeUpload={() => false}
                            accept="image/*"
                            listType="picture-card"
                            maxCount={1}
                        >
                            <div>
                                <PlusOutlined/>
                                <div style={{marginTop: 8}}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Button style={{margin: 10}} type="primary" htmlType="submit">
                            Змінити
                        </Button>
                        <Link to={"/"}>
                            <Button style={{margin: 10}} htmlType="button">
                                Скасувати
                            </Button>
                        </Link>
                    </Row>
                </Form>
            </Row>
        </>
    );
}

export default CategoryEditPage;