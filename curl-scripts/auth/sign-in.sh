curl "https://stormy-gorge-66260.herokuapp.com/sign-in" \
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
