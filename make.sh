test -f .env && (rm .env && > .env) || > .env

read -p 'Set default environment (Y|N): ' results

if [ "$results" == "y" ] || [ "$results" == "Y" ] 
  then 
    echo "NODE_ENV=development" >> .env
    echo "PORT=8080" >> .env
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

  read -p 'Node environment (development): ' INPUT
    [ -z "$INPUT" ] && echo "NODE_ENV=development" >> .env || echo "NODE_ENV=$INPUT" >> .env

  read -p 'Server port (8080): ' INPUT
    [ -z "$INPUT" ] && echo "PORT=8080" >> .env || echo "PORT=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Auth config ###"
  echo ""

  read -p 'Auth key security (secret): ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_SECURITY=secret" >> .env || echo "AUTH_KEY_SECURITY=$INPUT" >> .env

  read -p 'Auth key expires (300000): ' INPUT
    [ -z "$INPUT" ] && echo "AUTH_KEY_TOKEN_EXPIRES=300000" >> .env || echo "AUTH_KEY_TOKEN_EXPIRES=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Postgres config ###"
  echo ""

  read -p 'Postgres host (localhost): ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_HOST=localhost" >> .env || echo "DATABASE_HOST=$INPUT" >> .env

  read -p 'Postgres port (5432): ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_PORT=5432" >> .env || echo "DATABASE_PORT=$INPUT" >> .env

  read -p 'Postgres database (postgres): ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_NAME=postgres" >> .env || echo "DATABASE_NAME=$INPUT" >> .env

  read -p 'Postgres user (postgres): ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_USER=postgres" >> .env || echo "DATABASE_USER=$INPUT" >> .env

  read -sp 'Postgres password (postgres): ' INPUT
    [ -z "$INPUT" ] && echo "DATABASE_PASS=postgres" >> .env || echo "DATABASE_PASS=$INPUT" >> .env

  echo >> .env
  echo ""
  echo "----------------------------"

  echo "### Mongo config ###"
  echo ""

  read -p 'Mongo host (mongo_db): ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_HOST=mongo_db" >> .env || echo "MONGO_HOST=$INPUT" >> .env

  read -p 'Mongo port (27017): ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_PORT=27017" >> .env || echo "MONGO_PORT=$INPUT" >> .env

  read -p 'Mongo database (test): ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_NAME=test" >> .env || echo "MONGO_NAME=$INPUT" >> .env

  read -p 'Mongo user (root): ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_USER=root" >> .env || echo "MONGO_USER=$INPUT" >> .env

  read -sp 'Mongo password (root): ' INPUT
    [ -z "$INPUT" ] && echo "MONGO_PASS=root" >> .env || echo "MONGO_PASS=$INPUT" >> .env
  
  echo >> .env
  echo ""
  echo "----------------------------"
fi


echo "Successfully!!"
echo ""