# Cardle

## Backend Setup
1. Create an empty `cardle` schema (assuming MySQL is already installed):

```sh
mysql -u root -e "CREATE DATABASE cardle";
```


## Usage

### /word/guess
Sample Request:
```
{
    "word": "ACURA",
    "guessNumber": 2
}
```

Sample Response:
```
{
    "result": [
        {
            "letter": "B",
            "result": "WRONG"
        },
        {
            "letter": "U",
            "result": "WRONG_POSITION"
        },
        {
            "letter": "I",
            "result": "WRONG"
        },
        {
            "letter": "C",
            "result": "WRONG_POSITION"
        },
        {
            "letter": "K",
            "result": "WRONG"
        }
    ],
    "guessNumber": 2
}
```