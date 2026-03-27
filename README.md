# Blog Phong Thủy - An Tính

Đây là một blog chuyên nghiệp về phong thủy sử dụng HTML, CSS và JavaScript. Trang web được thiết kế theo phong cách hiện đại với giao diện bố cục 2 cột, hình ảnh bài viết, bình luận và sidebar đầy đủ.

## Cấu trúc

- `index.html`: Trang chủ với bài viết nổi bật, sidebar danh mục và newsletter
- `blog.html`: Trang blog với nhiều bài viết, hình ảnh, metadata, và bộ phận bình luận
- `products.html`: Trang giới thiệu các loại đồ phong thủy dưới dạng lưới sản phẩm
- `contact.html`: Trang liên hệ với form gửi tin nhắn và thông tin liên lạc
- `style.css`: File CSS chuyên nghiệp với responsive design
- `script.js`: File JavaScript xử lý các tương tác (bình luận, form)

## Tính năng

- ✨ **Header chuyên nghiệp** với navigation, search bar, và login
- 🎯 **Centered logo** với tên trang "AN TÍNH"
- 📰 **Nhiều bài viết** với hình ảnh, tác giả, ngày đăng, và tag danh mục
- 💬 **Bộ phận bình luận** cho mỗi bài viết với danh sách bình luận và form gửi bình luận
- 📱 **Sidebar** với bài viết nổi bật, danh mục, và form đăng ký newsletter
- 🛒 **Trang cửa hàng** với lưới sản phẩm hiển thị 3-4 sản phẩm mỗi dòng
- 📧 **Trang liên hệ** với form gửi tin nhắn và thông tin liên lạc
- 📱 **Responsive design** tối ưu cho di động (tablet, smartphone)
- 🎨 **Styling chuyên nghiệp** với màu sắc phong thủy (nâu, vàng nhạt)

## Cách chạy

Mở file `index.html` trong trình duyệt web để xem trang web.

```bash
# Hoặc chạy với HTTP server (nếu có)
python -m http.server 8000
# Truy cập: http://localhost:8000
```

## Vài lưu ý

- Các hình ảnh đang sử dụng placeholder từ `via.placeholder.com`, có thể thay thế bằng hình ảnh thực tế
- Form bình luận và liên hệ hiện tại chỉ có validation client-side
- Cần backend để lưu trữ bình luận và tin nhắn liên hệ
- Design responsive hoàn toàn cho mobile devices

## Yêu cầu tương lai

- Kết nối backend để lưu bình luận
- Upload hình ảnh thực tế
- Phân trang cho danh sách bài viết
- Search functionality
- User authentication