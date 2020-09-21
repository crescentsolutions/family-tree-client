API="http://localhost:4741"
# API="https://stormy-gorge-66260.herokuapp.com/sign-in"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo

# terminal: EMAIL="d@pe.me" PASSWORD="z" sh curl-scripts/auth/sign-in.sh
