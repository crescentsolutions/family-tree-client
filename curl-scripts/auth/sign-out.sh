curl "https://stormy-gorge-66260.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
