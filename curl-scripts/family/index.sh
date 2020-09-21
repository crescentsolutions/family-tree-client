API="http://localhost:4741"
# API="https://stormy-gorge-66260.herokuapp.com/"
URL_PATH="/family-members"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
