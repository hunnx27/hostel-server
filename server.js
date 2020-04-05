const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) => {
  res.send('/ connect!');
})
app.get('/api/products', (req,res) => {
    res.send([
        {
          "id":1,
          "image": "https://placeimg.com/200/140/1",
          "productNo": "51-4149",
          "region": "연천군",
          "title": "모텔임대합니다. 임대 서울1시간거리",
          "subtitle": "저렴한 투자비@21객실",
          "guaranteePrice": "2000",
          "monthPrice": "200",
          "wishRightPrice": "1800",
          "totalPrice": "3800",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "337",
          "sellerName": "서도인",
          "sellerPhone": "010-1234-1234"
        },
        {
          "id":2,
          "image": "https://placeimg.com/200/140/2",
          "productNo": "51-4149",
          "region": "서울 종로구",
          "title": "종로구 게스트하우스",
          "subtitle": "자리만 마음에 드시면 권리금 협상해드립니다!",
          "guaranteePrice": "2000",
          "monthPrice": "200",
          "wishRightPrice": "1800",
          "totalPrice": "3800",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "238",
          "sellerName": "최민수",
          "sellerPhone": "010-1234-1234"
        },
        {
          "id":3,
          "image": "https://placeimg.com/200/140/3",
          "productNo": "51-4149",
          "region": "인천 미추홀구",
          "title": "유흥가 중심상권 모텔 임대",
          "subtitle": "백악관나이트 한국관나이트등 유흥가 중심상권 모텔",
          "guaranteePrice": "5000",
          "monthPrice": "440",
          "wishRightPrice": "1000",
          "totalPrice": "6000",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "337",
          "sellerName": "김수미",
          "sellerPhone": "010-1234-1234"
        }
      ]);
});

app.get('/api/products/:id', (req,res) =>{
  var result = '';
  console.log(req.params.id)
  if(req.params.id == '1'){
    result = {
      "id":1,
      "image": "https://placeimg.com/200/140/1",
      "productNo": "51-4149",
      "region": "연천군",
      "title": "모텔임대합니다. 임대 서울1시간거리",
      "subtitle": "저렴한 투자비@21객실",
      "guaranteePrice": "2000",
      "monthPrice": "200",
      "wishRightPrice": "1800",
      "totalPrice": "3800",
      "realProdChkday": "2019-10-29 14:12",
      "viewCnt": "337",
      "sellerName": "서도인",
      "sellerPhone": "010-1234-1234",
      "bsType":"연천군",

      "addr":"경기북부 연천군 전곡읍 전곡리 333-251",
      "addrNew":"경기 연천군 전곡읍 은전로86번길 47 (롯데모텔)",
      "floor":"1층",
      "floorSpace":"211.72",
      "mainCost":"없음",
      "content":` 
            ■ 매물설명\n
            경기도 연천군에 위치한 여관 임대입니다 .\n
            \n
            전곡 시외버스터비널 도보5분\n
            전곡역 도보 5분입니다\n
            \n
            ■ 매출과 수익\n
            총매출700~800만입니다 .\n
            이부분은 지난1년간 거래내역서를 정확하게 오시면 현장에서 보영드리겠습니다 .\n
            \n
            ■ 시설과 인테리어\n
            객실 21개  1개 살림방입니다 .\n
            여관 시설 다 넘깁니다 몸만오셔서 운영하면됩니다 ..\n
            \n
            ■ 입지와 특징설명\n
            전곡역 도보5분 \n
            술집 음식집들 24시 집도 많으며 \n
            평일엔 낚시 손님 장기방은 고사손님이 많은편입니다 .\n
            \n
            ■ 매매사유\n
            개인적인 사정으로 매매합니다 \n`
    }
  }else{
    result = {
      "id":2,
      "image": "https://placeimg.com/200/140/2",
      "productNo": "51-4149",
      "region": "서울 종로구",
      "title": "종로구 게스트하우스",
      "subtitle": "자리만 마음에 드시면 권리금 협상해드립니다!",
      "guaranteePrice": "2000",
      "monthPrice": "200",
      "wishRightPrice": "1800",
      "totalPrice": "3800",
      "realProdChkday": "2019-10-29 14:12",
      "viewCnt": "238",
      "sellerName": "최민수",
      "sellerPhone": "010-1234-1234",
      "bsType":"연천군",

      "addr":"서울시 종로구 와룡동 140",
      "addrNew":"서울 종로구 돈화문로 85",
      "floor":"2층",
      "floorSpace":"330.58",
      "mainCost":"없음",
      "content":`■ 매물설명\n
        ● 부동산 교환 의사 없습니다. 교환 문의 사절!!\n
        ● 기타 궁금하신 내용은 매물주나 [등록 에이전트]에게 문의하세요.\n
        ● 점포라인 광고 보고 문의드린다고 말씀하시면 됩니다.\n
        ● 성업중인 매장이므로 방문 전 [등록 에이전트]에게 미리 연락주시기 바랍니다.\n\n
        
        - 종로구 와룡동에 위치한 게스트하우스입니다.\n
        - 안국역과 종로3가역 사이에 위치하고 있으며, 창덕궁 앞으로 관광객 많은 자리입니다.\n
        - 1인실 2개, 2~3인실 25개, 4인실 이상 4개 있습니다.\n
        - 지하 1층에서 5층까지입니다.\n
        - 관광객 유입이 꾸준한 곳으로 운영만 잘 하시면 되는 곳입니다.\n\n

        ■ 매출과 수익\n
        - 권리금 협의 가능합니다. 자리 먼저 보시고 연락주세요!\n
        - 관리비 약 300만원이며, 월세 부가세 별도입니다.\n\n

        ■ 시설과 인테리어\n
        - 1인실 2개, 2~3인실 25개, 4인실 이상 4개 있습니다.\n
        - 지하 1층에서 5층까지입니다.\n\n

        ■ 입지와 특징설명\n
        - 안국역과 종로3가역 사이에 위치하고 있으며, 창덕궁 앞으로 관광객 많은 자리입니다.\n
        - 관광객 유입이 꾸준한 곳으로 운영만 잘 하시면 되는 곳입니다.\n\n

        ■ 매매사유\n
        - 사업 관리차 매매하시게 되셨습니다.\n`
    }
  }
  res.send(
    result
  )
})
app.listen(port, () => console.log(`listening on port ${port}`));