# Petful API

Created by: [Fabian Lema](https://github.com/fabianlema15)


## Demo

Click on the next link: [Demo](https://petful-fabian.herokuapp.com/api)

## Technologies

>NodeJS  
Express  
Postgresql


## Main URL  
`https://petful-fabian.herokuapp.com/api`


## Endpoints

##### CATS

| Resource | Method | Description |
|-------|------|----------|
| /api/cats | GET | Return available cat to be adopted |
|        | DELETE | Remove cat from available cats |
| /api/cats/next/:id | GET | Return next available cat |
| /api/cats/prev/:id | GET | Return previous cat of the list |

##### DOGS

| Resource | Method | Description |
|-------|------|----------|
| /api/dogs | GET | Return available dog to be adopted |
|        | DELETE | Remove dog from available dogs |
| /api/dogs/next/:id | GET | Return next available dog |
| /api/dogs/prev/:id | GET | Return previous dog of the list |
