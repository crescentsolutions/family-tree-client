API="http://localhost:4741"
# API="https://stormy-gorge-66260.herokuapp.com/sign-in"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
