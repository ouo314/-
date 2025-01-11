
const tests = {
    "髂腰肌/股直肌柔軟度": {
        description: `抱住一隻腳，穩定住骨盆維，觀察懸空那隻腳的柔軟度。\n\n
準備：找一個比小腿還高且可以平躺的平台\n\n
操作步驟：\n
1. 請操作者屁股坐在平台邊緣慢慢躺下，大腿後側1/3接觸床面，2/3則是懸空\n
2. 同時屈膝抬起兩隻腳\n
3. 雙手抱住非測試腳穩定骨盆\n
4. 將測試腳慢慢的往前往下延伸`,
        image: "/photo/髂腰.png"
    },
    "背直肌/膕旁肌/腓腸肌柔軟度": {
        description: `採長坐姿：\n
1. 雙腿同肩寬\n
2. 膝伸直（不可屈曲）\n
3. 雙手慢慢地向前移動，保持直膝，移至最遠的位置`,
        image: "photo/背直.png"
    },
    "膕旁肌柔軟度": {
        description: `平躺在一個完全放鬆的姿勢：\n
1. 假設是左腳不舒服，可以請家人或朋友把左腳緩慢抬起來\n
2. 沒有抬起的那一條腿放鬆即可\n
3. 注意腳要呈現放鬆姿勢時，膝蓋不能彎曲\n
4. 協助的家人可以將一隻手扶著膝蓋，一隻手將腿抬起來，緩慢地抬高`,
        image: "photo/膕膀.png"
    },
    "髂脛束柔軟度": {
        description: `測試步驟一：\n
1. 讓患者側臥，支撐膝蓋並彎曲至90度\n
2. 然後外展並伸展髖部\n
3. 然後放開膝蓋支撐\n
4. 膝關節未能內收則為陽性測試\n\n
測試步驟二：\n
1. 檢查者將穩定手放在患者的上髂嵴上\n
2. 抬起大腿，彎曲膝蓋，伸展臀部\n
3. 然後慢慢向下腿降低，讓大腿向桌子方向降低\n
4. 檢查者必須繼續穩定臀部以確保沒有移動\n
5. 如果患者無法將腿部內收至與桌子平行的中立位置，則測試結果為陽性`,
        image: "photo/髂脛.png"
    },
    "胸大肌柔軟度": {
        description: `1. 平躺\n
2. 手掌朝上於肩外展90度/135度之下\n
3. 進行肩關節橫向外展`,
        image: "photo/胸大.png"
    },
    "胸小肌柔軟度": {
        description: `1. 採平臥姿\n
2. 從患者頭頂觀察肩峰與地之距離`,
        image: "photo/胸小.png"
    },
    "大圓肌/背闊肌/菱形肌柔軟度": {
        description: `1. 患者平臥、膝蓋微彎、腳踩在床面\n
2. 腰部略為拱起\n
3. 將兩手向上抬於頭側，上舉到底\n
4. 觀察手臂和床面的貼合程度`,
        image: "photo/大圓.png"
    },
    "肩旋轉肌柔軟度": {
        description: `1. 患者平臥、膝蓋微彎、腳踩在床面\n
2. 待測手臂肩外展90度、肘屈曲90度\n
3. 觀察患者內、外旋之角度`,
        image: "photo/肩旋.png"
    }
};


const testButtons = document.querySelectorAll(".test-button");
const testImage = document.getElementById("test-image");
const testDescription = document.getElementById("test-description");

testButtons.forEach(button => {
    button.addEventListener("click", () => {
        const testName = button.getAttribute("data-test");
        const test = tests[testName];

        if (test) {
            testImage.src = test.image;

            testDescription.innerHTML = test.description
                .trim()
                .replace(/\n\n/g, '<br><br>')
                .replace(/\n/g, '<br>')
                .replace(/\s+/g, ' ');
        }
    });
});
