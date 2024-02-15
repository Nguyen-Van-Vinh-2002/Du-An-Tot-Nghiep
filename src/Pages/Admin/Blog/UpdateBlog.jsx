import React from "react";
import { Button, Upload, Form, Input,DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const UpdateBlog = () => {
    const onFinish = () => {
        console.log("Success:", values);
      };
    
      const onFinishFailed = () => {
        console.log("Failed:", errorInfo);
      };
      return (
        <div className="form-container">
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              paddingLeft: "250px",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            Sửa tin tức
          </h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tiêu dề"
              name="tieude"
              rules={[{ required: true, message: "Vui long nhap tieu de!" }]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item label="Nội dung">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ngày đăng">
        <DatePicker />
      </Form.Item>
            <Form.Item
              label="Image"
              name="image"
              validateTrigger={["onChange", "onBlur"]}
            >
              <Upload.Dragger multiple accept=".jpg,.png">
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload.Dragger>
            </Form.Item>
    
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit">Sửa</Button>
            </Form.Item>
          </Form>
        </div>
      );
}

export default UpdateBlog