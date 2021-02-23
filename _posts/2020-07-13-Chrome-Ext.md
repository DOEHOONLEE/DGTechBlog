---
title : "Build Chrome Extension!"

categories:
      - Chrome Extension

tags:
    - Chrome Extension
---

> Author: Doe Hoon LEE


## 크롭 확장 프로그램을 만들어 봅시다!

### [1] 필요한 폴더와 파일들을 만듭니다.

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/content.PNG)

사용 할 이미지는 assets => img 폴더에

앞으로 사용될 script 파일들은 app => src 폴더에 만들어 넣었습니다.

manifest.json 은 JSON 형식으로 된 파일이며 확장 프로그램을 정의하는 요소들이 들어있습니다.

=> 이름, 버전, 사용되는 파일들의 경로, 등등.


### [2] manifest.json 작성 !

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/manifest.PNG)

[ 필수! ]

line 2 => "name" : 확장 프로그램의 이름 

line 3 => "version" : 확장 프로그램의 버전

line 5 => "manifest_version" : 2로 적어줍니다!

2014년 부터 manifest_version : 1 은 적용되지 않게 되었습니다.

더 궁금하신 분은 **[여기로!](https://developer.chrome.com/extensions/manifestVersion)**

[ 선택! ]

line 4 => "description" : 확장 프로그램 설명

line 15 => 내가 만든 확장 프로그램이 실행되기를 원하는 사이트 주소

line 18 => 확장 프로그램에 사용하고싶은 JavaScript 파일 경로


### [3] content.js 작성 !

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/script.PNG)

웹사이트를 열었을 때 alert 내의 내용이 나옵니다


### [4] 만든 확장 프로그램을 크롬에 추가하기 !

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/howto1.PNG)

(1) 크롬을 열고 "확장 프로그램" 에 들어갑니다.

(2) "확장 프로그램을 로드합니다." 를 눌러 우리가 만든 프로그램의 폴더를 선택합니다.

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/howto2.PNG)

(3) 앱이 만들어진 것을 확인할 수 있습니다!

manifest.json 에서의 name, version, description 이 보입니다.

이미지는 본인이 원하는 이미지를 만들어 사용합시다 ^^;


### [5] 만들어진 프로그램의 작동 여부 확인 ~!

![filelist]({{ site.url }}{{ site.baseurl }}/assets/img/chrome/first/howto3.PNG)

content.js 에서 작성한 내용이 나옵니다!

오른쪽 상단에는 확장 프로그램의 아이콘이 보이네요!


***

다음에는 좀 더 기능이 들어간 프로그램을 만들어보도록 하겠습니다~!