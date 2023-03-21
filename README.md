# base-app-react-native

## Build file apk

run this command:

`eas build -p android --profile preview`

Thử chạy câu lệnh `npm install -g expo-cli` nếu build thất bại

## Screen trong React Native

Các function là screen thì sẽ có thêm 2 tham số

`navigation` và `route`

- `navigation` dùng để chuyển screen, ví dụ:

```jsx
navigation.navigate("Second", {
  language: "english",
});
```

- `route` dùng để nhận tham số giá trị truyền vào từ hàm navigation.navigate, ví dụ:

```jsx
route.param.language;
```

- Thêm 1 screen, code mẫu:

Thêm vào file Main.js

```jsx
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerShown: false,
    alo: "hi",
  }}
/>
```
