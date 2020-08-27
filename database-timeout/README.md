Basic example with a query that delays

```
docker pull mysql
docker run --name my-db -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql
docker container ls
docker exec -it container_id bash
mysql
mysql> ALTER USER root IDENTIFIED WITH mysql_native_password BY 'password';
mysql> create database test;
```

```
npm i
npm start
```

Open another terminal and run:

```
curl -X GET localhost:3000
```

```
Result:
Error: Timed out after 10000ms failures: 1, timeouts: 1
```

