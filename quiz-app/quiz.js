var ques = [{question:"Question # 1: When did Quid-e-Azam take oath as first Governor General of Pakistan?",op1:"14th Aug 1947",op2:"15th Aug 1947",op3:"16th Aug 1947",op4:"17th Aug 1947"},
        {question:"Question # 2: Who became first Prime Minister of Pakistan?",op1:"Liaquat Ali Khan",op2:"Khwaja Nazimuddin",op3:"Mohammad Ali Bogra",op4:"Ghulam Mohammad"},
        {question:"Question # 3: Collectively how many Governor Generals ruled over Pakistan?",op1:"2",op2:"3",op3:"4",op4:"5"},
        {question:"Question # 4: When did Pakistan become member of United Nations?",op1:"15th Aug 1947",op2:"30th Aug 1947",op3:"15th Sep 1947",op4:"30th Sep 1947"},
        {question:"Question # 5: Which country opposed Pakistan's membership in United Nations?",op1:"India",op2:"Russia",op3:"Afghanistan",op4:"Malaysia"},
        {question:"Question # 6: Who was last Governor General of Pakistan?",op1:"Quaid-e-Azam",op2:"Khwaja Nazinuddin",op3:"Ghulam Mohammad",op4:"Iskander Mirza"},
        {question:"Question # 7: Which country accepted Pakistan first?",op1:"Iraq",op2:"Iran",op3:"Indonesia",op4:"India"},
        {question:"Question # 8: Who became second Prime Minister of Pakistan?",op1:"Choudhry Mohammad Ali",op2:"Khwaja Nazimuddin",op3:"Mohammad Ali Bogra",op4:"Malik Feroz Khan Noon"},
        {question:"Question # 9: When Quaid-e-Azam Mohammad Ali Jinnah was died?",op1:"11th Sep 1948",op2:"12th Sep 1948",op3:"13th Sep 1948",op4:"14th Sep 1948"},
        {question:"Question # 10: For how much rupees Ranjit Singh sold the Kashmir?",op1:"80 Lacs",op2:"75 Lacs",op3:"70 Lacs",op4:"65 Lacs"},
        {question:"Question # 11: India made a cowardly attack on Lahore which resulted as war between two countries. When this war broke out?",op1:"9th Sep 1965",op2:"8th Sep 1965",op3:"6th Sep 1965",op4:"7th Sep 1965"},
        {question:"Question # 12: When East Pakistan separated from West Pakistan?",op1:"26th December 1971",op2:"22nd December 1971",op3:"19th December 1971",op4:"16th December 1971"},
        ];
        var correct = ["op2","op1","op3","op4","op3","op4","op2","op2","op1","op2","op3","op4"];
        var timer = document.getElementById("timer");
        var str = document.getElementById("start");
        var quz = document.getElementById("quiz");
        var qus = quz.childNodes[5];
        var choice = quz.getElementsByTagName("input");
        var submit = document.getElementById("submit");
        var result = document.getElementById("result");
        var percent = document.getElementById("percent");
        var final = document.getElementById("final");
        var ans = document.getElementsByClassName("ans");
        var retake = document.getElementById("retake");
        var index = 0;
        var ans_i = 0;
        var score = 0;
        var total = 0;
        var min = 1;
        var sec = 59;
        var interval;
        function start(){
            result.className = "hide";
            index = 0;ans_i = 0;score = 0;total = 0;min = 1;sec = 59;
            str.parentNode.parentNode.className = "hide";
            str.parentNode.parentNode.nextElementSibling.className = "show";
            interval = setInterval(time, 1000);
            quiz();
        }
        function quiz(){
            qus.innerHTML = ques[index].question;
            for (var j=0; j<choice.length; j++){
                choice[j].checked = false;
            }
            submit.disabled = true;
            choice[0].nextSibling.textContent = ques[index].op1;
            choice[1].nextSibling.textContent = ques[index].op2;
            choice[2].nextSibling.textContent = ques[index].op3;
            choice[3].nextSibling.textContent = ques[index].op4;
        }
        function next(){
            for (var i = 0; i < choice.length; i++){
                if (choice[i].checked){
                    if (choice[i].value === correct[ans_i]){
                        score++;
                    }
                }
            }
            index++;
            ans_i++;
            if(index === ques.length){
                resultf();
            }
            quiz();
        }
        function resultf(){
            clearInterval(interval);
            quz.className = "hide";
            final.innerHTML = score + " out of " + ques.length;
            total = (score/correct.length)*100;
            total = total.toFixed(2);
            percent.innerHTML = total + "%";
            result.className = "show";
        }
        function enable(){
            submit.disabled = false;
        }
        function time(){
            timer.innerHTML = min + ":" + sec;
            sec--;
            if (sec < 0){
                min--;
                sec = 59;
                if (min < 0){
                    alert("Quiz time is up!")
                    resultf();
                }
            }
        }

        str.addEventListener("click",start);
        submit.addEventListener("click",next);
        ans[0].addEventListener("click",enable);
        ans[1].addEventListener("click",enable);
        ans[2].addEventListener("click",enable);
        ans[3].addEventListener("click",enable);
        retake.addEventListener("click",start)