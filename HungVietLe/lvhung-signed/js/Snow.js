// Snow VIP - Hỗ trợ Telegram: @hoang3te (https://t.me/hoang3te)
var hoang3te = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const list = {
  "iphoneapp.epik": { id: "com.snowcorp.epik.subscribe.plan.oneyear" },  //Epik-AI Chỉnh sửa ảnh và video
  "iphoneapp.snow": { id: "com.campmobile.snow.subscribe.oneyear" }  //SNOW-AI ảnh chụp
};

for (const key of Object.keys(list)) {
    if (new RegExp(`^${key}`, "i").test(ua)) {
        hoang3te.result = {
        "products": [
            {
                "managed": true,
                "status": "ACTIVE",
                "startDate": times,
                "productId": list[key].id,
                "expireDate": 32662137600000
            }
        ],
        "tickets": [
            {
                "managed": true,
                "status": "ACTIVE",
                "startDate": times,
                "productId": list[key].id,
                "expireDate": 32662137600000
            }
        ],
        "activated": true
        };
        
        break;
    }
}

$done({ body: JSON.stringify(hoang3te) });