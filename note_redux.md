- Redux là một thư viện của Javascript giúp quản lý dữ liệu (state management)
- Lưu ý: Redux không phải do React xây dựng. Redux là của cộng đồng bên ngoài tạo ra, không liên quan gì tới React. Chỉ là thường hay dùng với React mà thôi. Redux có thể kết hợp với cả Vue, Angular và Javascript thuần.

  -> Mã nguồn của nó cũng chỉ là Javascript mà thôi.

- Tách ra 2 phần kiến thức
  1. Redux: Học riêng kiến thức cốt lõi của Redux thôi.
    https://www.npmjs.com/package/redux
  2. React Redux: Là một thư viện giúp kết nối React với Redux
    https://www.npmjs.com/package/react-redux

- State dữ liệu cần lưu trữ và quản lý
- Muốn thay đổi State (Thêm, xoá, sửa, ...) thì phải `dispatch` một `action`
- Action là gì? Là một plain object trong Javascript dùng để mô tả đặc điểm của `action`?
  - Action đó là `action` gì? Thêm, hay xoá, hay sửa, hay là gì đấy, ... ??
    -> Giả sử như là Thêm phần tử -> Data cần thêm
    -> Xoá phần tử phải có thêm thông tin id cần xoá
    -> Update phần tử phải có thêm thông tin id và thông tin mới cần update

  -> Thường một `action` phải chứa đầy đủ tất cả thông tin trên
  -> Về quy tắc của Redux `action` bắt buộc phải có một thuộc tính tên là `type`
    `{ type: 'TOGGLE_SHOW_FORM' }`

  -> Ngoài thuộc tính `type`, tất cả những data kèm theo khác do lập trình viên tự quy định

  -> Action thêm mới sản phẩm
    `{ type: 'ADD_NEW_PRODUCT', productItem: { id: 20, name: 'Tieu de' } }`

- Reducer: 
  + Là một function thực hiện logic biến đổi dữ liệu dựa vào `action` được gửi tới.
  + Ai là người gọi hàm? Redux là người gọi. Nó sẽ được gọi khi mình `dispatch` một `action`
  + Input: Hai đối số, state hiện tại và action được gửi đến  
    ```javascript
    function reducer(currentState, action) {
      
    }
    ```
  + Output: Return về state mới sau khi đã xử lí logic thay đổi currentState

- Store là nơi lưu trữ lập trung dữ liệu của Redux 


- Các bước cấu hình Redux
  1. Tạo Reducer
  2. Tạo Store: Khi khởi tạo một Store. REDUX sẽ giúp mình kích hoạt một `action` khởi tạo -> Lúc đó reducer sẽ chạy lần đầu tiên -> Có thể return về data mới để thiết lập giá trị khởi tạo cho State