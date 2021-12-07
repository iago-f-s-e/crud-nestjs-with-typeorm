test -f .env && (rm .env && > .env) || > .env

read -p 'Set default environment (Y|N): ' results

if [ "$results" == "y" ] || [ "$results" == "Y" ] 
  then 
    echo "NODE_ENV=development" >> .env
    echo "PORT=8081" >> .env
    echo >> .env
    echo "AUTH_KEY_SECURITY=secret" >> .env
    echo "AUTH_KEY_TOKEN_EXPIRES=300000" >> .env
    echo >> .env
    echo "DATABASE_HOST=localhost" >> .env
    echo "DATABASE_PORT=5432" >> .env
    echo "DATABASE_NAME=postgres" >> .env
    echo "DATABASE_USER=postgres" >> .env
    echo "DATABASE_PASS=postgres" >> .env
    echo >> .env
    echo "MONGO_HOST=mongo_db" >> .env
    echo "MONGO_PORT=27017" >> .env
    echo "MONGO_NAME=test" >> .env
    echo "MONGO_USER=root" >> .env
    echo "MONGO_PASS=root" >> .env

else 
  echo ""
  echo "### Server config ###"
  echo ""

  read -p 'Node environment: ' INPUT
    [ -z "$INPUT" ] && echo "NODE_ENV=development" >> .env || echo "NODE_ENV=$INPUT" >> .env

  read -p 'Server port: ' INPUT
    [ -z "$INPUT" ] && echo "PORT=8081" >> .env || echo "PORT=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Auth config ###"
  echo ""

  read -p 'Auth key security: ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_SECURITY=secret" >> .env || echo "AUTH_KEY_SECURITY=$INPUT" >> .env

  read -p 'Auth key expires: ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_TOKEN_EXPIRES=300000" >> .env || echo "AUTH_KEY_TOKEN_EXPIRES=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Postgres config ###"
  echo ""

  read -p 'Postgres host: ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_HOST=localhost" >> .env || echo "DATABASE_HOST=$INPUT" >> .env

  read -p 'Postgres port: ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_PORT=5432" >> .env || echo "DATABASE_PORT=$INPUT" >> .env

  read -p 'Postgres database: ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_NAME=postgres" >> .env || echo "DATABASE_NAME=$INPUT" >> .env

  read -p 'Postgres user: ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_USER=postgres" >> .env || echo "DATABASE_USER=$INPUT" >> .env

  read -sp 'Postgres password: ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_PASS=postgres" >> .env || echo "DATABASE_PASS=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Mongo config ###"
  echo ""

  read -p 'Mongo host: ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_HOST=mongo_db" >> .env || echo "MONGO_HOST=$INPUT" >> .env

  read -p 'Mongo port: ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_PORT=27017" >> .env || echo "MONGO_PORT=$INPUT" >> .env

  read -p 'Mongo database: ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_NAME=test" >> .env || echo "MONGO_NAME=$INPUT" >> .env

  read -p 'Mongo user: ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_USER=root" >> .env || echo "MONGO_USER=$INPUT" >> .env

  read -sp 'Mongo password: ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_PASS=root" >> .env || echo "MONGO_PASS=$INPUT" >> .env
  
  echo >> .env
  echo ""
  echo "----------------------------"
fi


echo "Successfully!!"
echo ""