## Authentication
### Request:
#### Login
```
{
    'email': 'some@email.com',
    'password': 'Some password'
}
```
#### Register
```
{
    'name': 'some name',
    'email': 'some@email.com',
    'password': 'Some password'
}
```
### Response:
#### Login
```
{
    "status": true,
    "message": "User Logged In Successfully",
    "token": "6|x7MXnpBGpJOqc8URtXAnC3Q4xAiyIuF6P1KAdMZU"
}
```
#### Register
```
{
    "status": true,
    "message": "User Logged In Successfully",
    "token": "6|x7MXnpBGpJOqc8URtXAnC3Q4xAiyIuF6P1KAdMZU"
}
```

## API Authentication
Use bearer token


## API Response Format
```
{
    'status': true|false,
    'message': 'Some message',
    'data': [],
}
```
