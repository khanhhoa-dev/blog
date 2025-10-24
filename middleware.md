# Middleware:

    - Là các hàm đứng giữa làm trung gian giữa request từ client và response từ server

    Browser(client) ================= REQUEST ====================> (middleware) Server(Node)

    Browser(client) <================= RESPONSE ==================== Server(Node)

### Vai trò

    Nhà ================= REQUEST ====================> Bác bảo vệ 1 (middleware1): Bác bảo vệ 2 (middleware2) Sự kiện

    Nhà <================= RESPONSE ==================== Sự kiện

     - Từ nhà đến sự kiện, khi đến bác bảo vệ đóng vai trò trung gian<middleware> sẽ kiểm tra xem có vé hay không nếu có thì next() qua middleware2 để xử lý rồi mới cho vào sự kiện

    1. Xác thực(Validation)
    2. Gọi phần mềm trung gian tiếp theo <Nếu có>
    3. Thực thi thay đổi / chỉnh sửa
    4. Kết thúc chu trình yêu cầu - phản hồi

### Tính ứng dụng

1. Xác thực(Authentication)
2. Phân quyền(Authorization)
