export default {
    AllowedPattern: {
      MAIL: "^([A-Za-z0-9]+(\.|\-|\_)?[A-Za-z0-9]+)+@[A-Za-z]+\.[A-Za-z]{2}$",
      MESSAGE: "^[A-Za-zÀ-ÖØ-öø-ÿ\.\:\,\;\?\!\(\)\ ]+$",
      NAME: "^[A-Za-zÀ-ÖØ-öø-ÿ]+$"
    },

    COMMA_OR_SPACE: /,| /,
    NON_CHARACTERS: /[^a-zA-Z]+/g,
    NON_DIGITS: /\D/g,
};
