module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "linebreak-style": [
      "off"
    ],
    "no-underscore-dangle": [
      "off"
    ],
    "no-use-before-define": [
      "off"
    ],
    "no-restricted-syntax": [
      "off"
    ],
    "comma-dangle": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "no-multi-assign": [
      "off"
    ],
    "jsx-a11y/no-static-element-interactions": [
      "off"
    ]
  },
  "globals": {
    "$": true
  }
};
