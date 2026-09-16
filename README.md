# IELTS Anime Light Novel - Chinh Phục 8.0 (Trọn Bộ 4 Kỹ Năng)

Ứng dụng học IELTS toàn diện 4 kỹ năng (**Reading, Writing, Speaking, Listening với Audio AI**) thông qua tiểu thuyết Anime tương tác cùng các nhân vật huyền thoại (**Naruto, Sasuke, Luffy, Zoro, Goku, Vegeta, Levi, Eren, Killua, Gojo, Tanjiro...**).

---

## 🚀 Hướng Dẫn Deploy Lên Render

Dự án được cấu hình sẵn để deploy lên **Render** chỉ trong 1 phút dưới dạng **Static Site** (hoặc Web Service):

### Cách 1: Deploy dạng Static Site (Khuyên dùng - Miễn phí 100%, nhanh nhất)
1. Đăng nhập vào [Render.com](https://render.com).
2. Nhấn nút **New +** ➔ Chọn **Static Site**.
3. Kết nối với GitHub repository: `https://github.com/HoangKyAnh05/Tool_Anime`.
4. Điền cấu hình:
   - **Name**: `ielts-anime-novel` (hoặc tên tùy thích)
   - **Branch**: `main`
   - **Build Command**: `npm run build:ui` (hoặc `npm install && npm run build:ui`)
   - **Publish Directory**: `dist`
5. Nhấn **Create Static Site**. Render sẽ tự động build và cung cấp đường link web trực tuyến `https://<ten-app>.onrender.com`!

### Cách 2: Deploy qua render.yaml (Tự động)
- Dự án đã tích hợp sẵn file `render.yaml`. Khi bạn tạo dự án qua **Blueprints** trên Render, hệ thống sẽ tự động cấu hình Build Command và Publish Directory.

---

## 💻 Hướng Dẫn Chạy Cục Bộ (Local Desktop App)

### Cài đặt thư viện:
```bash
npm install
```

### Chạy giao diện Web (Vite Dev):
```bash
npm run dev
```

### Chạy ứng dụng Desktop (Electron):
```bash
npm run build:ui
npm run build:electron
npm start
```
Hoặc nhấp đúp trực tiếp vào shortcut ngoài Desktop: **`IELTS Anime Light Novel.lnk`** (khởi chạy ngầm, không mở terminal).
