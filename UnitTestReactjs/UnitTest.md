## Test 
- là kỹ thuật kiểm thử những thành phần hoặc đơn vị nhỏ nhất trong code (thường là các hàm hoặc phương thức)
### Một số các Javascript Unit Testing Frameworks
- MochaJS
- Jest 
- AVA
- Karma
- Jasmine
 ...
### Tại sao cần Test
- khoanh vùng  và giảm thời gian tìm lỗi trong quá trình phát triển sản phẩm 
- Nâng cao chất lượng code 
- Giảm thiểu rủi ro khi có sự thay đổi, thêm mới hoặc tích hợp tính năng
....
### Các cấp độ Testing
![](https://www.softwaretestingmaterial.com/wp-content/uploads/2015/12/Levels-of-Testing-1.png?ezimgfmt=ng:webp/ngcb5)

### Mô hình Testing
> TDD (Test-Driven Development)
- Viết `Test` trước và viết `Code` sau 

Ưu điểm:
- Cover được hầu hết mọi trường hợp 
- Tránh code thừa, tập trung vào những thứ thực sự cần thiết
- Dễ dàng sửa đổi 

Nhược điểm:
- Tốn thời gian hơn khi phát triển sản phẩm

> BDD (Behavior-Driven Development )
- Viết `Code` trước và viết `Test` sau

Ưu điểm:
- Test được những chức năng của đối tượng đã hoàn thành 
- Thực sự hiểu về cách thức hoạt động

Nhược điểm:
- Sửa đổi rất nhiều nếu code thay đổi 

### Testing Front-end
1. Unit Test
- Test các bộ phận riêng lẻ biệt lập
- Chủ yếu test function với React có thể coi là test component
2. Integration test
- Test sự liên kết giữa các component
3. End-to-end test
- Giống như integration test nhưng sẽ test như môi trường production
- Giống test bằng tay nhưng quá trình này sẽ được tự động hóa 

### Các thành phần Test case
> Thường có 2 thành phần chính 
1. `Expected value`: Giá trị mong đợi khối lệnh trả về
2. `Actual value`: Giá trị thực tế mà khối lệnh trả về
***
Sau khi thực hiện khối lệnh cần kiểm thử, sẽ nhận được actual value. Lấy giá trị đó so sánh với expected value. Nếu hai giá trị này trùng khớp nhau thì kết quả của test case là PASS. Ngược lại, kết quả là FAIL.
***
### Cấu trúc của Test case
> Gồm 3 Thành phần cấu trúc `AAA`
1. `Arrange`: Chuẩn bị dữ liệu đầu vào và các điều kiện khác để thực thi test case.`(Input)`
2. `Act`: Thực hiện việc gọi phương thức/hàm với đầu vào đã được chuẩn bị ở Arrange và nhận về kết quả thực tế.`(Run)`
3. `Assert`: So sánh giá trị mong đợi và giá trị thực tế nhận được ở bước Act `(Output)`

> Kết quả Test case sẽ có 2 trạng thái 
1. `PASS`: nếu kết quả mong đợi và kết quả thực tế khớp nhau
2. `FAIL`: nếu kết quả mong đợi khác với kết quả thực tế

### Một số lưu ý khi viết Unit Test
- Các test case nên độc lập với nhau không nên phụ thuộc vào nhau cả về data và thứ tự thực hiện
- Không nên gọi một test case khác trong một test case.
- Đặt tên các đơn vị kiểm thử một cách rõ ràng dễ đọc.
- Dảm bảo lỗi được xác định trong quá trình test được sửa trước khi chuyển sang giai đoạn tiếp theo.
- Không cố gắng viết test case để kiểm thử tất cả mọi thứ, nên tập chung vào kiểm thử sự ảnh hưởng của hành vi hệ thống
- Nên chia nhóm test case cũ và test case mới, test case cũ sẽ chạy với tần xuất ít hơn.

### Unit test tốt?
- Chạy nhanh
- Độc lập giữa các test case, không phụ thuộc vào thứ tự kiểm thử
- Sử dụng dữ liệu thực tế có thể
- Sử dụng data dễ đọc, dễ hiểu
- Test case đơn giản, dễ đọc, dễ bảo trì
- Phản ảnh đúng hoạt động của module

## JEST ?
- Là frameword testing Javascript được phát triển bởi Facebook
- Nếu khởi tạo project với Creact-react-app thì Jest được tích hợp sẵn 

**Ưu điểm**
- Ít bước setup và configuration.
- Cú pháp dễ hiểu ,tài liệu trang chủ chi tiết
- Snapshot testing: lưu lại cấu trúc view tại thời điểm hiện tại rồi so sánh với trong tương lai, nếu chúng không giống nhau thì test đã fail hoặc có một số thứ đã thay đổi.

**Nhược điểm**
- Thư viện mới
- Chưa được dùng nhiều bởi cộng đồng developer.
- Ít tool và thư viện support 

**Một số các tính năng**
1. Using Matchers
2. Asynchronous Code
3. Mock


### Matchers
- Các matchert kiểm tra so sánh điều kiện

- toBe()
- toEqual
- toBeNull 
- toBeUndefined 
- toBeDefined 
- toBeTruthy
....
```javascript

test('Kiểm tra giá trị có bằng 4', () => {
  expect(2 + 2).toBe(4);
});

it('Kiểm tra giá trị có bằng 4', () => {
  expect(2 + 2).toBe(4);
});

//  2 đoạn code trên đều Pass
// test và it đều làm công việc giống nhau ( theo doc it là bí danh của test)

// test và it đều nhận vào 2 giá trị 
// giá trị thứ nhất là chuỗi string mô tả test case
// giá trị thứ 2 là Func thực hiện test case
// Expect => // Trả về đối tượng kỳ vọng
// toBe() => kết quả của so sánh mong đợi 

`Để so sánh giữa 2 obj hoặc array thì sử dụng toEqual `

it('Kiểm tra obj', () => {
  expect({a:2,b:1}).toEqual({a:2,b:1});
});

// ToEqual thì sẽ thực hiện kiểm tra các giá trị trong 1 Obj khác với toBe thực hiện so sánh (===) so sánh cả về địa chỉ

```

**Numbers Matchers**
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan 
- toBeLessThanOrEqual

```javascript
test('kiểm tra 2 cộng 2', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // lớn hơn 3 không ?
  expect(value).toBeGreaterThanOrEqual(3.5); // Lớn hơn hoặc bằng
  expect(value).toBeLessThan(5); // nhỏ hơn
  expect(value).toBeLessThanOrEqual(4.5); // nhỏ hơn hoặc bằng
});

` Đối với các số thập phân nên sử dụng toBeCloseTo `

test('Cộng 2 số thập phân', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  // Sẽ không hoạt động báo lỗi
  expect(value).toBeCloseTo(0.3); // Pass.
});

```

**Strings**
- toMatch
```javascript
test('there is no I in team', () => {
  expect('team').toMatch(/I/);
});

```
**Arrays and iterables**
```javascript
const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// toContain kiểm tra beer có nằm trong shoppingList
```
### Asynchronous Code
- Có thể sử dụng 3 loại này để test xem quá trình có hoàn thành hay không 

1. Callback
2. Promises
3. Async/Await

```javascript
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
```

## React-testing-library và Enzyme ?

### React-testing-library
- Được xây dựng dựa trên DOM Testing Library bằng cách thêm các API để làm việc với các Component React.

### Một số lưu ý với React-testing-library
- Tránh Trạng thái bên trong của một component
- Tránh các phương thức bên trong của một component
- Tránh các phương thức vòng đời của một component
- Tránh các component con

### API core
1. Queries:
- là phương thức Testing Library cung cấp để tìm phần tử trên trang 
- Tùy vào nội dung trang các truy vấn khác nhau có thể phù hợp hơn hoặc ít hơn.
**Các lọai queries**
- `getBy` : Trả về nút phù hợp cho một truy vấn và đưa ra lỗi mô tả nếu không có phần tử
- `getAllBy` :Trả về một mảng tất cả các nút phù hợp cho một truy vấn và đưa ra lỗi nếu không có phần tử nào khớp 
- `queryBy`: Trả về nút phù hợp cho một truy vấn và trả về null nếu không có phần tử nào khớp
- `queryAllBy` : Trả về một mảng gồm tất cả các nút phù hợp cho một truy vấn và trả về một mảng trống ( []) nếu không có phần tử nào khớp.
- `findBy` : Trả về một lời hứa sẽ giải quyết khi một phần tử được tìm thấy khớp với truy vấn đã cho. rejected  nếu không tìm thấy phần tử nào
- `findAllBy`: Trả về một lời hứa sẽ phân giải thành một mảng các phần tử khi tìm thấy bất kỳ phần tử nào phù hợp với truy vấn đã cho. rejected nếu không tìm thấy phần tử nào sau thời gian chờ mặc định là 1000ms.
- ....

2. User Action
- `Firing Events`: 
```javascript
fireEvent(node: HTMLElement, event: Event)
```
- `Async Methods`
- `Appearance and Disappearance`
...

**Render Component**
- Sử dụng DOM ảo Không cần quan tâm đến phiên bản React và cài đặt Adapter
- Chỉ render đầy đủ và chỉ quan tâm tương tác giữa người dùng và trình duyệt


### Enzyme
- Enzyme có các phương thức support cho việc test trở nên dễ dàng hơn.
- API của Enzyme trực quan và linh hoạt bằng cách bắt chước API của jQuery để thao tác và truyền tải DOM

**Render Component**
- Sử dụng Adapter: Tuỳ biến theo phiên bản của React
- Shallow Rendering sử dụng trong trường hợp không cần render child component của component
- Mount rendering: Render đầy đủ các thành phần con

**User Action**
- Mô phỏng API JQuery

