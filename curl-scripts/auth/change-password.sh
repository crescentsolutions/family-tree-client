curl "https://stormy-gorge-66260.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'

echo
