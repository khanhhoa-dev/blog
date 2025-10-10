# Khi người dùng gửi request từ client đến server (ví dụ: http://localhost:3000/blog), ExpressJS — thông qua đối tượng app — sẽ tiếp nhận yêu cầu và chuyển qua các middleware để xử lý.

# Tiếp đó, router sẽ xác định đường dẫn phù hợp và gọi đến controller tương ứng.

# Controller chịu trách nhiệm xử lý nghiệp vụ, có thể gọi đến model để truy xuất dữ liệu từ cơ sở dữ liệu. Sau khi nhận được dữ liệu, controller sẽ gửi sang view để hiển thị nội dung động. Cuối cùng, ExpressJS trả lại response (HTML hoặc JSON) về cho client.
