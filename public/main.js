//AJAX实现分页
let n = 1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            const array=JSON.parse(request.response)
            array.forEach(item => {
                const li=document.createElement('li')
                li.textContent=item.id
                xxx.appendChild(li)
            });
            n += 1;
        }
    }
    request.send()
}

//AJAX加载JSON 获得JSON对象
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const object = JSON.parse(request.response)
            myName.innerHTML = object['name']
        } else {
            '加载JSON失败'
        }
    }
    request.send()
}

//AJAX加载XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            //request.responseXML是一个DOM对象
            console.log(request.responseXML)
            //获得dom对象
            const dom = request.responseXML
            //获得dom对象里的标签文本
            const text = dom.getElementsByTagName('warning')[0].textContent
            //打出无空格文本text.trim()
            //console.log(text.trim())
        } else {
            '加载XML失败'
        }
    }
    request.send()
}

//AJAX加载HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.html')
    request.onload = () => {
        //创建div标签，插入body
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

//AJAX加载JS
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js')
    request.onload = () => {
        //创建插入script标签
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

//AJAX加载CSS
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //style插入内容
                style.innerHTML = request.response
                //把style插入头部
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }
    request.send()
}