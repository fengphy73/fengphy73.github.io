# Phy 老師教具入口

台灣高中物理老師用的教具入口網站。上線網址是 [https://fengphy73.github.io/](https://fengphy73.github.io/)。

每個教具是獨立的 GitHub 程式庫，用 GitHub Pages 發佈。這個頁面只負責把它們排成卡片：點卡片或「開啟網站」打開教具，點「原始碼」打開程式庫。

純靜態 HTML、CSS、JavaScript。沒有建置步驟，也不用外部服務。

## 本機開啟

用瀏覽器直接打開 `index.html` 即可。不需要安裝套件，也不需要開網站伺服器。

資料放在 `projects.js`，用一般的 `<script>` 讀取，所以用檔案網址（`file://`）打開也看得到卡片。

## 新增一個教具

只改 `projects.js`。打開 `window.TEACHING_PROJECTS`，複製最後一筆，貼到陣列最後面，改成新教具的內容，存檔後重新整理入口頁。

```js
{
  name: "教具名稱",
  summary: "一句話說明這個教具做什麼。",
  version: "1.0",
  status: "上線中",
  url: "https://fengphy73.github.io/你的程式庫/",
  source: "https://github.com/fengphy73/你的程式庫"
}
```

| 欄位 | 寫什麼 |
| --- | --- |
| `name` | 卡片標題 |
| `summary` | 一句話用途 |
| `version` | 版本號，不要自己加 `v`。還沒有版本就留 `""`，卡片顯示「未定」 |
| `status` | `上線中`、`開發中` 或 `網址待補`。其他文字也會顯示 |
| `url` | 教具的 GitHub Pages 網址。還沒有就留 `""` |
| `source` | GitHub 程式庫網址。還沒有就留 `""` |

`url` 或 `source` 留空時，那一格不會變成連結。網站還沒有網址時，卡片會標「網址待補」。不要填 `#`、`javascript:` 或其他假網址；不是 `http` / `https` 的值會被略過，並在頁面上顯示錯誤。

改完後用瀏覽器重新整理 `index.html`，確認新卡片的名稱、版本、狀態和兩個連結。合併到 `main` 後，使用者網站會更新。

## 目前的教具

| 名稱 | 版本 | 狀態 | 網站 | 原始碼 |
| --- | --- | --- | --- | --- |
| 風機葉片與壓模設計器 | 1.2.2 | 上線中 | https://fengphy73.github.io/blade-mold-designer/ | https://github.com/fengphy73/blade-mold-designer |
| 出水口接水收納架設計器 | 1.0 | 上線中 | https://fengphy73.github.io/water-tray-designer/ | https://github.com/fengphy73/water-tray-designer |
| 雷切支架產生器 | 未定 | 網址待補 | 尚未有網址，卡片不放連結 | 尚未有程式庫網址 |

接水收納架的公開名稱是「出水口接水收納架設計器」。網站與 `package.json` 的版本是 v1.0（`1.0.0`）。它讓老師調整寬高深，預覽放在熱水瓶出水口下方的架子，並下載外殼、格柵蓋、集水盒與收納抽屜的 STL。

## 發佈

這個程式庫是 GitHub 使用者網站。`main` 分支根目錄的 `index.html` 會發佈到 [https://fengphy73.github.io/](https://fengphy73.github.io/)。

根目錄有空白的 `.nojekyll`，GitHub Pages 會直接送出這些檔案，不經過 Jekyll。
