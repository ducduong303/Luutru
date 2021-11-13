# Test 
## Cài đặt jest và react-testing-library
### Document
[Jest](https://jestjs.io/docs/getting-started)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
### Cài đặt jest
```
npm i --save-dev jest
```
- file package.json
```json
"scripts":{
    ...
    "test": "jest --watchAll --env=jsdom",
    "coverage": "jest --coverage --watchAll=false"
}

"jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.js"
    ],
    "moduleNameMapper": {
      "^src/(.*)$": "<rootDir>/src/$1",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "verbose": true,
    "globals": {
      "NODE_ENV": "test"
    },
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules",
      "src"
    ]
  }
```
- file fileMock.js 
```javascript
module.exports = 'test-file-stub';
```
- mock css, scss, less
```
npm i --save-dev identity-obj-proxy
```
- file setUpTest.js setup được thực hiện trước khi chạy test
```javascript
import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```
- cài đặt thư viện react-testing-library
```
npm i --save-dev @testing-library/react
```
### Cài đặt đã xong, bắt đầu viết test nào
****
## Thư mục và file test
```
└── utils/
    └── CommonFunction/
        ├── __test__/
        │   └── CommonFunction.test.js
        └── index.js
```
- file test được viết trong thư mục test như cây thư mục miêu tả
- file test có đuôi test.js để jest tìm được nó
## Function Test
- Kiếm 1 function để test, thường viết xong function thì viết test luôn
- Import function vào file test
- Nắm được logic thực hiện của function đó
- Lập tất cả các test case và viết test dựa trên cú pháp của jest
### Ví dụ ta có function isEmptyObject cùng nhau test nó nào:
```javascript
import {isEmptyObject} from '../index';

test("test isEmptyObject",()=>{
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({name:""})).toBe(false);
    expect(isEmptyObject("true")).toBe(false);
})
```
## Component Test (phức tạp hơn so với Function test)
- Chọn 1 component để thực hiện test và import nó vào file test. Component được chọn để test thường là 1 page thực hiện 1 nhóm chức năng 
- Xác định các chức năng mà mình sẽ test
- Ứng với mỗi chức năng thì sẽ viết một hoặc nhiều test case. Các bước cụ thể cho 1 test case:

### Arrange: Chuẩn bị đữ liệu đầu vào của bài toán
- Render commponent cần test
```javascript
render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>,
    );
```
- 'Lấy' các element tham gia vào chức năng cần test
```javascript
const usernameEl = await screen.findByPlaceholderText('Tên đăng nhập');
const passwordEl = await screen.findByPlaceholderText('Mật khẩu');
```
- Setup Mock Server nếu chức năng có gọi API
```javascript
const server = setupServer(
  rest.post(`${config.MMS_BACKEND_AUTHENTICATION_HOST}/qr-authentication/auth/login`, (req, res, ctx) => {
    if((req.body.username === 'admin')&&(req.body.password==='admin123')){
      return res(ctx.json(JSON.parse(loginSuccess)))
    }else{
      return res(ctx.json(JSON.parse(loginFail)))
    }
  }),
) 

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```
- setup một số function liên quan (nếu có)
```javascript
const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
```
### Act
- Giả lập những hành động của người dùng thực hiện chức năng đó
```javascript
fireEvent.change(usernameEl, { target: { value: 'admin' } });
fireEvent.change(passwordEl, { target: { value: 'admin123' } });
fireEvent.submit(screen.getByTestId('login-form'));
```
### Assert
- Kiểm tra kết quả có như mong muốn hay không
```javascript
await waitFor(()=>expect(mockHistoryPush).toHaveBeenCalledWith('/transaction/list'));
``` 
### Ví dụ hoàn chỉnh 
```javascript
test('submit login success', async () => {
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>,
    );
  const usernameEl = await screen.findByPlaceholderText('Tên đăng nhập');
  const passwordEl = await screen.findByPlaceholderText('Mật khẩu');

  fireEvent.change(usernameEl, { target: { value: 'admin' } });
  fireEvent.change(passwordEl, { target: { value: 'admin123' } });
  fireEvent.submit(screen.getByTestId('login-form'));

  await waitFor(()=>expect(mockHistoryPush).toHaveBeenCalledWith('/transaction/list'));
  });
```
## Lưu ý khi viết test với dự án sử dụng Antd
### Test Select
- Để lấy các element Select dùng getAllByRole('combobox')
- Các option của select mặc định bị ẩn, để hiển thị dùng sự kiện mouseDown vào các thẻ select
```javascript
const select = screen.getAllByRole('combobox')

fireEvent.mouseDown(select[1])
fireEvent.mouseDown(select[3])
```
### Test Form
- Sau khi submit cần waitFor để xử lý sự kiện bất đồng bộ
```javascript
fireEvent.submit(screen.getByTestId('search-form'))
await waitFor(() => expect(dataSearch).toHaveBeenCalledTimes(1))
```