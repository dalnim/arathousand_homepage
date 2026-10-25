# 아라천자문 홈페이지

천자문 원문·발음·해설·삽화와 한자 상세 정보, 퀴즈를 소개하는 한국어 홈페이지입니다. 아라클래식과 멀티 비디오 플레이어 홈페이지의 정적 사이트 구조를 참고했습니다.

앱 소스와 분리된 **로컬 Git 저장소**입니다. 원격 저장소 등록, push, 공개 배포는 하지 않았습니다.

## 미리보기

`index.html`을 브라우저에서 직접 열면 됩니다. 로컬 서버를 사용하려면:

```sh
cd ~/Documents/workspace/homepages/arathousand_homepage
rtk proxy python3 -m http.server 4174 --bind 127.0.0.1
```

<http://127.0.0.1:4174>에서 확인합니다. 서버 종료는 `Ctrl+C`입니다. 빌드·패키지 설치·외부 폰트 없이 동작합니다.

## 다운로드

- [iPhone — App Store](https://apps.apple.com/kr/app/id6748657069)
- [Android — Google Play](https://play.google.com/store/apps/details?id=com.araonesoft.arathousand)
- Windows·Mac: 아이콘이 있는 비활성 ‘준비 중’ 버튼. 광고 없는 100% 무료 데스크톱 제공 예정 안내.

모바일 주소는 `flutter_apps/packages/ara_common/lib/constants/all_apps_info.dart`에서 확인했고, 두 페이지의 앱 이름과 HTTP 200 응답을 확인했습니다. 하단에는 모바일 다운로드로 무료 데스크톱 개발을 응원하는 문구가 있습니다. 모바일 무료 버전에는 광고와 일부 학습 내용의 광고 시청 조건이 있으며, FAQ에 안내합니다.

출시 시 `index.html`의 `.desktop-button`을 실제 다운로드 URL이 있는 링크로 바꾸고 ‘준비 중’ 문구를 갱신합니다.

## 구성

- `index.html`: 소개, 천자문 이야기, 기능, 퀴즈 체험, 다운로드, FAQ.
- `assets/css/style.css`: 크림색과 주황색을 활용한 반응형 디자인.
- `assets/js/script.js`: 모바일 메뉴, 천지현황 네 글자 뜻 미리보기, 퀴즈 한 문제와 다시 풀기.
- `assets/images/`: 앱 아이콘·삽화 및 스토어 배너.
- `.github/workflows/static.yml`: 참고 사이트와 같은 `master` 기준 GitHub Pages 워크플로. 로컬에서는 실행되지 않으며, 배포 시 `index.html`과 `assets/`만 공개 산출물에 포함합니다.

상단 학습 카드와 한자 뜻 미리보기는 앱 콘텐츠를 홈페이지용으로 구성한 예시입니다. 실제 앱 스크린샷이 아니며 앱 전체 기능을 구현하지는 않았습니다. 영상 영역은 포함하지 않았습니다.

## 디자인·콘텐츠 출처

- 앱: `../../flutter_apps/ara_thousand`.
- 색상: `lib/main.dart`, `lib/utils/color_util.dart`의 크림색 `#F5F5E7`, 강조색 `#FB8C00`. 홈페이지의 작은 글자는 가독성을 위해 더 짙은 주황색을 사용합니다.
- 아이콘: `assets/icons/app_icon.png` → `assets/images/ara-thousand-icon.png`.
- 삽화: `assets/images/100_1_inline.jpg`, `200_1_inline.jpg`, `300_1_inline.jpg`.
- 문구: `assets/content/cheonjamun_content_overrides.json`의 천지현황·일월영측·한래서왕을 홈페이지용으로 요약했습니다.
- 기능 확인: `lib/feature_learning/main_home_screen.dart`, `cheonjamun_detail_screen.dart`, `hanja_detail_screen.dart`, `quiz_screen.dart`.
- 스토어 배너와 Windows·Apple 아이콘: 기존 `araclassic_homepage` 및 `multivideoplayer_homepage`.

GitHub Pages 배포가 필요하면 원격 저장소를 별도로 등록하고 Settings → Pages의 Source를 GitHub Actions로 설정합니다.
