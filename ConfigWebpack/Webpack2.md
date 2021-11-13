# Khởi tạo project với Webpack

## Khái niệm

### Webpack là công cụ giúp gói gọn toàn bộ file js, css(bao gồm cả scss,sass,..) trong dự án Javascript

## Cấu trúc

### Cây thư mục

```
Project
├── build
│   ├── index.html
│   └── bunder.js
├── node_modules
├── src
│   ├── components
│   ├── pages
│   ├── ...
│   ├── App.js
│   └── index.js
├── webpack
│   ├── webpack.common.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── package.json
├── package-lock.json
├── .gitignore
├── .eslintrc
└── .babelrc

```

### Thư mục src
- Chứa các file của dự án React bao gồm các file jsx, js, css,scss,...
- Là đầu vào của ứng dụng
### Thư mục node_modules
- Chứa các thư viện cho dự án

### Thư mục webpack
- Là nơi chứa các file cấu hình webpack
- Phân loại file cấu hình cho từng môi trường

### Thư mục build
- Là đầu ra của ứng dụng
- Chứa các file html,js,css để hiển thị phía trình duyệt

### Các file cấu hình khác
- package.json: chứa thông tin các module dùng trong dự án, các lệnh dùng cho dự án
- .gitignore: chứa thông tin thư mục k tải lên git
- .eslintrc: chứa các cấu hình báo lỗi cho dự án
- .babelrc: chứa cấu hình biên dịch babel
## Cấu hình webpack
### Một số cấu hình cơ bản
- entry
  - xác định đầu vào của ứng dụng

```javascript
module.exports = {
  entry: {
    main: "./src/index.js",
  },
};
```
- output:
  - xác định đầu ra của ứng dụng

```javascript
module.exports = {
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "bundle.js",
  },
};
```

- loader
  - xử lý các tệp nằm ngoài js,html,css để trả về các file có định dạng trên
  - Có các chuyển đổi
    - file: file-loader
    - transpiling: babel-loader
    - templating: html-loader
    - styling: style-loader, css-loader, less-loader, sass-loader

```javascript
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        ]
    }
```

- alias
  - cấu hình đường dẫn tuyệt đối cho dự án

```javascript
    resolve: {
        alias: {
        src: Path.resolve(__dirname, '../src')
        ...
        }
```

- CleanWebpackPlugin
  - Xoá hết thư mục build cũ trước khi build lại

```javascript
    plugins: [
        new CleanWebpackPlugin(),
        ...
    ]
```

- HtmlWebpackPlugin
  - Dùng để sắp xếp, chỉnh sửa và tối ưu hoá các file html trong thư mục build

```javascript
plugins: [
    new HtmlWebpackPlugin({
        template: Path.resolve(__dirname, "../src/index.html"),
        minify: htmlMinifyOpts,
    }),
];
```

- DefinePlugin
  - Định nghĩa các biến của dự án tại thời điểm thực thi, thường là các biến môi trường

```javascript
    plugins: [
            new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            }),
        ],
```

- MiniCssExtractPlugin
  - Làm gọn file css(bỏ dấu cách, xuống dòng, comment,...)

```javascript
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: 'css/[name].[chunkhash:8].chunk.css',
            }),
        ...
    ]
    module: {
        rules:[
            {
            test: /\.s?css/i,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            ],}
            ...
        ]
    }
```
- SplitChunks
  - Tránh sự trùng lặp giữa các mã bằng cách gom những mã chung lại
```javascript
    optimization: {
        splitChunks: {
        chunks: 'all',
        name: false,
        },
    },
```
- mode
  - xác định môi trường cho dự án: development,test, production

```javascript
    mode:'production',
```

- devtool
  - Chứa các tuỳ chọn về tính năng trong quá trình phát triển

```javascript
    devtool: 'inline-source-map',
```

- devServer
  - chứa cấu hình liên quan đến server dev: port, contentBase,inline,...

```javascript
    devServer: {
        inline: true,
      },
```

### File webpack.common.js

- Là file chứa cấu hình chung cho tất cả các môi trường
- Thường chứa các cấu hình như sau: entry và default output,alias, các plugin CleanWebpackPlugin, HtmlWebpackPlugin,rules loader,...

### File webpack.config.dev.js

- Là file chứa cấu hình cho môi trường development
- Thường chứa các cấu hình cho môi trường dev:mode, devServer, devtool,output... ngoài ra còn chứa DefinePlugin để thiết lập biến môi trường

### File webpack.config.prod.js

- Là file chứa cấu hình cho môi trường production
- Thường chứa các cấu hình cho môi trường production: mode, stats, output, các Plugin giúp tối ưu hoá: MiniCssExtractPlugin, SplitChunks,.... Ngoài ra còn chứa DefinePlugin để thiết lập biến môi trường

## Ngoài webpack

### React và React DOM

- Cần có các thư viện này để viết được code React bao gồm các components, hooks, ...

```
npm i react react-dom
```

### Babel

- Đối với trình duyệt cũ, Babel sẽ chuyển các cú pháp mới của ES6, ES7,... sang ES5 để trình duyệt có thể hiểu

```
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react
```

### Eslint

- Dự án cần tuân thủ các quy tắc nhất định về cú pháp để đảm bảo chất lượng code, Eslint sẽ thực hiện nhiệm vụ đó

```
npm install --save-dev eslint
```
