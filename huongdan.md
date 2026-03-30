# Huong Dan Du An Phong Thuy

## 1) Tong quan du an
Du an la website phong thuy da trang (multi-page), dung HTML + CSS + JavaScript thuần.

Muc tieu:
- Gioi thieu thuong hieu va noi dung phong thuy.
- Hien thi danh muc san pham theo nhom (Da, Go, Do xua).
- Cung cap bai viet chi tiet co sidebar, muc luc, tags, newsletter.
- Toi uu hien thi desktop/mobile.

Cong nghe:
- HTML5
- CSS3 (style.css + article-detail.css + about-services.css)
- JavaScript thuần (script.js)
- Font Awesome (icon)

## 2) Cau truc file va muc dich
- index.html: Trang chu, danh muc san pham, sidebar danh muc.
- article-detail.html: Mau bai viet chi tiet (day du cac block bai viet).
- article-go.html: Bai viet chi tiet chu de Go phong thuy.
- article-doxua.html: Bai viet chi tiet chu de Do xua phong thuy.
- about.html: Trang gioi thieu thuong hieu/chuyen gia.
- services.html: Trang dich vu.
- blog.html: Trang tong hop bai viet.
- contact.html: Trang lien he va form.
- tools.html: Trang cong cu/tien ich.
- products.html: Trang tong hop cong cu/san pham bo sung.
- style.css: CSS global cho header/nav/footer/home/contact/blog va responsive chung.
- article-detail.css: CSS rieng cho trang bai viet chi tiet va sidebar bai viet.
- about-services.css: CSS rieng cho about/services.
- script.js: Xu ly tuong tac client-side (form, fallback anh, TOC, scroll top).
- README.md: Mo ta tong quan cu.
- huongdan.md: Tai lieu huong dan hien tai (file nay).

## 3) Luong bo cuc giao dien
### Header
- logo + ten thuong hieu + search
- nav menu level 1/2

### Main
- Trang chu: left content (cac product-group), right sidebar (tool-nav)
- Trang bai viet: article-wrapper (article-detail + article-sidebar)

### Footer
- 4 cot thong tin: gioi thieu, lien he, social, ho tro
- footer-bottom: ban quyen + DMCA

## 4) style.css dung de lam gi
style.css la file nen cho toan bo website:
- Bien mau: :root (primary-red, primary-gold, primary-brown, ...)
- Header/Nav:
  - .header-top, .header-content, .logo-section, .search-bar
  - .navbar, .nav-menu, .dropdown-menu
- Home:
  - .content-wrapper (grid 2 cot)
  - .product-group, .product-grid, .product-card, .product-image
  - .sidebar, .tool-nav, .tool-menu, .tool-menu-list
- Footer:
  - .footer-content, .footer-section, .footer-bottom
- Responsive:
  - @media (max-width: 768px) cho mobile/tablet

Luu y quan trong:
- style.css co vai tro global, thay doi o day anh huong nhieu trang.
- Neu sua nav/footer, can test tren index, article, contact de tranh vo layout.

## 5) article-detail.css dung de lam gi
File nay chi phuc vu bo trang bai viet chi tiet:
- .article-wrapper, .article-detail, .article-header
- .article-title, .article-description, .article-meta
- .table-of-contents (muc luc), .toc-toggle-btn (nut thu gon/mo rong)
- .hotline-box, .contact-form-inline
- .related-articles, .other-categories
- .article-sidebar, .sidebar-widget, .tag-list, .tag-chip

Neu can doi giao dien bai viet, uu tien sua file nay truoc.

## 6) about-services.css dung de lam gi
Chua style rieng cho:
- Trang about.html
- Trang services.html

Muc dich:
- Tach style theo module de khong lam phinh style.css.

## 7) script.js dung de lam gi
Tat ca xu ly tuong tac phia client:

1. Fallback anh
- Bat su kien error tren tat ca img.
- Neu anh loi -> thay bang anh fallback.

2. Form comment/contact/newsletter
- Validate co ban tren client.
- Alert thong bao ket qua.

3. TOC expand/collapse
- Tim .table-of-contents
- Tao nut .toc-toggle-btn va dong/mo danh sach.

4. Scroll-to-top
- Tao nut .scroll-to-top khi can.
- Hien khi scroll > 260px.
- Click de cuon len dau trang mượt.

Luu y:
- script.js duoc load o cuoi body.
- Khong co backend, nen du lieu form chua luu server.

## 8) Quy uoc thuong hieu va noi dung
Can thong nhat tren toan bo trang:
- Ten thuong hieu: Phong Thuy Cho Nguoi Viet
- Mau chu dao: do + vang + nau
- Header/Footer phai cung nguon noi dung

Checklist nhanh:
- Header logo/ten co giong nhau giua cac trang?
- Footer 4 cot co day du?
- Footer-bottom co ban quyen + DMCA?
- Link dieu huong co trang dich hop le?

## 9) Cac khu vuc hay gap loi
1. Mat footer hoac sai cau truc the
- Trieu chung: giao dien bi dut, script nhay sai vi tri.
- Cach xu ly: dam bao co cap the <footer> ... </footer> day du.

2. Anh bi vo/khong hien
- Trieu chung: o xam/khung rong.
- Cach xu ly: fallback anh trong script.js + thay src that.

3. Vo mobile
- Trieu chung: logo/menu xuong dong kho doc.
- Cach xu ly: check media query trong style.css, test width 360px.

4. Sidebar khong cuon rieng
- Trieu chung: cuon trang bi kho khi focus sidebar.
- Cach xu ly: overflow-y + max-height + overscroll-behavior.

## 10) Huong dan mo rong nhanh
### Them mot bai viet moi
1. Duplicate article-detail.html -> article-tenmoi.html
2. Sua title, mo ta, noi dung, tags sidebar
3. Neu can style rieng, them class moi trong article-detail.css
4. Them link vao menu/dropdown hoac block bai viet lien quan

### Them mot muc menu level 2
1. Sua block nav trong index.html
2. Dong bo nav sang cac trang con
3. Kiem tra desktop/mobile

### Them card san pham o trang chu
1. Them article.product-card trong dung product-group
2. Gan anh + title + desc + read-more
3. Kiem tra fallback anh va responsive

## 11) Cach chay du an
Don gian nhat:
- Mo index.html bang trinh duyet.

De test tot hon (khuyen nghi):
- Dung local server (VD: Live Server hoac python -m http.server)
- Truy cap qua http://localhost

## 12) Checklist truoc khi commit
- Kiem tra index, article-detail, contact tren desktop va mobile.
- Kiem tra nav dropdown hoat dong.
- Kiem tra footer hien day du tren moi trang.
- Kiem tra anh khong bi khung rong.
- Kiem tra console browser khong co loi JS nghiem trong.

---
Neu can, co the tach tiep tai lieu nay thanh:
- HUONGDAN-GIAODIEN.md
- HUONGDAN-CODE.md
- HUONGDAN-TRIENKHAI.md
