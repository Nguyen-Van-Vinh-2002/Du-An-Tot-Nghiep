import React, { useEffect, useState } from 'react';

function Checkrole() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gửi yêu cầu GET đến API endpoint
                const response = await fetch('https://du-an-tot-nghiep-be.vercel.app/users/one/');

                if (!response.ok) {
                    throw new Error('Không thể lấy dữ liệu từ API');
                }

                // Trích xuất dữ liệu từ phản hồi
                const jsonData = await response.json();

                // Lấy trường dữ liệu bạn quan tâm (ví dụ: trường "field_name")
                const fieldValue = jsonData.field_name;

                // Lưu trữ dữ liệu trong state
                setData(fieldValue);
            } catch (error) {
                console.error('Lỗi:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <p>Giá trị của trường 'field_name' là: {data}</p>
            ) : (
                <p>Đang tải...</p>
            )}
        </div>
    );
}

export default Checkrole;
