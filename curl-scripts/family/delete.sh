API="https://stormy-gorge-66260.herokuapp.com"
URL_PATH="/family-members"

  curl "${API}${URL_PATH}/${ID}" \
    --include \
    --request DELETE \
    --header "Authorization: Bearer ${TOKEN}"

  echo
