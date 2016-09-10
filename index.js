module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/no-multi-comp": 0,
        "quotes": [
            2,
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "no-console": 0,
        "no-underscore-dangle": 0,
        "max-len": 0,
        "flowtype/require-parameter-type": 1,
        "flowtype/require-return-type": [
            1,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/space-after-type-colon": [
            1,
            "always"
        ],
        "flowtype/space-before-type-colon": [
            1,
            "never"
        ],
        "flowtype/type-id-match": [
            1,
            "^([A-Z][a-z0-9]+)+Type$"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ]
    } ,
    "plugins": [
        "flowtype"
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    }
}
