var request = require('request');
var fs = require('fs');

var data = fs.readFileSync('./data.json')

data = JSON.parse(data)



data[0].labels = {
    0: {score:1, label: "on Knowledge"},
    1: {score:3, label: ""},
    2: {score:3, label: "on Knowledge"},
    3: {score:8, label: "on Knowledge"},
    4: {score:10, label: "on Knowledge"},
    5: {score:4, label: ""},
    6: {score:8, label: "on Knowledge"},
    7: {score:9, label: "on Knowledge"},
    8: {score:10, label: "on Lonliness"},
    9: {score:3, label: ""},
    10: {score:10, label: "on Lonliness"},
    11: {score:6, label: ""},
    12: {score:8, label: "on Lonliness"},
    13: {score:2, label: ""},
    14: {score:2, label: ""},
    15: {score:4, label: ""},
    16: {score:1, label: ""},
    17: {score:4, label: "on Knowledge"},
    18: {score:2, label: ""},
    19: {score:2, label: "on Lonliness"},
    20: {score:9, label: ""},
    21: {score:2, label: ""},
    22: {score:7, label: ""},
    23: {score:2, label: ""},
    24: {score:4, label: ""},
    25: {score:8, label: ""},
    26: {score:5, label: ""},
    27: {score:8, label: "on Identity"},
    28: {score:9, label: "on Identity"},
    29: {score:10, label: "on Identity"},
    30: {score:4, label: ""},
    31: {score: "", label: ""}
}


data[1].labels = {
    0: {score:8,label: ''},
    1: {score:10,label: 'on Culture'},
    2: {score:10,label: 'on Culture'},
    3: {score:4,label: ''},
    4: {score:1,label: ''},
    5: {score:10,label: 'on Lonliness'},
    6: {score:6,label: ''},
    7: {score:4,label: ''},
    8: {score:2,label: ''},
    9: {score:1,label: ''},
    10: {score:9,label: ''},
    11: {score:5,label: ''},
    12: {score:10,label: ''},
    13: {score:4,label: ''},
    14: {score:6,label: ''},
    15: {score:7,label: ''},
    16: {score:8,label: ''},
    17: {score: "", label: ""}
}

data[2].labels = {
    0: {score:1,label: ''},
    1: {score:7,label: 'on Knowledge'},
    2: {score:10,label: 'on Identity'},
    3: {score:3,label: 'on Identity'},
    4: {score:1,label: 'on Identity'},
    5: {score:1,label: ''},
    6: {score:7,label: 'on Identity'},
    7: {score:5,label: 'on Knowledge'},
    8: {score:10,label: 'on Culture'},
    9: {score:10,label: 'on Identity'},
    10: {score:6,label: 'on Knowledge'},
    11: {score:10,label: 'on Identity'},
    12: {score:5,label: ''},
    13: {score:7,label: ''},
    14: {score:8,label: 'on Identity'},
    15: {score:7,label: 'on Identity'},
    16: {score:9,label: ''},
    17: {score:5,label: ''},
    18: {score:8,label: ''},
    19: {score:4,label: ''},
    20: {score:8,label: ''},
    21: {score:5,label: ''},
    22: {score:4,label: ''},
    23: {score:6,label: ''},
    24: {score:7,label: ''},
    25: {score:9,label: ''},
    26: {score:10,label: ''},
    27: {score:10,label: 'on Knowledge'},
    28: {score:10,label: 'on Identity'},
    29: {score:7,label: ''},
    30: {score:4,label: ''},
    31: {score:4,label: ''},
    32: {score: "", label: ""}

}

data[3].labels = {
    0: {score:1,label: ''},
    1: {score:8,label: 'on Culture'},
    2: {score:3,label: 'on Culture'},
    3: {score:4,label: 'on Culture'},
    4: {score:4,label: 'on Culture'},
    5: {score:8,label: ''},
    6: {score:1,label: ''},
    7: {score:7,label: 'on Culture'},
    8: {score:4,label: ''},
    9: {score:8,label: ''},
    10: {score:10,label: ''},
    11: {score:4,label: ''},
    12: {score:7,label: 'on Lonliness'},
    13: {score:9,label: 'on Lonliness'},
    14: {score:2,label: 'on Lonliness'},
    15: {score:3,label: 'on Lonliness'},
    16: {score:1,label: 'on Lonliness'},
    17: {score:1,label: 'on Lonliness'},
    18: {score:1,label: 'on Lonliness'},
    19: {score:4,label: ''},
    20: {score:7,label: 'on Lonliness'},
    21: {score:9,label: 'on Identity'},
    22: {score:10,label: 'on Identity'},
    23: {score:10,label: ''},
    24: {score:10,label: ''},
    25: {score:7,label: ''},
    26: {score:9,label: 'on Culture'},
    27: {score:2,label: ''},
    28: {score:4,label: 'on Culture'},
    29: {score:3,label: 'on Culture'},
    30: {score:2,label: 'on Culture'},
    31: {score:4,label: 'on Culture'},
    32: {score:3,label: 'on Culture'},
    33: {score:2,label: 'on Culture'},
    34: {score:1,label: 'on Culture'},
    35: {score:8,label: 'on Culture'},
    36: {score:9,label: 'on Culture'}

}

data[4].labels = {
    0: {score:2,label: 'on Identity'},
    1: {score:8,label: ''},
    2: {score:3,label: 'on Knowledge'},
    3: {score:3,label: 'on Identity'},
    4: {score:2,label: 'on Identity'},
    5: {score:6,label: 'on Identity'},
    6: {score:7,label: 'on Lonliness'},
    7: {score:6,label: 'on Lonliness'},
    8: {score:4,label: 'on Identity'},
    9: {score:8,label: 'on Identity'},
    10: {score:9,label: 'on Identity'},
    11: {score:3,label: 'on Identity'},
    12: {score:2,label: 'on Identity'},
    13: {score:1,label: 'on Identity'},
    14: {score:1,label: ''},
    15: {score:7,label: 'on Lonliness'},
    16: {score:9,label: 'on Lonliness'},
    17: {score:10,label: 'on Identity'},
    18: {score:6,label: 'on Knowledge'},
    19: {score:4,label: 'on Lonliness'},
    20: {score:3,label: 'on Knowledge'},
    21: {score:7,label: ''},
    22: {score:9,label: 'on Identity'},
    23: {score:4,label: 'on Identity'},
    24: {score:3,label: 'on Identity'},
    25: {score:8,label: ''},
    26: {score:10,label: 'on Culture'},
    27: {score:5,label: 'on Identity'},
    28: {score:8,label: ''},
    29: {score:2,label: ''},
    30: {score:2,label: ''},
    31: {score:2,label: 'on Identity'},
    32: {score:1,label: 'on Identity'},
    33: {score:6,label: ''},
    34: {score:4,label: ''},
    35: {score:3,label: ''},
    36: {score:5,label: ''},
    37: {score:4,label: ''},
    38: {score:8,label: ''},
    39: {score:9,label: ''},
    40: {score:7,label: ''},
    41: {score:6,label: ''},
    42: {score:8,label: ''},
    43: {score:7,label: 'on Culture'},
    44: {score:6,label: ''},
    45: {score:4,label: ''},
    46: {score:3,label: ''},
    47: {score:2,label: 'on Knowledge'},
    48: {score:2,label: ''},
    49: {score:1,label: 'on Culture'},
    50: {score:3,label: ''},
    51: {score:4,label: 'on Knowledge'},
    52: {score:4,label: 'on Knowledge'},
    53: {score:3,label: 'on Knowledge'},
    54: {score:7,label: ''},
    55: {score:8,label: ''},
    56: {score:9,label: 'on Identity'},
    57: {score:10,label: ''},
    58: {score:6,label: ''},
    59: {score:6,label: ''},
    60: {score:8,label: ''},
    61: {score:9,label: ''},
    62: {score:"",label: ''}
}

data[5].labels = {
    0: {score:6,label: 'on Identity'},
    1: {score:6,label: 'on Lonliness'},
    2: {score:2,label: ''},
    3: {score:9,label: 'on Lonliness'},
    4: {score:3,label: ''},
    5: {score:2,label: ''},
    6: {score:6,label: 'on Lonliness'},
    7: {score:3,label: ''},
    8: {score:2,label: ''},
    9: {score:8,label: ''},
    10: {score:7,label: ''},
    11: {score:2,label: ''},
    12: {score:6,label: 'on Culture'},
    13: {score:3,label: ''},
    14: {score:8,label: 'on Identity'},
    15: {score:7,label: 'on Identity'},
    16: {score:8,label: 'on Identity'},
    17: {score:10,label: 'on Lonliness'},
    18: {score:2,label: ''},
    19: {score:3,label: ''},
    20: {score:3,label: ''},
    21: {score:2,label: ''},
    22: {score:7,label: ''},
    23: {score:8,label: ''},
    24: {score:3,label: ''},
    25: {score:7,label: 'on Culture'},
    26: {score:10,label: ''},
    27: {score:10,label: ''},
    28: {score:10,label: ''},
    29: {score:10,label: ''},
    30: {score:4,label: ''},
    31: {score:3,label: ''},
    32: {score:3,label: ''},
    33: {score:1,label: 'on Knowledge'},
    34: {score:10,label: ''},
    35: {score:10,label: ''},
    36: {score:9,label: ''},
    37: {score:6,label: ''},
    38: {score:4,label: ''},
    39: {score:5,label: ''},
    40: {score:3,label: ''},
    41: {score:4,label: ''},
    42: {score:8,label: ''},
    43: {score:9,label: 'on Identity'},
    44: {score:8,label: 'on Identity'},
    45: {score:9,label: ''},
    46: {score:9,label: ''},
    47: {score:10,label: 'on Lonliness'},
    48: {score:10,label: 'on Identity'},
    49: {score:8,label: ''},
    50: {score:6,label: ''},
    51: {score:10,label: ''},
    52: {score:8,label: ''},
    53: {score:6,label: ''},
    54: {score:8,label: 'on Culture'},
    55: {score:5,label: 'on Culture'},
    56: {score:4,label: 'on Culture'},
    57: {score:3,label: 'on Culture'},
    58: {score:2,label: ''}

}


data[6].labels = {
    0: {score:2,label: ''},
1: {score:1,label: ''},
2: {score:5,label: ''},
3: {score:9,label: 'on Culture'},
4: {score:7,label: ''},
5: {score:8,label: 'on Culture'},
6: {score:6,label: 'on Culture'},
7: {score:9,label: ''},
8: {score:3,label: ''},
9: {score:8,label: ''},
10: {score:2,label: ''},
11: {score:8,label: ''},
12: {score:5,label: ''},
13: {score:3,label: ''}

}

data[7].labels = {
    0: {score:5,label: 'on Identity'},
    1: {score:8,label: ''},
    2: {score:4,label: ''},
    3: {score:3,label: 'on Knowledge'},
    4: {score:8,label: 'on Religion'},
    5: {score:2,label: 'on Religion'},
    6: {score:3,label: 'on Knowledge'},
    7: {score:7,label: ''},
    8: {score:3,label: ''},
    9: {score:7,label: 'on Religion'},
    10: {score:4,label: 'on Knowledge'},
    11: {score:9,label: 'on Religion'},
    12: {score:10,label: 'on Culture'},
    13: {score:10,label: 'on Lonliness'},
    14: {score:7,label: 'on Culture'},
    15: {score:10,label: 'on Culture'},
    16: {score:10,label: 'on Culture'},
    17: {score:9,label: 'on Identity'},
    18: {score:10,label: ''},
    19: {score:8,label: ''},
    20: {score:9,label: ''},
    21: {score:5,label: 'on Identity'},
    22: {score:8,label: 'on Identity'},
    23: {score:9,label: ''},
    24: {score:9,label: ''},
    25: {score:10,label: ''},
    26: {score:9,label: ''},
    27: {score:7,label: ''},
    28: {score:8,label: 'on Lonliness'},
    29: {score:9,label: 'on Lonliness'},
    30: {score:8,label: ''},
    31: {score:9,label: ''},
    32: {score:7,label: 'on Knowledge'},
    33: {score:10,label: 'on Identity'},
    34: {score:10,label: 'on Culture'},
    35: {score:8,label: ''},
    36: {score:9,label: ''}

}

data[8].labels = {
    0: {score:5,label: 'on Identity'},
    1: {score:4,label: 'on Identity'},
    2: {score:3,label: 'on Identity'},
    3: {score:2,label: ''},
    4: {score:3,label: ''},
    5: {score:7,label: ''},
    6: {score:8,label: ''},
    7: {score:7,label: ''},
    8: {score:6,label: ''},
    9: {score:8,label: ''},
    10: {score:4,label: ''},
    11: {score:6,label: 'on Culture'},
    12: {score:3,label: ''},
    13: {score:5,label: ''},
    14: {score:5,label: ''},
    15: {score:4,label: ''},
    16: {score:3,label: 'on Culture'},
    17: {score:2,label: ''},
    18: {score:6,label: ''},
    19: {score:5,label: ''},
    20: {score:3,label: 'on Culture'},
    21: {score:7,label: 'on Culture'},
    22: {score:9,label: 'on Feelings'},
    23: {score:3,label: ''},
    24: {score:7,label: ''},
    25: {score:6,label: ''},
    26: {score:4,label: ''},
    27: {score:3,label: 'on Knowledge'},
    28: {score:5,label: ''},
    29: {score:7,label: 'on Knowledge'},
    30: {score:9,label: 'on Identity'},
    31: {score:5,label: 'on Knowledge'},
    32: {score:8,label: 'on Religion'},
    33: {score:6,label: ''},
    34: {score:7,label: 'on Knowledge'},
    35: {score:6,label: 'on Identity'},
    36: {score:6,label: ''},
    37: {score:5,label: ''},
    38: {score:8,label: 'on Knowledge'},
    39: {score:3,label: ''},
    40: {score:2,label: 'on Knowledge'},
    41: {score:7,label: ''},
    42: {score:8,label: 'on Knowledge'}

}

data[9].labels = {
    0: {score:2,label: 'on Knowledge'},
    1: {score:2,label: ''},
    2: {score:6,label: ''},
    3: {score:7,label: 'on Religion'},
    4: {score:8,label: ''},
    5: {score:10,label: ''},
    6: {score:8,label: ''},
    7: {score:7,label: 'on Knowledge'},
    8: {score:9,label: 'on Identity'},
    9: {score:8,label: 'on Knowledge'},
    10: {score:9,label: ''},
    11: {score:5,label: 'on Identity'},
    12: {score:4,label: 'on Identity'},
    13: {score:5,label: ''},
    14: {score:3,label: ''},
    15: {score:9,label: ''},
    16: {score:8,label: ''},
    17: {score:9,label: 'on Culture'},
    18: {score:8,label: ''},
    19: {score:9,label: ''},
    20: {score:7,label: ''},
    21: {score:8,label: ''},
    22: {score:7,label: ''},
    23: {score:8,label: ''},
    24: {score:6,label: 'on Knowledge'},
    25: {score:6,label: ''},
    26: {score:7,label: ''},
    27: {score:8,label: 'on Identity'},
    28: {score:5,label: ''},
    29: {score:6,label: ''},
    30: {score:5,label: ''},
    31: {score:5,label: 'on Identity'},
    32: {score:7,label: ''},
    33: {score:8,label: ''},
    34: {score:6,label: 'on Identity'},
    35: {score:7,label: ''},
    36: {score:8,label: ''},
    37: {score:6,label: ''},
    38: {score:5,label: ''},
    39: {score:9,label: 'on Culture'},
    40: {score:8,label: ''},
    41: {score:7,label: 'on Culture'},
    42: {score:6,label: ''},
    43: {score:8,label: 'on Identity'},
    44: {score:7,label: ''},
    45: {score:8,label: ''},
    46: {score:7,label: ''},
    47: {score:6,label: ''},
    48: {score:7,label: ''},
    49: {score:8,label: 'on Identity'},
    50: {score:"",label: ''}

}

data[10].labels = {
    0: {score:2,label: ''},
    1: {score:1,label: ''},
    2: {score:7,label: 'on Lonliness'},
    3: {score:6,label: ''},
    4: {score:9,label: 'on Religion'},
    5: {score:8,label: 'on Identity'},
    6: {score:3,label: 'on Religion'},
    7: {score:2,label: ''},
    8: {score:8,label: 'on Religion'},
    9: {score:7,label: ''},
    10: {score:8,label: ''},
    11: {score:9,label: ''},
    12: {score:6,label: 'on Culture'},
    13: {score:8,label: ''},
    14: {score:7,label: ''},
    15: {score:10,label: 'on Religion'},
    16: {score:6,label: ''},
    17: {score:7,label: ''},
    18: {score:"",label: ''}

}

data[11].labels = {
    0: {score:5,label: 'on Lonliness'},
    1: {score:3,label: ''},
    2: {score:6,label: ''},
    3: {score:7,label: ''},
    4: {score:3,label: ''},
    5: {score:2,label: 'on Culture'},
    6: {score:1,label: 'on Culture'},
    7: {score:8,label: 'on Lonliness'},
    8: {score:4,label: 'on Culture'},
    9: {score:7,label: 'on Culture'},
    10: {score:8,label: 'on Culture'},
    11: {score:5,label: ''},
    12: {score:7,label: ''},
    13: {score:9,label: 'on Religion'},
    14: {score:4,label: 'on Religion'},
    15: {score:3,label: ''},
    16: {score:2,label: 'on Culture'},
    17: {score:1,label: ''},
    18: {score:8,label: 'on Religion'},
    19: {score:8,label: ''},
    20: {score:9,label: ''},
    21: {score:10,label: ''},
    22: {score:5,label: ''},
    23: {score:4,label: ''},
    24: {score:3,label: ''},
    25: {score:10,label: ''},
    26: {score:6,label: ''},
    27: {score:8,label: 'on Religion'},
    28: {score:9,label: 'on Lonliness'},
    29: {score:10,label: ''},
    30: {score:7,label: ''},
    31: {score:9,label: ''},
    32: {score:"",label: ''}

}

data[12].labels = {
    0: {score:1,label: ''},
    1: {score:2,label: ''},
    2: {score:2,label: ''},
    3: {score:1,label: ''},
    4: {score:2,label: 'on Knowledge'},
    5: {score:3,label: ''},
    6: {score:7,label: 'on Identity'},
    7: {score:5,label: ''},
    8: {score:6,label: ''},
    9: {score:3,label: ''},
    10: {score:2,label: ''},
    11: {score:1,label: ''},
    12: {score:1,label: ''},
    13: {score:1,label: ''},
    14: {score:2,label: ''},
    15: {score:2,label: ''},
    16: {score:2,label: ''},
    17: {score:1,label: ''},
    18: {score:3,label: ''},
    19: {score:4,label: ''},
    20: {score:6,label: 'on Knowledge'},
    21: {score:2,label: ''},
    22: {score:2,label: ''},
    23: {score:6,label: ''},
    24: {score:7,label: ''},
    25: {score:8,label: 'on Identity'},
    26: {score:9,label: 'on Identity'},
    27: {score:6,label: 'on Identity'},
    28: {score:5,label: ''}

}


data[13].labels = {
    0: {score:1,label: ''},
    1: {score:6,label: 'on Knowledge'},
    2: {score:3,label: ''},
    3: {score:4,label: ''},
    4: {score:6,label: ''},
    5: {score:9,label: ''},
    6: {score:6,label: ''},
    7: {score:7,label: ''},
    8: {score:8,label: ''},
    9: {score:2,label: ''},
    10: {score:7,label: ''},
    11: {score:8,label: 'on Culture'},
    12: {score:4,label: ''},
    13: {score:7,label: ''},
    14: {score:5,label: ''},
    15: {score:6,label: ''},
    16: {score:5,label: ''},
    17: {score:5,label: ''},
    18: {score:7,label: 'on Lonliness'},
    19: {score:5,label: ''},
    20: {score:5,label: ''},
    21: {score:3,label: ''},
    22: {score:4,label: ''},
    23: {score:5,label: ''},
    24: {score:6,label: ''},
    25: {score:7,label: ''},
    26: {score:8,label: 'on Lonliness'},
    27: {score:7,label: 'on Lonliness'},
    28: {score:4,label: ''},
    29: {score:7,label: 'on Lonliness'},
    30: {score:3,label: ''},
    31: {score:6,label: ''},
    32: {score:8,label: ''},
    33: {score:9,label: ''},
    34: {score:10,label: 'on Knowledge'},
    35: {score:6,label: ''},
    36: {score:"",label: ''}

}

data[14].labels = {
    0: {score:6,label: ''},
    1: {score:7,label: 'on Identity'},
    2: {score:3,label: 'on Identity'},
    3: {score:7,label: ''},
    4: {score:8,label: 'on Identity'},
    5: {score:6,label: ''},
    6: {score:5,label: ''},
    7: {score:4,label: 'on Identity'},
    8: {score:5,label: 'on Identity'},
    9: {score:6,label: ''},
    10: {score:7,label: 'on Identity'},
    11: {score:3,label: 'on Identity'},
    12: {score:6,label: 'on Identity'},
    13: {score:7,label: ''},
    14: {score:3,label: ''},
    15: {score:8,label: ''},
    16: {score:7,label: 'on Identity'},
    17: {score:5,label: ''},
    18: {score:7,label: ''},
    19: {score:6,label: ''},
    20: {score:6,label: 'on Identity'},
    21: {score:5,label: 'on Identity'},
    22: {score:5,label: 'on Identity'},
    23: {score:6,label: ''},
    24: {score:7,label: ''},
    25: {score:8,label: ''},
    26: {score:6,label: ''},
    27: {score:7,label: ''},
    28: {score:9,label: ''},
    29: {score:5,label: ''},
    30: {score:6,label: ''},
    31: {score:8,label: 'on Lonliness'},
    32: {score:7,label: 'on Lonliness'},
    33: {score:6,label: ''},
    34: {score:"",label: ''}

}
fs.writeFileSync('./data1.json', JSON.stringify(data), 'utf-8')
