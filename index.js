function getCurrentAge(date){
    async:true
    let cdate = new Date()
    let bdate = new Date(date)
    // get timestamp for 2 date
    
    cdate = cdate.getTime()

    bdate = bdate.getTime()

    // get diff year between 2 date

    let datesDiff = Math.abs(cdate - bdate)
   
    let oneday = 1000 * 60 * 60 * 24 
    return Math.floor( datesDiff / (oneday * 366))
}

let age = getCurrentAge('1999-03-24')

const info = {
    "firstName":"Nader",
    "job":"Web Developer",
    "lastName":"Elsadig",
    "usernameOnGithub":"naderStack",
    "country":"sudan",
    "currentCountry":"USA",
    "age":age,
    "fullName":"Nader Elsadig",
    "bio":"i am developer backend nodejs ",
    "progress":{
                "frontend":[
                    {"name":"html","progress":"85"},
                    {"name":"css","progress":"80"},
                    {"name":"javaScript","progress":"80"},
                    {"name":"bootstrap","progress":"70"},
                    {"name":"react","progress":"0"},
                ],
                "backend":{
                    "0":{"name":"Node","progress":"40"},
                    "1":{"name":"ejs","progress":"70"},
                },
                "databases":{
                    "0":{"name":"sqlite","progress":"80"},
                    "1":{"name":"mysql","progress":"90"},
                    "1":{"name":"postgresql","progress":"70"},
                    "1":{"name":"mongoDB","progress":"0"},
                },
                "tools":{
                    "0":{"name":"git","progress":"40"},
                    "1":{"name":"Docker","progress":"0"},
                },
                "os":{
                    "0":{"name":"window","progress":"90"},
                    "1":{"name":"linux","progress":"60"},
                    "1":{"name":"macos","progress":"50"},
                    },
                "typing":{
                    "0":{"name":"Arabic","progress":"45"},
                    "1":{"name":"English","progress":"50"}
                }
    },
"level" : {
    "0": {"name": "Beginner", "desc": "أنا أستطيع كتابة المتغيرات، الحلقات، والجمل الشرطية الأساسية"},
    "1": {"name": "Elementary", "desc": "أنا أستطيع كتابة دوال بسيطة والتعامل مع القوائم والمصفوفات"},
    "2": {"name": "Intermediate", "desc": "أنا أستطيع فهم OOP، التعامل مع الأخطاء، وقراءة وثائق API"},
    "3": {"name": "Upper-Intermediate", "desc": "أنا أستطيع استخدام الخوارزميات الأساسية، Git، وتنقيح الأخطاء (debugging)"},
    "4": {"name": "Advanced", "desc": "أنا أستطيع كتابة كود معياري، تطبيق أنماط التصميم، والتعامل مع قواعد البيانات"},
    "5": {"name": "Expert", "desc": "أنا أستطيع تصميم أنظمة قابلة للتوسع، تحليل Big O، ومراجعة كود الآخرين"},
    "6": {"name": "Solutions Architect", "desc": "أنا أستطيع تحديد البنية التحتية والتقنيات المناسبة للمشاريع المتكاملة"},
    "7": {"name": "Open Source Contributor", "desc": "أنا أستطيع المساهمة في مشاريع مفتوحة المصدر كبرى مثل Linux أو TensorFlow"},
    "8": {"name": "Global Production Level", "desc": "أنا أستطيع بناء كود يُستخدم في الإنتاج لشركات كبرى مثل Google أو Microsoft"},
    "9": {"name": "Standards Contributor", "desc": "أنا أستطيع المشاركة في كتابة معايير عالمية مثل ISO أو IEEE أو RFC"}
},
"dateCreate":"2026-05-26",
"email":"wa21nadirhi@gmail.com",

"try":{
    "programming":['python [django 5]','c++','php 7'],
    "os": {
        "windows":["xp","7","8","10","11" ],

        "linux":[
            "ubuntu [ unity / gnome] ",
            "neon [kde]",
            "fedora [kde]",
            "debian [kde]",
            "manjaro [kde]",
            "linuxmint [cinamon]",
            
        ],
        "mac":["highserria","mojava","catalina","bigsur","monstrara"],


    }
}

}

import ejs from 'ejs';

import {createServer} from 'http';

import { fileURLToPath } from 'url';
import { dirname , join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

createServer((req,res)=>{
        ejs.renderFile
        (join(__dirname,'views','home.ejs'),
        {info},
        (err,html) =>{
            if (err) {
                console.log(err)
            }
            res.writeHead(200,
                {'Content-Type':'text/html'});
            res.end(html)    
        })
}).listen(3000)


